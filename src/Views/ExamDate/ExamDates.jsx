import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomDataTable from '../CustomPages/CustomDataTable';
import ConfirmAlertDialog from '../../utils/AlertDialog/ConfirmAlertDialog';
import { Http } from '../../services/api';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';


const ExamDates = () => {

  const [examDateLists, setExamDateLists] = useState(false);

  useEffect(() => {
    fetchExamDate();
}, []);

const fetchExamDate = async () => {
  try {
      const response = await Http.get("exam-date");
      setExamDateLists(response.data.data);
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
      const response = await Http.delete(`/exam-date/${id}`)
      .then(async()=>{
        fetchExamDate();
          await AlertDialog({ title: "Deleted!", message: "Exam Date has been deleted.", icon: "success" });
      }).catch(async(error)=> {
        fetchExamDate()
        await AlertDialog({ title: "Deleted!", message: error?.response?.data?.meta?.message ?? "Exam Date has not been deleted.", icon: "error" });
      });
  }
};

const columns = [
  {
      name: 'Exam Date',
      selector: row => row.exam_date,
  },
  {
      name: 'Limit Person',
      selector: row => row.limit,
  },
  {
      name: 'Exam Type',
      selector: row => row.type,
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
                      to={'/edit-exam-date'}
                      state={row}
                  >
                       <i className="fas fa-pencil-alt"></i>
                  </Link>
              {/* </Permission> */}
              {/* <Permission type={["member.delete"]}> */}
                  <Link
                      className="me-2 text-danger"
                      onClick={() => handleDelete(row.exam_date_id)}
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
              <h4 className="card-title">Exam Dates</h4>
              <Link to="/create-exam-date">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                CreateExamDates +
                </button>
              </Link>
            </div>
            <div className="card-body table-responsive">
            <CustomDataTable
                dataRows={examDateLists}
                columns={columns}
              />
            </div>
          </div>
        </div>
      </div>
      )
}
export default ExamDates;