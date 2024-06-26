import React from 'react'

const CreateVehicle = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">CREATE CUSTOMER</h4>
                        </div>
                        <div className="card-body">
                            <div className="row ">
                                <div className="col-lg-6 ">

                                    <div className="mb-3">
                                        <label htmlFor="example-name-input" className="form-label">Name</label>
                                        <input className="form-control" type="text" placeholder='' />
                                    </div>
                                    <div className="mb-3 m-1 ">
                                        <label htmlFor="example-balance-input" className="form-label">Description</label>
                                        <input className="form-control" type="text" placeholder='' />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="example-description-input" className="form-label">Amount</label>
                                        <input className="form-control" type="text" placeholder='' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="example-balance-input" className="form-label">PIV Amount</label>
                                        <input className="form-control" type="text" placeholder='' />
                                    </div>
                                </div>

                                <div className="row mt-3 ">
                                    <div className=" d-flex justify-content-end gap-2">
                                        {/* <button type="button" className=" d-none btn btn-success waves-effect waves-light w-sm">
                            <i className="d-block font-size-8"></i> Edit
                        </button>
                        <button type="button" className="d-none btn btn-danger waves-effect waves-light w-sm">
                            <i className=" d-block font-size-8"></i> Delete
                        </button> */}
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
                </div>
            </div>





        </>
    )
}

export default CreateVehicle;

