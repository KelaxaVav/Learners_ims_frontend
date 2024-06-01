import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import { Http } from '../../services/api';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function permissions(props) {

  const [permissions, setPermissions] = useState([]);
  const [rolePermission, setRolePermission] = useState();
  const [rolesList, setRolesList] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedIDs, setSelectedIDs] = useState([]);

  const {
	register,
	reset,
	handleSubmit,
	formState: {errors },
} = useForm();

  useEffect(() => {
    fetchPermissions();
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      // const response = await fetch(`${API_BASE_URL}/role`);
      const response = await Http.get("role");
      setRolesList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPermissions = async () => {
    try {
      // const response = await fetch(`${API_BASE_URL}/permission`);
      // const result = await response.json();
      const response = await Http.get("permission");
      setPermissions(response.data.data);
      // const entriesArray = Object.entries(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (rolePermission) {
      const selectedPermissionIDs = [];

      Object.keys(rolePermission).forEach((key) => {
        const permission = rolePermission[key];
        // console.log("sssssss", permission);
        Object.keys(permission).forEach((action) => {
          const value = permission[action].value;
        // console.log("mmmmmm", value);
          const permissionID = permission[action].permission_id;
        // console.log("eeeeee", permissionID);


          if (value === 1) {
            selectedPermissionIDs.push(permissionID);
          }
        });
      });
      setSelectedIDs(selectedPermissionIDs);
    }
  }, [rolePermission]);


  const handleCheckboxChange = (id) => {
    const isSelected = selectedIDs.includes(id);
    if (isSelected) {
      const updatedIDs = selectedIDs.filter((selectedID) => selectedID !== id);
      setSelectedIDs(updatedIDs);
    } else {
      setSelectedIDs([...selectedIDs, id]);
    }
  };


  const handleCustomerChange = async (value) => {
    setSelectedRole(value);
    try {
      // const response = await fetch(`${API_BASE_URL}/role/${value.role_id}`);
      const response = await Http.get(`role/${value.role_id}`);
      setRolePermission(response.data.data.permissions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = {
      permissions: selectedIDs
    };
    try {
      // const response = await axios.put(
      //     `${API_BASE_URL}/role/${selectedRole.role_id}/permission`, formData

      // );
      const response = await Http.put(`role/${selectedRole.role_id}/permission`, formData);
      if (response.data.status === true) {
        await AlertDialog({ title: "Updated!", message: "Permission has been updated.", icon: "success" });
      } else {
        await AlertDialog({ title: "Updated!", message: "Permission has not been updated.", icon: "error" });
      }

    } catch (error) {
      console.error(error);
      await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Permission has not been updated.", icon: "error" });

    }
  };

  const onSubmitPermission = (data) => {
console.log(data);

  }

  const handleReset = ()=>{
	reset();
  }

  const handleCloseModal = ()=> {            
	document.querySelector('.btn-close').click()
};

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
				<h4 className="card-title">ROLES</h4>
				<div className="row">
					<div className="col-sm-auto align-self-center">
						<label className="form-check-label " htmlFor="role">
							Role :
						</label>
					</div>
					<div className="col-sm-auto ">
						<Select
							onChange={handleCustomerChange}
							options={rolesList}
							value={selectedRole}
							getOptionValue={(rolesList) =>
								rolesList.role_id
							}
							getOptionLabel={(rolesList) =>
								rolesList.name
							}
						/>
					</div>
					<div className="col-sm-auto ">
						<button
							type="button"
							className="btn btn-primary waves-effect waves-light "
							data-bs-toggle="modal"
							data-bs-target="#staticBackdrop"
						>
							Add Permission +
						</button>
						<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog">
							<div className="modal-dialog modal-dialog-centered" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="staticBackdropLabel">Add Permission</h5>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
									</div>

									<form onSubmit={handleSubmit(onSubmitPermission)}  >
									<div className="row m-2 ">
										<div className="col-sm-4 ">
											<label htmlFor="example-description-input" className="form-label">Permission Name</label>
											<input className="form-control" type="text" placeholder='Enter Permission' {...register("name",{require : true})}  />
										</div>
										
										<div className="col-2 ">
											<label htmlFor="example-description-input d-block " className="form-label">Add</label>
											<input  className="form-check-input d-block mt-3"  type="checkbox"  {...register("create",{require : true})}/>
										</div>
									
										<div className="col-2 ">
											<label htmlFor="example-balance-input" className="form-label">Update</label>
											<input  className="form-check-input mt-3"  type="checkbox"   {...register("update",{require : true})}/>
										</div>     
										<div className="col-2  ">
											<label htmlFor="example-balance-input d-block" className="form-label">Delete</label>
											<input  className="form-check-input d-block mt-3"  type="checkbox"  {...register("delete",{require : true})}/>
										</div>     
										<div className="col-2 ">
											<label htmlFor="example-balance-input d-block" className="form-label">View</label>
											<input  className="form-check-input d-block mt-3"  type="checkbox"   {...register("view",{require : true})}/>
										</div>   
										</div>  
										<div className="modal-footer mt-3">
											<Link
												onClick={handleReset} >
												<button type="button" className=" btn btn-secondary waves-effect waves-light w-sm">
													<i className=" d-block font-size-8"></i>Reset
												</button>
											</Link>
											{/* <Permission type={["role.edit"]}> */}
											<button type="submit" className="btn btn-primary">Update</button>
											{/* </Permission> */}
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
            <div className="card-body">
              <table id="datatable" className="table table-bordered dt-responsive  nowrap w-100">
                <thead>
                  <tr className="text-center">
                    <td>Modules</td>
                    <td>Add</td>
                    <td>Update</td>
                    <td>Delete</td>
                    <td>View</td>
                  </tr>
                </thead>
                <tbody>
                    {Object.entries(rolePermission ?? permissions).map(([key, value], index) => (
                      <tr key={index} >
                        <th>{key}</th>
                        <td> {value?.create?.value == 0 || value?.create?.value == 1 ? <div className='form-check '>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={selectedIDs.includes(value?.create?.permission_id) ? true : false}
                            onChange={() => handleCheckboxChange(value?.create?.permission_id)} />
                        </div> : null}
                        </td>
                        <td> {value?.edit?.value == 0 || value?.edit?.value == 1 ? <div className='form-check '>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={selectedIDs.includes(value?.edit?.permission_id) ? true : false}
                            onChange={() => handleCheckboxChange(value?.edit?.permission_id)}
                          />
                        </div> : null}
                        </td>
                        <td>
                          {value?.delete?.value == 0 || value?.delete?.value == 1 ? <div className='form-check '>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={selectedIDs.includes(value?.delete?.permission_id) ? true : false}
                              onChange={() => handleCheckboxChange(value?.delete?.permission_id)}
                            />
                          </div> : null}
                        </td>
                        <td>
                          {value?.view?.value == 0 || value?.view?.value == 1 ? <div className='form-check '>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={selectedIDs.includes(value?.view?.permission_id) ? true : false}
                              onChange={() => handleCheckboxChange(value?.view?.permission_id)}
                            />
                          </div> : null}
                        </td>

                      </tr>
                    ))}
                    
                  </tbody>
              </table>
            </div>
           
            
            <button type="button" className="btn btn-primary" onClick={handleCreate} >
              Update
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

permissions.propTypes = {};

export default permissions;
