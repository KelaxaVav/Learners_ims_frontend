import React from 'react'

const CreateTrialDate = () => {
  // return (
  //   <>
  //           <h4 className="card-title">Create Trial Date</h4>
  //           <div className="col-12 p-0 card bg-white rounded-0 ">
  //               <div className="card-body p-2">
  //                   <div className="row ">
  //                       <div className="col-lg-6 ">
  //                           <div className="mb-3">
  //                               <label htmlFor="example-name-input" className="form-label">Trial Date</label>
  //                               <input className="form-control" type="text" placeholder='' />
  //                           </div>
  //                           <div className="mb-3">
  //                               <label htmlFor="example-name-input" className="form-label">Exam Date</label>
  //                               <input className="form-control" type="text" placeholder='' />
  //                           </div>

  //                           <div className="mb-3 m-1 ">
  //                               <label htmlFor="example-balance-input" className="form-label">Limit Person</label>
  //                               <input className="form-control" type="number" placeholder='' />
  //                           </div>
  //                           <div className="mb-3">
  //                               <label htmlFor="example-description-input" className="form-label">Description</label>
  //                               <input className="form-control" type="text" placeholder='' />
  //                           </div>
                           
  //                       </div>
                       
  //                       <div className="row mt-3 ">
  //                           <div className=" d-flex justify-content-end gap-2">
                              
  //                               <button type="button" className=" btn btn-secondary waves-effect waves-light w-sm">
  //                                   <i className=" d-block font-size-8"></i> Reset
  //                               </button>
  //                               <button
  //                                   type="button"
  //                                   className="btn btn-primary waves-effect waves-light w-sm" >
  //                                   Submit
  //                               </button>
  //                           </div>
  //                       </div>
  //                   </div>
  //               </div>
  //           </div>
  //       </>
  // )

  return (
    <>
        <h4 className="card-title">Create Trial Date</h4>
        <div className="col-12 p-0 card  rounded-0 ">
            <div className="card-body p-2">
                <div className="row ">
                    <div className="col-lg-6 ">
                        <div className="mb-3">
                            <label htmlFor="example-name-input" className="form-label">Exam Date</label>
                            <input className="form-control" type="text" placeholder='' />
                        </div>

                        <div className="mb-3 m-1 ">
                            <label htmlFor="example-balance-input" className="form-label">Trial Date</label>
                            <input className="form-control" type="text" placeholder='' />
                        </div>
                      
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <label htmlFor="example-balance-input" className="form-label">Limit Person</label>
                            <input className="form-control" type="text" placeholder='' />
                        </div>
                     
                        <div className="mb-3">
                            <label htmlFor="example-balance-input" className="form-label">Description</label>
                            <input className="form-control" type="text" placeholder='' />
                        </div>

                    </div>
                    <div className="row mt-3 ">
                        <div className=" d-flex justify-content-end gap-2">
                            <button type="button" className=" d-none btn btn-success waves-effect waves-light w-sm">
                                <i className="d-block font-size-8"></i> Edit
                            </button>
                            <button type="button" className="d-none btn btn-danger waves-effect waves-light w-sm">
                                <i className=" d-block font-size-8"></i> Delete
                            </button>
                            <button type="button" className=" btn btn-secondary waves-effect waves-light w-sm">
                                <i className=" d-block font-size-8"></i> Reset
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary waves-effect waves-light w-sm" >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default CreateTrialDate