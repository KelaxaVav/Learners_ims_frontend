import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomDataTable from '../CustomPages/CustomDataTable';
import ConfirmAlertDialog from '../../utils/AlertDialog/ConfirmAlertDialog';
import { Http } from '../../services/api';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';


const ExamBooks = () => {

  const [ExamBookLists, setExamBookLists] = useState(false);
  const [VehicleClassLists, setVehicleClassLists] = useState();
  const { state } = useLocation();

  useEffect(() => {
    fetchExamBook();
  }, []);

  const fetchExamBook = async () => {
    try {
      const response = await Http.get(`exam-book-date/${state.exam_date_id}`);
      setExamBookLists(response.data.data);
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
      await Http.delete(`/exam-book/${id}`)
        .then(async () => {
          fetchTrialDate();
          await AlertDialog({ title: "Deleted!", message: "Exam Book has been deleted.", icon: "success" });
        }).catch(async (error) => {
          fetchTrialDate()
          await AlertDialog({ title: "Deleted!", message: error?.response?.data?.meta?.message ?? "Exam Book has not been deleted.", icon: "error" });
        });
    }
  };

  const columns = [
    {
      name: 'Register No',
      selector: row => row.customer.id,
    },
    {
      name: 'Name',
      selector: row => row.customer.full_name,
    },
    {
      name: 'NIC No',
      selector: row => row.customer.nic,
    },
    {
      name: 'TP Number',
      selector: row => row.customer.personal_pno,
    },
    {
      name: 'Class',
      selector: row => JSON.parse(row.customer.vehicle_class).map((val) => val.name).join(", "),
    },
    {
      name: 'PIV Amount',
      selector: row => row.customer.vehicle_classes.reduce((total, val) => (total + val.piv_amount), 0),
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: 'Action',
      center: true,
      cell: (row) => (
        <div>

          {/* <Permission type={["member.edit"]}> */}
          <Link
            className="text-success me-2"
            to={'/edit-trial-date'}
            state={row}
          >
            <i className="fas fa-pencil-alt"></i>
          </Link>
          {/* </Permission> */}
          {/* <Permission type={["member.delete"]}> */}
          <Link
            className="me-2 text-danger"
            onClick={() => handleDelete(row.exam_type)}
          >
            <i className="fas fa-trash" style={{ color: 'red' }}></i>
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
          <div className="card-header ">
            <div className='d-flex justify-content-between mb-3'>
              <h4 className="card-title">ExamBook - 2024-05-10</h4>
              <div class="btn-group dropstart">
                {/* <a class="btn btn-link text-muted py-1 font-size-16 shadow-none" href="#" role="button"> */}
                <button type="button" className="btn btn-primary waves-effect waves-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">  Add To Exam +</button>
                {/* </a> */}

                <ul class="dropdown-menu dropdownmenu-success">
                  <li> <Link to="/createExamBook"  state={{type:"direct",exam_date_id:state.exam_date_id}}  className="dropdown-item"> Direct Exam </Link> </li>
                  <li> <Link to="/createExamBook"  state={{type:"re_exam",exam_date_id:state.exam_date_id}} className="dropdown-item"> Re Exam </Link> </li>
                  <li> <Link to="/createExamBook"  state={{type:"extern",exam_date_id:state.exam_date_id}} className="dropdown-item"> Extern </Link> </li>
                </ul>
              </div>
            </div>
            <div className="row d-flex justify-content-center ">
              <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                {/* <label htmlFor="example-balance-input" className="form-label">Bill No | NIC No </label> */}
                <input className="form-control" type="text" placeholder='Search...' />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-12 mb-2 d-flex justify-content-center justify-content-md-between ">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                  Search
                </button>
              </div>

            </div>

          </div>
          <div className="card-body table-responsive">
            <CustomDataTable
              selectableRows ={true}
              dataRows={ExamBookLists}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamBooks;
