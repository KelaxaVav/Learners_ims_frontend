import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { CreateSuccessful } from '../../utils/AlertDialog';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import { Http } from '../../services/api';
import Select from 'react-select';

const CreateExamDate = () => {

    const [examDateId, setExamDateId] = useState('');
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
        fetchExamDate();
    }
    }, [state]); 

    const fetchExamDate = async ()=>{
        if (state) {
            setIsEdit(true);
            setExamDateId(state.exam_date_id); 
           
           await Http.get(`exam-date/${state.exam_date_id}`)
            .then(async(res)=>{
                setValue("exam_date", res.data.data.exam_date);
                setValue("limit", res.data.data.limit);
                setValue("type", {value: res.data.data.type, label: res.data.data.type==='written'? 'Written Exam' : 'Oral Exam'  });
                setValue("description", res.data.data.description);
            }).catch(async(error)=> {
                await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Exam Date has not been updated.", icon: "error" });
            });
        }
    };

    const onSubmitData =async (data) =>{
        data.type= data.type.value
        if (isEdit) {
            const response = await Http.put(`exam-date/${examDateId}`, data)
            .then(async()=>{
                await AlertDialog({ title: "Updated!", message: "Exam Date has been updated.", icon: "success" });
                fetchExamDate();
            })
            .catch(async(error)=> {
                await AlertDialog({ title: "Updated!", message: error?.response?.data?.meta?.message ?? "Exam Date has not been updated.", icon: "error" });
            });
           
        }else{
            const response = await Http.post("/exam-date", data)
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
            <h4 className="card-title">{isEdit? "UPDATE":"CREATE" } EXAM DATE</h4>
            <div className="col-12 p-0 card rounded-0 ">
                <div className="card-body p-2">
                <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className="row ">
                        <div className="col-lg-6 ">
                            <div className="mb-3">
                                <label htmlFor="example-name-input" className="form-label">Exam Date</label>
                                <input className="form-control" type="date" placeholder='' {...register("exam_date", {required: true })} />
                            </div>

                            <div className="mb-3 m-1 ">
                                <label htmlFor="example-balance-input" className="form-label">Limit Person</label>
                                <input className="form-control" type="number" placeholder='' {...register("limit", {required: true })} />
                            </div>
                            <div className="mb-3 m-1 ">
                                <label htmlFor="example-balance-input" className="form-label">Exam Type </label>
                                <Controller
                                    name="type"
                                    control={control}
                                    render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={[
                                            { value: 'written', label: 'Written Exam' },
                                            { value: 'oral', label: 'Oral Exam' }
                                          ]}
                                        onChange={(selected)=> {
                                            setValue("type", selected ? selected : null)
                                        }}
                                        className="basic-multi-select form-control"
                                        classNamePrefix="select"
                                    />  
                                )}
                            />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-description-input" className="form-label">Description</label>
                                <textarea className="form-control" name="" id="" {...register("description", {required: true })}></textarea>
                            </div>
                           
                        </div>
                       
                        <div className="row mt-3 ">
                            <div className=" d-flex justify-content-end gap-2">
                                <button onClick={handleReset} type="button" className=" btn btn-secondary waves-effect waves-light w-sm">
                                    <i className=" d-block font-size-8"></i> Reset
                                </button>
                                <button  type="submit" className="btn btn-primary waves-effect waves-light w-sm" >
                                {isEdit? "Update":"Submit" }
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
export default CreateExamDate;