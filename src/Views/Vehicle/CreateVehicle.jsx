import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { CreateFailed, CreateSuccessful } from '../../utils/AlertDialog';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import { Http } from '../../services/api';

const CreateVehicle = () => {

    const [vehicleClassId, setVehicleClassId] = useState('');
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

    useEffect(() => {
       if (state) {
        fetchVehicleClass();
    }
    }, [state]); 

    const fetchVehicleClass = async ()=>{
        if (state) {
            setIsEdit(true);
            setVehicleClassId(state.vehicleClass_id); 
           
            const response =  await Http.get(`vehicle_class/${state.vehicleClass_id}`)
            .then(async(res)=>{
                setValue("name", res.data.data.name);
                setValue("amount", res.data.data.amount);
                setValue("biv_amount", res.data.data.biv_amount);
                setValue("description", res.data.data.description);
            }). catch(async(error)=> {
                await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Vehicle Class has not been updated.", icon: "error" });
            });
            
         
            
        }
       };

    const onSubmitData =async (data) =>{
        if (isEdit) {
            const response = await Http.put(`vehicle_class/${vehicleClassId}`, data)
            .then(async()=>{
                await AlertDialog({ title: "Updated!", message: "Vehicle Class has been updated.", icon: "success" });
                fetchVehicleClass();
            })
            .catch(async(error)=> {
                await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Vehicle Class has not been updated.", icon: "error" });
            });
           
        }else{
            const response = await Http.post("/vehicle_class", data)
            .then( async (res)=>{
                await CreateSuccessful();
            }).catch( async (error)=>{
                await AlertDialog({ title: "Failed!", message: error?.response?.data?.meta?.message ??"Vehicle Class has not been created.", icon: "error" });
            });
        }

    }

    const handleReset = () => {
        reset();
        fetchVehicleClass();

    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">{isEdit? "UPDATE":"CREATE" } CUSTOMER</h4>
                        </div>
                        <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmitData)}>
                            <div className="row ">
                                <div className="col-lg-6 ">

                                    <div className="mb-3">
                                        <label htmlFor="example-name-input" className="form-label" >Name</label>
                                        <input className="form-control" type="text" placeholder='Enter the Vehicle Class Name' {...register("name", {required: true })}/>
                                    </div> 
                                    <div className="mb-3">
                                        <label htmlFor="example-description-input" className="form-label" >Amount</label>
                                        <input className="form-control" type="text" placeholder='Enter the Amount' {...register("amount", {required: true })}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="example-balance-input" className="form-label" >PIV Amount</label>
                                        <input className="form-control" type="text" placeholder='Enter the BIV Amount' {...register("biv_amount", {required: true })} />
                                    </div>
                                    <div className="mb-3 m-1 ">
                                        <label htmlFor="example-balance-input" className="form-label" >Description</label>
                                        <input className="form-control" type="text" placeholder='Enter the Description ' {...register("description")}/>
                                    </div>
                                </div>

                                <div className="row mt-3 ">
                                    <div className=" d-flex justify-content-end gap-2">
                                        <button onClick={handleReset} type="button" className=" btn btn-secondary waves-effect waves-light w-sm">
                                            <i className=" d-block font-size-8"></i> Reset
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary waves-effect waves-light w-sm" >
                                          {isEdit? "Update":"Submit" }
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default CreateVehicle;

