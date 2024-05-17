import React from 'react'
import PropTypes from 'prop-types'

function CreateExamBook(props) {
    return (
        <>
            <h4 className="card-title">CREATE EXAM BOOK</h4>
            <div className="col-12 p-0 card bg-white rounded-0 ">
                <div className="card-body p-2">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="example-balance-input" className="form-label">Bill No</label>
                            <input className="form-control" type="number" placeholder=' Bill Number....' />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="example-balance-input" className="form-label">NIC Number</label>
                            <input className="form-control" type="text" placeholder=' NIC Number....' />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                <label htmlFor="example-balance-input" className="form-label">Full Name</label>
                                <input className="form-control" type="text" placeholder='Full Name...' />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                <label htmlFor="example-balance-input" className="form-label">Class</label>
                                <input className="form-control" type="text" placeholder='Class...' />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                <label htmlFor="example-balance-input" className="form-label">PIV Amount</label>
                                <input className="form-control" type="number" placeholder=' PIV Amount...' />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                <label htmlFor="example-balance-input" className="form-label">TP Number</label>
                                <input className="form-control" type="number" placeholder=' Phone Number....' />
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

CreateExamBook.propTypes = {}

export default CreateExamBook
