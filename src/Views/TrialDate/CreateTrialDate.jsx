import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { CreateSuccessful } from '../../utils/AlertDialog';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import { Http } from '../../services/api';
import Select from 'react-select';

const CreateTrialDate = () => {

    const [TrialDateId, setTrialDateId] = useState('');
    const [ExamDateLists, setExamDateLists] = useState('');
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
        fetchExamDate();
        fetchTrialDate()
    }, []); 

    const fetchExamDate = async ()=>{
           await Http.get("exam-date")
            .then(async(res)=>{
                // console.log(res);
                setExamDateLists(res.data.data);
            }).catch(async(error)=> {
                console.error(error);
            });
    };

    const fetchTrialDate = async ()=>{
        if (state) {
            setIsEdit(true);
            setTrialDateId(state.trial_date_id); 
           
           await Http.get(`trial-date/${state.trial_date_id}`)
            .then(async(res)=>{
                setValue("exam_date", res.data.data.exam_dates.map((val)=>({exam_date_id:val.exam_date_id, exam_date:val.exam_date, type:val.type})));
                setValue("limit", res.data.data.limit);
                setValue("trial_date", res.data.data.trial_date);
                setValue("description", res.data.data.description);
            }).catch(async(error)=> {
                await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Exam Date has not been updated.", icon: "error" });
            });
        }
    };

    const onSubmitData =async (data) =>{
        data.exam_date= data.exam_date.map((val)=>(val.exam_date_id))
        if (isEdit) {
            console.log(data);
            await Http.put(`trial-date/${TrialDateId}`, data)
            .then(async()=>{
                await AlertDialog({ title: "Updated!", message: "Trial Date has been updated.", icon: "success" });
                fetchTrialDate();
            })
            .catch(async(error)=> {
                await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Trial Date has not been updated.", icon: "error" });
                fetchTrialDate();
            });
           
        }else{
            // console.log(data);
            await Http.post("/trial-date", data)
            .then( async (res)=>{
                await CreateSuccessful();
            }).catch( async (error)=>{
                await AlertDialog({ title: "Failed!", message: error?.response?.data?.meta?.message ??"Exam Date has not been created.", icon: "error" });
            });
        }
    }

    const handleReset = () => {
        reset();
        fetchExamDate();
    };



  return (
    <>
        <h4 className="card-title">{isEdit?"UPDATE":"CREATE"} TRIAL DATE</h4>
        <div className="col-12 p-0 card  rounded-0 ">
            <div className="card-body p-2">
            <form onSubmit={handleSubmit(onSubmitData)}>
                <div className="row ">
                    <div className="col-lg-6 ">
                        <div className="mb-3">
                            <label htmlFor="example-name-input" className="form-label">Exam Date</label>
                            <Controller
                                name="exam_date"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isMulti
                                        options={ExamDateLists}
                                        getOptionValue={(val) => val.exam_date_id}
                                        getOptionLabel={(val) => val.exam_date+" - "+ (val.type=="written"? "written Exam": "Oral Exam")}
                                        onChange={(selected)=> {
                                            setValue("exam_date", selected ? selected : null)
                                        }}
                                        className="basic-multi-select "
                                        classNamePrefix="select"
                                    />  
                                )}
                            />
                        </div>

                        <div className="mb-3 m-1 ">
                            <label htmlFor="example-balance-input" className="form-label">Trial Date</label>
                            <input className="form-control" type="date" placeholder='' {...register("trial_date", {required: true })}/>
                        </div>
                      
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <label htmlFor="example-balance-input" className="form-label">Limit Person</label>
                            <input className="form-control" type="text" placeholder='' {...register("limit", {required: true })}/>
                        </div>
                     
                        <div className="mb-3">
                            <label htmlFor="example-balance-input" className="form-label">Description</label>
                            <input className="form-control" type="text" placeholder='' {...register("description", {required: true })}/>
                        </div>

                    </div>
                    <div className="row mt-3 ">
                        <div className=" d-flex justify-content-end gap-2">
                            <button type="button" className=" btn btn-secondary waves-effect waves-light w-sm">
                                <i className=" d-block font-size-8"></i> Reset
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary waves-effect waves-light w-sm" >
                                {isEdit? 'Update':"Submit"}
                            </button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </>
)
}

export default CreateTrialDate