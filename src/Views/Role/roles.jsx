import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios';
import { CreateFailed, CreateSuccessful, UpdateFailed, UpdateSuccessful } from '../../utils/AlertDialog';
import ConfirmAlertDialog from '../../utils/AlertDialog/ConfirmAlertDialog';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import { Http } from '../../services/api';
import { useForm } from 'react-hook-form';
import CustomDataTable from '../CustomPages/CustomDataTable';

function roles(props) {

  const [rolesList, setRolesList] =useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [roleId, setRoleId] = useState('');


  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    resetField,
    getValues,
    formState: { errors },
  } = useForm();

  function handleCloseModal(){            
    document.querySelector('.btn-close').click()
}

  useEffect(()=> {
    fetchRoles();

  },[]);

  const fetchRoles = async () =>{
    try {
      const response =  await Http.get(`/role`)
      setRolesList(response.data.data) 
      
      } catch (error) {
        console.error(error);
      }
  };

  const onSubmitData = async (data) => {
    if (isEdit) {

      try {
    
        const response =  await Http.put(`/role/${roleId}`,data)
        if (response.data.status === true) {   
          await UpdateSuccessful();
          handleReset();
          handleCloseModal();
          fetchRoles();
        } else {
          await UpdateFailed();
        }  
      } catch (error) {
        console.error(error);
        await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Role has not been Updated.", icon: "error" });
      }

    } else {
      try {
        // Create Role
        const response =  await Http.post('/role',data)
        if (response.data.status === true) {  
          handleReset();
          fetchRoles();
          await CreateSuccessful();
          handleCloseModal();
        } else {
          await CreateFailed();
        }
      } catch (error) {
        console.error(error);
        await AlertDialog({ title: "Created!", message: error?.response?.data?.meta?.message ?? "Role has not been created.", icon: "error" });
      }
    }
  };

  const handleReset = () => {
    reset();
  };

  const handleEdit = (row) => {
    setValue('name', row.name);
    setValue('description', row.description);
    setRoleId(row.role_id);
    setIsEdit(true);
  };

  const handleDelete = async (role_id) => {
    const isConfirmed = await ConfirmAlertDialog({
      confirmButtonText: 'Yes, delete it!',
      message: 'Are you sure you want to delete?',
  });
   if (isConfirmed) {
    try {
     const response = await Http.delete(`/role/${role_id}`)
     console.log(response);
      if (response.data.status) {
        fetchRoles();
          await AlertDialog({ title: "Deleted!", message: "Role has been deleted.", icon: "success" });
      } else {
          await AlertDialog({ title: "Deleted!", message: "Role has not been deleted.", icon: "error" });
      }

      } catch (error) {
          console.error(error);
          await AlertDialog({ title: "Deleted!", message: error?.response?.data?.meta?.message ?? "Role has not been deleted.", icon: "error" });

      }}
  };
 
  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      omit: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
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
          {/* <Permission type={["role.edit"]} showErrorMessage={true} > */}
            <Link
              className="text-success me-2"
              data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              onClick={() => handleEdit(row)}
            >
              <i className="fas fa-pencil-alt"></i>
              {/* <FontAwesomeIcon icon={faPenToSquare} />{" "} */}
            </Link>

          {/* </Permission> */}
          {/* <Permission type={["role.delete"]} > */}
            <Link
              className="me-2 text-danger"
              onClick={() => handleDelete(row.role_id)}
            >
              <i className="fas fa-trash"style={{color:'red'}}></i>
              {/* <FontAwesomeIcon icon={faTrash} /> */}
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
            <h4 className="card-title">ROLES</h4>
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light "
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={() => setIsEdit(false)}
            >
              Add Role +
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">{isEdit ? 'Update' : 'Add'} Role</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleReset}></button>
                </div>
                <form onSubmit={handleSubmit(onSubmitData)}>
                  <div className="mb-1 m-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Role Name" {...register("name", { required: true })} />
                  </div>
                  <div className="mb-1 m-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" placeholder="Enter Role Name" {...register("description", { required: true })} />
                  </div>
                  <div className="modal-footer mt-3">
                    <button type="button" className="btn btn-light" onClick={handleReset}>Reset</button>
                    {isEdit ?
                      <>
                        {/* <Permission type={["role.edit"]}> */}
                          <button type="submit" className="btn btn-primary">Update</button>
                        {/* </Permission> */}
                      </>
                      :
                      <>
                        {/* <Permission type={["role.create"]}> */}
                          <button type="submit" className="btn btn-primary">Submit</button>
                        {/* </Permission> */}
                      </>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>

          <div className="card-body table-responsive">
          <CustomDataTable
            dataRows={rolesList}
            columns={columns}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

roles.propTypes = { }

export default roles
