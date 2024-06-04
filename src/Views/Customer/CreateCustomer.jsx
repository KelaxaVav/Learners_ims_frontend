import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { Controller, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { CreateFailed, CreateSuccessful } from '../../utils/AlertDialog';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import { Http } from '../../services/api';

const options = [
    {value:"A1", label:"A1"},           
   {value: "A", label: "A"},           
    {value:"B1", label:"B1"},           
   {value: "B", label: "B"},           
    {value:"C1", label:"C1"},           
   {value: "C", label: "C"},           
    {value:"CE", label:"CE"},           
    {value:"D1", label:"D1"},           
   {value: "D", label: "D"},           
    {value:"DE", label:"DE"},           
    {value:"G1", label:"G1"},           
   {value: "G", label: "G"},           
  {value:  "J", label:  "J"},  
];

const CreateCustomer = () => {
    
    // const { state } = useLocation();


// const initialValuesArray = state?.vehicle_class?.split(",");

    const [extentChecked , setExtentChecked] = useState(false); 

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

    const [selectedVehicle_class, setSelectedVehicle_class] = useState([]);
    const [selectedVehicle_class_old, setSelectedVehicle_class_old] = useState([]);

   

    const handleChangeExtent =  (e) => {
        const  checked =  e.target.checked;
        setExtentChecked(checked);
        console.log(extentChecked);
      };

    const onSubmitData =async (data) =>{
         data.vehicle_class = data.vehicle_class.map((x)=> ({value: x.value, label: x.label}))
        // console.log(vehicle);
        console.log(data.vehicle_class);
        
        const response = await Http.post("/customer", data)
        .then( async (res)=>{

            await CreateSuccessful();

        }).catch( async (error)=>{
            console.log(error);
            await AlertDialog({ title: "Failed!", message: error?.response?.data?.meta?.message ??"Customer has not been created.", icon: "error" });
        });

    }

    return (
        <>
            <h4 className="card-title">CREATE Customer</h4>
            <div   className="col-12 p-0 card rounded-0">
                <div className="card-body p-2">
                    <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="name-input" className="form-label">Name</label>
                            <input className="form-control" type="text" id="name-input" placeholder=''  {...register("full_name", {required: true })} />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="nic-input" className="form-label">NIC No</label>
                            <input className="form-control" type="text" id="nic-input" placeholder=''  {...register("nic", {required: true })} />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="address-input" className="form-label">Address</label>
                            <textarea id="address-input" className="form-control" rows="1" placeholder="Enter your Address"  {...register("address", {required: true })}></textarea>
                        </div>
                        <div className="col-sm-6 mb-2 ">
                            <label htmlFor="dob-input" className="form-label mb-0 p-0">Date of Birth</label>
                            <input className="form-control" type="date" id="nic-input" placeholder=''  {...register("dob", {required: true })} />

                            {/* <DatePicker className="form-control" selected={startDate}  {...register("dob", {required: true })} /> */}
                        </div>

                        <div className="col-sm-6 mb-3">
                            <label htmlFor="personal-phone-input" className="form-label">Personal Phone No</label>
                            <input className="form-control" type="text" id="personal-phone-input" placeholder=''  {...register("personal_pno", {required: true })} />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="phone-input" className="form-label">Phone No</label>
                            <input className="form-control" type="text" id="phone-input" placeholder=''  {...register("secondary_pno", {required: true })}/>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <h5 className="font-size-14 mb-1">Vehicle Class</h5>
                            <Controller
                                name="vehicle_class"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isMulti
                                        value={selectedVehicle_class}
                                        onChange={(selected)=> {
                                            setSelectedVehicle_class(selected);
                                            setValue("vehicle_class", selected ? selected : null)
                                        }}
                                        options={options}
                                        className="basic-multi-select form-control"
                                        classNamePrefix="select"
                                    />  
                                )}
                            />
                        </div>
                        <div className="col-sm-6 mb-3 w-25">
                            <label htmlFor="example-Account no-input" className="form-label">ImageUpload</label>
                            {/* <input className="form-control" type="file" placeholder='' {...register("image", {required: true })} /> */}

                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne"></h2>
                            <div className=" mb-2">
                                <h6   className="fw-bold fs-6 ">Medical Detail</h6>
                                <div className="row">
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">Certificate No</h5>
                                                <input className="form-control" type="text" placeholder=''{...register("medical_no", {required: true })} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h5 className="font-size-14 mb-0">Date</h5>
                                        <input className="form-control" type="date" id="nic-input" placeholder=''  {...register("medical_date", {required: true })} />

                                        {/* <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} id="dob-input" {...register("medical_date", {required: true })} /> */}
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">Note</h5>
                                                <textarea className="form-control" name="" id="" rows="1" {...register("medical_note", {required: true })}></textarea>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h6 className="fw-bold fs-5">Extent Detail</h6>

                                <div className="square-switch">
                                    <input  {...register("extent , ")} onChange={handleChangeExtent}    type="checkbox" id="square-switch2" switch="info" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne" />
                                    <label htmlFor="square-switch2" data-on-label="Yes" data-off-label="No"></label>

                                </div>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <h6 className="fw-bold fs-6">License Detail</h6>
                                <div className="row">
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">License No</h5>
                                                <input className="form-control" type="text" placeholder='' {...register("license_no", {required:true})}/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">Vehicle Class</h5>
                                                <Controller
                                                    name="vehicle_class_old"
                                                    control={control}
                                                    render={({ field }) => (
                                                    <Select
                                                        {...field}
                                                        isMulti
                                                        value={selectedVehicle_class_old}
                                                        onChange={(selected)=> {
                                                            setSelectedVehicle_class_old(selected);
                                                            setValue("vehicle_class_old", selected ? selected : null)
                                                        }}
                                                        options={options}
                                                        className="basic-multi-select form-control"
                                                        classNamePrefix="select"
                                                    />  
                                             )}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">Note</h5>
                                                <textarea className="form-control" name="note" {...register("extent_note")} id="" rows="1"></textarea>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="d-flex justify-content-end gap-2">
                                <button type="button" className="btn btn-secondary waves-effect waves-light w-sm">
                                    <i className="d-block font-size-8"></i> Reset
                                </button>
                                <button type="submit" className="btn btn-primary waves-effect waves-light w-sm">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateCustomer;
