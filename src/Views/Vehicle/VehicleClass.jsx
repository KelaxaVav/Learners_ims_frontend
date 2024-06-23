import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomDataTable from '../CustomPages/CustomDataTable';
import ConfirmAlertDialog from '../../utils/AlertDialog/ConfirmAlertDialog';
import { Http } from '../../services/api';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';

 const VehicleClass = () => {

  const [vehicleClassLists, setVehicleClassLists] = useState(false);

  useEffect(() => {
    fetchVehicleClass();
}, []);

const fetchVehicleClass = async () => {
  try {
      // const response = await fetch(`${API_BASE_URL}/customer`);
      const response = await Http.get("vehicle_class");
      setVehicleClassLists(response.data.data);
  } catch (error) {
      console.error(error);
  }
};

const handleDelete = async (id) => {
  const isConfirmed = await ConfirmAlertDialog({
      confirmButtonText: 'Yes, delete it!',
      message: 'Are you sure you want to delete?',
  });
  if (isConfirmed) {
      const response = await Http.delete(`/vehicle_class/${id}`)
      .then(async()=>{
        fetchVehicleClass();
          await AlertDialog({ title: "Deleted!", message: "Vehicle Class has been deleted.", icon: "success" });
      }).catch(async(error)=> {
        fetchVehicleClass()
        await AlertDialog({ title: "Deleted!", message: error?.response?.data?.meta?.message ?? "Vehicle Class has not been deleted.", icon: "error" });
      });
  }
};

const columns = [
  {
      name: 'Name',
      selector: row => row.name,
  },
  {
      name: 'Amount',
      selector: row => row.amount,
  },
  {
      name: 'BIV Amount',
      selector: row => row.piv_amount,
  },
  {
      name: 'Description',
      selector: row => row.description,
  },
  {
      name: 'Action',
      center: true,
      cell: (row) => (
          <div>
              
              {/* <Permission type={["member.edit"]}> */}
                  <Link
                      className="text-success me-2"
                      to={'/edit-vehicle-class'}
                      state={row}
                  >
                       <i className="fas fa-pencil-alt"></i>
                  </Link>
              {/* </Permission> */}
              {/* <Permission type={["member.delete"]}> */}
                  <Link
                      className="me-2 text-danger"
                      onClick={() => handleDelete(row.vehicleClass_id)}
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
          <Link to="/create-vehicle-class">            <button type="button" className="btn btn-primary waves-effect waves-light">
            CreateCustomer +
            </button>
          </Link>
        </div>
        <div className="card-body table-responsive">
        <CustomDataTable
          dataRows={vehicleClassLists}
          columns={columns}
        />
        </div>
      </div>
    </div>
  </div>
  )
}

export default VehicleClass;