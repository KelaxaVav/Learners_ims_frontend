import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Http } from '../../services/api';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Link, useLocation } from 'react-router-dom';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import { CreateFailed, CreateSuccessful, UpdateFailed, UpdateSuccessful } from '../../utils/AlertDialog';

function CreateUser(props) {

    const [roleDropdownData, setRoleDropdownData] = useState([]);
    const [userId, setUserId] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const { state } = useLocation();


    const {
        register,
        handleSubmit,
        watch,
        control,
        reset,
        setValue,
        resetField,
        getValues,
        formState: {errors },
    } = useForm();

    const {
        register:register2,
        handleSubmit: handleSubmit2,
        reset : reset2,
        setValue :setValue2 ,
        formState: { errors:errors2  },
    } = useForm();

    useEffect(() => {
        roleList();
        if (state) {
            setIsEdit(true);
            setValue("first_name", state.first_name);
            setValue("last_name", state.last_name);
            setValue("mobile", state.mobile);
            setValue("email", state.email);
            setValue("role_id", state.role_id); 
            setUserId(state.user_id); 
        }
      
    }, [state]);

    const roleList = async () => {
        try {
            const result = await Http.get("role");
            setRoleDropdownData(result.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmitData = async (data) => {
        data.role_id = data.role_id.role_id;
        if (isEdit) {
            try {
                const response = await Http.put(`user/${userId}`, data);
                if (response.data.status) {
                    await AlertDialog({ title: "Updated!", message: "User has been updated.", icon: "success" });
                } else {
                    await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "User has not been updated.", icon: "error" });
                }
            } catch (error) {
                console.error(error);
                await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "User has not been Updated.", icon: "error" });

            }
        } else {

        try {
            const response = await Http.post("user/register", data);
            if (response.data.status === true) {
                handleReset();
                await CreateSuccessful();
            } else {
                await CreateFailed();
            }

        } catch (error) {
            await AlertDialog({ title: "Failed!", message: error?.response?.data?.meta?.message ??"User has not been created.", icon: "error" });
        }
    }
    };

    const handleReset = () => {
        reset();
    };

    const handlePasswordReset = () => {
        reset2();
    };

    const handleCloseModal = ()=> {            
        document.querySelector('.btn-close').click()
    };

    const onSubmitPassword = async (data) =>{
        try {
            const response =  await Http.put(`/user/password/${userId}`,data)
            if (response.data.status === true) {   
              await UpdateSuccessful();
              handlePasswordReset();
              handleCloseModal();
            } else {
              await UpdateFailed();
            }  
          } catch (error) {
            console.error(error);
            await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Password has not been Updated.", icon: "error" });
          }

 }

    return (
        <>
            <h4 className="card-title">{isEdit? "UPDATE": "CREATE"} USER</h4>
            <div className="col-12 p-0 card bg-white rounded-0 ">
                <div className="card-body p-2">
                    <form onSubmit={handleSubmit(onSubmitData)}  >
                        <div className="row ">
                            <div className=" col-sm-6 mb-3">
                                <label htmlFor="example-name-input" className="form-label">First Name</label>
                                <input className="form-control" type="text" placeholder='Enter Your First Name'  {...register("first_name", { required: true })}   />
                            </div>
                            <div className=" col-sm-6 mb-3">
                                <label htmlFor="example-name-input" className="form-label">last Name</label>
                                <input className="form-control" type="text" placeholder='Enter Your last Name' {...register("last_name", { required: true })}   />
                            </div>
                            <div className="col-sm-6 mb-3 ">
                                <label htmlFor="example-balance-input" className="form-label">Mobile Number</label>
                                <input className="form-control" type="number" placeholder='Enter Mobile NUmber' {...register("mobile", { required: true })} />
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3 ">
                                <label htmlFor="example-balance-input" className="form-label">Email Address</label>
                                <input className="form-control" type="email" placeholder='Enter Your Email' {...register("email", { required: true })} />
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="example-Account no-input" className="form-label"  >Role</label>
                                <Controller
                                    name="role_id"
                                    control={control}
                                    {...register("role_id", { required: true })}
                                    defaultValue={state ? { value: state.role_id, label: state.role_name } : null} // Set the default value based on the state
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={roleDropdownData}
                                            getOptionValue={(role) => role.role_id}
                                            getOptionLabel={(role) => role.name}
                                            value={roleDropdownData.find(role => role.role_id === watch("role_id"))} // Set the value based on the watched value
                                            onChange={(selectedOption) => setValue("role_id", selectedOption ? selectedOption.role_id : null)} // Update form value when selection changes
                                            
                                        />
                                    )}
                                />
                            </div>
                            {!isEdit?
                            <>
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="example-description-input" className="form-label">Password</label>
                                <input className="form-control" type="password" placeholder='Enter Your Password'  {...register("password", { required: true })} />
                            </div>
                            
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="example-balance-input" className="form-label">Confirm Password</label>
                                <input className="form-control" type="password" placeholder="Enter Your Confirm Password" {...register("password_confirm", { required: true })} />
                            </div>
                            </>
                            :
                            <></>
                            }

                            <div className="row mt-3 ">
                                <div className=" d-flex justify-content-end gap-2">
                                {isEdit?
                                 <>
                                    <Link
                                    to={"/user"} >
                                    <button type="button" className=" btn btn-secondary waves-effect waves-light w-sm">
                                        <i className=" d-block font-size-8"></i> cancel
                                    </button>
                                    </Link>
                                    
                                    <button
                                        type="button"
                                        className="btn btn-primary waves-effect waves-light "
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        Change Password
                                    </button>
                                    </>
                                :
                                <> 
                                    <Link
                                        onClick={handleReset} >
                                        <button type="button" className=" btn btn-secondary waves-effect waves-light w-sm">
                                            <i className=" d-block font-size-8"></i> Reset
                                        </button>
                                    </Link>
                                </>   
                                }
                                    <button
                                        type="submit"
                                        className="btn btn-primary waves-effect waves-light w-sm" >
                                        {isEdit?"Update":"Submit" }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Update Password</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handlePasswordReset}></button>
                                </div>

                                <form  onSubmit={handleSubmit2(onSubmitPassword)}>
                                    <div className="mb-1 m-3">
                                        <label htmlFor="example-description-input" className="form-label">Current Password</label>
                                        <input className="form-control" type="password" placeholder='Enter Your Password'  {...register2("currentPassword", { required: true })}  />
                                    </div>
                                    <div className="mb-1 m-3">
                                        <label htmlFor="example-description-input" className="form-label">New Password</label>
                                        <input className="form-control" type="password" placeholder='Enter Your Password'  {...register2("password", { required: true })} />
                                    </div>
                                
                                    <div className="mb-1 m-3">
                                        <label htmlFor="example-balance-input" className="form-label">Confirm Password</label>
                                        <input className="form-control" type="password" placeholder="Enter Your Confirm Password" {...register2("password_confirm", { required: true })}/>
                                    </div>     
                                    <div className="modal-footer mt-3">
                                        <button type="button" className="btn btn-light" onClick={handlePasswordReset}>Reset</button>
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
        </>
    )
}

CreateUser.propTypes = {}

export default CreateUser
