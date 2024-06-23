import React, { useEffect, useState } from 'react';
import { Controller, get, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Http } from '../../services/api';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import Select from 'react-select';


const FilterExamBook = () => {

  const [examDateLists, setExamDateLists] = useState(false);
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
    formState: {errors },
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

const onSubmitData = (data)=>{
  // console.log(data.exam_date.exam_date_id);
  navigate(`/exam-book`,{state:{exam_date_id: data.exam_date.exam_date_id}})
}

    return (
      <>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4 className="card-title">Filter Exam Book</h4>
              </div>
              <div className="card-body ">
                <form onSubmit={handleSubmit(onSubmitData)}>
                  <div className="row col-12">
                    <div className="col-12 mb-3">
                      <label htmlFor="example-name-input" className="form-label">
                        Exam Date
                      </label>
                      <Controller
                                  name="exam_date"
                                  control={control}
                                  render={({ field }) => (
                                      <Select
                                          {...field}
                                          options={examDateLists}
                                          getOptionValue={(val) => val.exam_date_id}
                                          getOptionLabel={(val) => val.exam_date+" - "+ (val.type=="written"? "written Exam": "Oral Exam")}
                                          // onChange={(selected)=> {
                                          //     setValue("exam_date", selected ? selected : null)
                                          // }}
                                          onChange={(selected)=> {
                                              setValue("exam_date", selected ? selected : null)
                                          }}
                                          className="basic-multi-select "
                                          classNamePrefix="select"
                                      />  
                                  )}
                              />
                    </div>
                  
                    <div className="col-12 text-end  ">
                    {/* <Link
                      className="text-success me-2"
                      to={'/exam-book'}
                      state={getValues("exam_date")}
                  > */}
                        <button type="submit" className="btn btn-primary waves-effect waves-light">
                          Search
                        </button>
                        {/* </Link> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default FilterExamBook
