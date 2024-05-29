import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios';
import { CreateFailed, CreateSuccessful, ServerError, UpdateFailed, UpdateSuccessful } from '../../utils/AlertDialog';
import ConfirmAlertDialog from '../../utils/AlertDialog/ConfirmAlertDialog';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import { Http, getRoles } from '../../services/api';

function roles(props) {

  const [users, setUsers] =useState([]);
  const [data, setData] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(()=> {
    fetchRole();
  },[])

  const fetchRole = () =>{
    getRoles().then((data)=> setUsers(data.data) )
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData((prevData)=> ({...prevData, [name]:value}) )
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);

    if (editId) {
      await Http.put(`/role/${editId}`,data)
    .then((res)=> {
    console.log(res.data);
    // model close
    document.getElementById("staticBackdrop").classList.remove("show");
    document.querySelectorAll(".modal-backdrop") .forEach(el => el.classList.remove("modal-backdrop"));
    UpdateSuccessful()
    fetchRole()
    setData({});

    }).catch(()=> {
      UpdateFailed()
    })

    return;
    }


    // Create Role
   await axios.post('http://localhost:5100/api/v1/role',data,{headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGJhNzgwNzQtNjA0Mi00ZGFkLTljOTAtOGE1ZjQ0MDkxMDhlIiwicm9sZV9pZCI6IjU4YjUxZGFhLTUyZTgtNDMzNy05NWJlLWJmYjVhMjY5YmM0NyIsImlhdCI6MTcxNjk1OTI3NH0.4a2tkzwT9YHVRwvlQJG6tDI-f6qXEUOCTTQffsnj0dY`}})
    .then((res)=> {
    console.log(res.data);
    // model close
    document.getElementById("staticBackdrop").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop") .forEach(el => el.classList.remove("modal-backdrop"));
    CreateSuccessful()
    fetchRole()
    setData({});

    }).catch((err)=> {
      CreateFailed()
    })
  }

  const handleEdit = async (role_id) => {
    setEditId(role_id);
    // GetRole By id
   await axios.get(`http://localhost:5100/api/v1/role/${role_id}`,{headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGJhNzgwNzQtNjA0Mi00ZGFkLTljOTAtOGE1ZjQ0MDkxMDhlIiwicm9sZV9pZCI6IjU4YjUxZGFhLTUyZTgtNDMzNy05NWJlLWJmYjVhMjY5YmM0NyIsImlhdCI6MTcxNjk1OTI3NH0.4a2tkzwT9YHVRwvlQJG6tDI-f6qXEUOCTTQffsnj0dY`}})
    .then((res)=> {
    console.log(res.data);
    setData(res.data.data)
    // model close
    }).catch((err)=> {
      ServerError()
    })

  }

  const handleDelete = async (role_id) => {
    const isConfirmed = await ConfirmAlertDialog({
      confirmButtonText: 'Yes, delete it!',
      message: 'Are you sure you want to delete?',
  });
   if (isConfirmed) {
    try {
      // const response = await axios.delete(`${API_BASE_URL}/customer/${id}`);
     const response = await axios.delete(`http://localhost:5100/api/v1/role/${role_id}`,{headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGJhNzgwNzQtNjA0Mi00ZGFkLTljOTAtOGE1ZjQ0MDkxMDhlIiwicm9sZV9pZCI6IjU4YjUxZGFhLTUyZTgtNDMzNy05NWJlLWJmYjVhMjY5YmM0NyIsImlhdCI6MTcxNjk1OTI3NH0.4a2tkzwT9YHVRwvlQJG6tDI-f6qXEUOCTTQffsnj0dY`}})

      if (response.data.status) {
        fetchRole();
          await AlertDialog({ title: "Deleted!", message: "Role has been deleted.", icon: "success" });
      } else {
          await AlertDialog({ title: "Deleted!", message: "Role has not been deleted.", icon: "error" });
      }

  } catch (error) {
      console.error(error);
      await AlertDialog({ title: "Deleted!", message: error?.response?.data?.meta?.message ?? "Member has not been deleted.", icon: "error" });

  }}
  }


  return (
    <div className="row">
      <div className="col-12">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
          <form onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Role
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
             
              <div className="mb-1 m-3">
                <label htmlFor="name" className="form-label">
                  {" "}
                  Name{" "}
                </label>
                <input type="text" className="form-control" onChange={handleChange} name="name" id="name" value={data.name} placeholder="Enter Your Name" />
              </div>

              {/* <div className="mb-1 m-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input type="text" className="form-control" id="description" placeholder="Enter Your Name" />
              </div> */}
              <div className="modal-footer">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">
                  Reset
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
              </form>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="card-title">ROLES</h4>
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light "
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Add Role +
            </button>
          </div>
          <div className="card-body table-responsive">
            <table id="dataTable" className="table table-bordered table-responsive  nowrap w-100 mt-4 ">
              <thead>
                <tr>
                  <th>Role ID</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {users.map(role => 
                <tr  key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.name}</td>
                  <td className="d-flex justify-content-around">
                    <button className="btn btn-outline-secondary btn-sm edit" title="Edit" onClick={()=>handleEdit(role.role_id)} data-bs-toggle="modal" 
              data-bs-target="#staticBackdrop">
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <a className="btn btn-outline-secondary btn-sm edit" title="Trash" onClick={()=>handleDelete(role.role_id)}>
                      <i className="fas fa-trash"style={{color:'red'}}></i>
                    </a>
                  </td>
                </tr>
                )}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

      roles.propTypes = { }

      export default roles
