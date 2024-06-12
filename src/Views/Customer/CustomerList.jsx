import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomDataTable from '../CustomPages/CustomDataTable';
import ConfirmAlertDialog from '../../utils/AlertDialog/ConfirmAlertDialog';
import { Http } from '../../services/api';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';

const CustomerList = () => {

  const [customerLists, setCustomerLists] = useState(false);
  const [vehicleClassData, setVehicleClassData] = useState(false);

  useEffect(() => {
    fetchCustomer();
    fetchVehicleClass();
}, []);


const handleDelete = async (id) => {
  const isConfirmed = await ConfirmAlertDialog({
      confirmButtonText: 'Yes, delete it!',
      message: 'Are you sure you want to delete?',
  });
  if (isConfirmed) {
      const response = await Http.delete(`/customer/${id}`)
      .then(async()=>{
        fetchCustomer();
          await AlertDialog({ title: "Deleted!", message: "User has been deleted.", icon: "success" });
      }).catch(async(error)=> {
        fetchCustomer()
        await AlertDialog({ title: "Deleted!", message: error?.response?.data?.meta?.message ?? "User has not been deleted.", icon: "error" });
      });
  }
};

const getAge = (dob)=> {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear()- birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}
return age;
}

const fetchCustomer = async () => {
  try {
      // const response = await fetch(`${API_BASE_URL}/customer`);
      const response = await Http.get("customer");
      setCustomerLists(response.data.data);
  } catch (error) {
      console.error(error);
  }
};

const fetchVehicleClass = async()=> {
  try {
    const result = await Http.get("vehicle_class");
    setVehicleClassData(result.data.data);
} catch (error) {
    console.error(error);
}
}


  const columns = [
    {
        name: 'Date',
        selector: row => new Date(row.created_at).toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"short"}),
    },
    {
        name: 'Register No',
        selector: row => row.id,
    },
    {
        name: 'Name',
        selector: row => row.full_name,
    },
    {
        name: 'NIC No',
        selector: row => row.nic,
    },
    {
        name: 'Date of Birth',
        selector: row => row.dob,
    },
    {
        name: 'Age',
        selector: row =>getAge(row.dob),
    },
    {
        name: 'Vehicle Classes',
        selector: row => JSON.parse(row.vehicle_class).map(item => item.name).join(", "),
    },
    {
        name: 'Amount',
        selector: row =>row.vehicle_classes.reduce((total, val) => total + val.amount, 0),
          // amount(row.vehicle_class, "amount"),
          // row.id 
          // style:{width:"500ch"}
    },
   
    {
        name: 'Action',
        center: true,
        cell: (row) => (
            <div>
                {/* <Permission type={["member.edit"]}> */}
                    <Link
                        className="text-success me-2"
                        to={'/profile'}
                        state={row}
                    >
                         <i className="far fa-address-card"></i>
                    </Link>
                {/* </Permission> */}
                {/* <Permission type={["member.edit"]}> */}
                    <Link
                        className="text-success me-2"
                        to={'/editCustomer'}
                        state={row}
                    >
                         <i className="fas fa-pencil-alt"></i>
                    </Link>
                {/* </Permission> */}
                {/* <Permission type={["member.delete"]}> */}
                    <Link
                        className="me-2 text-danger"
                        onClick={() => handleDelete(row.customer_id)}
                    >
                         <i className="fas fa-trash"style={{color:'red'}}></i>
                    </Link>
                {/* </Permission> */}
            </div>
        ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="card-title">Customer</h4>
            <Link to="/createCustomer">
              <button type="button" className="btn btn-primary waves-effect waves-light">
              CreateCustomer +
              </button>
            </Link>
          </div>
          <div className="card-body table-responsive">
            <CustomDataTable
              dataRows={customerLists}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
