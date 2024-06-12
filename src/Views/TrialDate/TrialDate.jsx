import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomDataTable from '../CustomPages/CustomDataTable';
import ConfirmAlertDialog from '../../utils/AlertDialog/ConfirmAlertDialog';
import { Http } from '../../services/api';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';

const TrialDate = () => {

  const [TrialDateLists, setTrialDateLists] = useState(false);

  useEffect(() => {
    fetchTrialDate();
}, []);

const fetchTrialDate = async () => {
  try {
      const response = await Http.get("trial-date");
      setTrialDateLists(response.data.data);
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
     await Http.delete(`/trial-date/${id}`)
      .then(async()=>{
        fetchTrialDate();
          await AlertDialog({ title: "Deleted!", message: "Trial Date has been deleted.", icon: "success" });
      }).catch(async(error)=> {
        fetchTrialDate()
        await AlertDialog({ title: "Deleted!", message: error?.response?.data?.meta?.message ?? "Trial Date has not been deleted.", icon: "error" });
      });
  }
};

const columns = [
  {
      name: 'Trial Date',
      selector: row => row.trial_date,
  },
  {
      name: 'Exam Date',
      selector: row => row.exam_dates.map((val)=>(val.exam_date)).join(' , '),
  },
  {
      name: 'Limit Person',
      selector: row => row.limit,
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
                      to={'/edit-trial-date'}
                      state={row}
                  >
                       <i className="fas fa-pencil-alt"></i>
                  </Link>
              {/* </Permission> */}
              {/* <Permission type={["member.delete"]}> */}
                  <Link
                      className="me-2 text-danger"
                      onClick={() => handleDelete(row.trial_date_id)}
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
          <h4 className="card-title">Trial Date</h4>
          <Link to="/create-trial-date">
            <button type="button" className="btn btn-primary waves-effect waves-light">
            Create Trial Date +
            </button>
          </Link>
        </div>
        <div className="card-body table-responsive">
        <CustomDataTable
          dataRows={TrialDateLists}
          columns={columns}
        />
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default TrialDate