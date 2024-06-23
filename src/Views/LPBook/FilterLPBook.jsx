import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Http } from '../../services/api';
import Select from 'react-select';


const FilterLPBook = () => {
    const [examDateLists, setExamDateLists] = useState();
    const [trialDateLists, setTrialDateLists] = useState();
    const navigate = useNavigate()

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

    const onSubmitData = (data) => {
        // console.log(data.exam_date.exam_date_id);
        navigate(`/lp-book`, { state: { exam_date_id: data.exam_date.exam_date_id, trial_date_id: data.trial_date.trial_date_id } })
    }

    const handleChange = async(selected)=>{
        setValue("exam_date", selected ? selected : null)
        // console.log(selected);
        const get_trial_date = await Http.get(`/trial-date-exam/${selected.exam_date_id}`)
        setTrialDateLists(get_trial_date.data.data)
        console.log(get_trial_date);
    }

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <h4 className="card-title">Filter LP Book</h4>
                        </div>
                        <div className="card-body ">
                            <form onSubmit={handleSubmit(onSubmitData)}>
                                <div className="row col-12">
                                    <div className="col-6 mb-3">
                                        <label htmlFor="example-name-input" className="form-label">Exam Book Date</label>
                                        <Controller
                                            name="exam_date"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={examDateLists}
                                                    getOptionValue={(val) => val.exam_date_id}
                                                    getOptionLabel={(val) => val.exam_date + " - " + (val.type == "written" ? "written Exam" : "Oral Exam")}
                                                    onChange={handleChange }
                                                    // onChange={(selected) => {
                                                    //     setValue("exam_date", selected ? selected : null)
                                                    // }}
                                                    className="basic-multi-select "
                                                    classNamePrefix="select"
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label htmlFor="example-name-input" className="form-label">Trial Date</label>
                                        <Controller
                                            name="trial_date"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={trialDateLists}
                                                    getOptionValue={(val) => val.trial_date_id}
                                                    getOptionLabel={(val) => (val.trial_date)}
                                                    // onChange={handleChange }
                                                    onChange={(selected) => {
                                                        setValue("trial_date", selected ? selected : null)
                                                    }}
                                                    className="basic-multi-select "
                                                    classNamePrefix="select"
                                                />
                                            )}
                                        />
                                    </div>
                                    {/* <div className="col-6 mb-2">
                                    <label htmlFor="example-name-input" className="form-label">Trial Type</label>
                                    <select className="form-select">
                                        <option>Select</option>
                                        <option>Normal Trial</option>
                                        <option>Re Trial</option>
                                    </select>
                                </div> */}
                                    <div className="col-12 text-end ">
                                        <button type="submit" className="btn btn-primary waves-effect waves-light">
                                            Search
                                        </button>
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

export default FilterLPBook
