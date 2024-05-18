import React from 'react'

const CreateReExam = () => {
  return (
    <>
    <h4 className="card-title">CREATE Re EXAM </h4>
    <div className="col-12 p-0 card bg-white rounded-0 ">
        <div className="card-body p-2">
            <div className="row ">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <label htmlFor="example-balance-input" className="form-label">No</label>
                    <input className="form-control" type="number" placeholder='Number....' />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <label htmlFor="example-balance-input" className="form-label">Name</label>
                        <input className="form-control" type="text" placeholder='Name...' />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <label htmlFor="example-balance-input" className="form-label">Class</label>
                        <input className="form-control" type="text" placeholder='Class...' />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <label htmlFor="example-balance-input" className="form-label">NIC Number</label>
                    <input className="form-control" type="text" placeholder=' NIC Number....' />
                </div>
               
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <label htmlFor="example-balance-input" className="form-label">TP Number</label>
                        <input className="form-control" type="number" placeholder=' Phone Number....' />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <label htmlFor="example-balance-input" className="form-label">Payment</label>
                        <input className="form-control" type="number" placeholder=' Payment....' />
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

export default CreateReExam