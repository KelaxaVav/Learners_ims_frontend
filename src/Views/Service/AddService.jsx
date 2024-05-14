import { useScript } from '@uidotdev/usehooks'
import React from 'react'

function AddService() {
    useScript('assets/js/pages/modal.init.js')

    return (
        <div>
            <h4 className="card-title">SERVICES</h4>
            <div className="col-12 p-0 card bg-whait rounded-0 ">
                <div className="card-body p-2">
                    <div className="row ">
                        <div className="col-lg-6 ">
                            <div className="mb-3">
                                <label htmlFor="example-name-input" className="form-label">Name</label>
                                <input className="form-control" type="text" placeholder='@kokiaa' />
                            </div>

                            <div className="mb-3 m-1 ">
                                <label htmlFor="example-balance-input" className="form-label">Price</label>
                                <input className="form-control" type="number" placeholder=' 10000' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-description-input" className="form-label">Discription</label>
                                <textarea className="form-control" type="text" placeholder='Discription' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label htmlFor="example-Account no-input" className="form-label">Catogory</label>
                                <div className="hstack gap-3">
                                    <select className="form-select">
                                        <option>Select</option>
                                        <option>Large select</option>
                                        <option>Small select</option>
                                    </select>
                                    <div>
                                        <div className="d-flex justify-content-end ">

                                            <button type="button" className="btn btn-primary waves-effect waves-light " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Add
                                            </button>
                                        </div>
                                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Add Role</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="mb-1 m-3">
                                                        <label for="basicpill-name-input" className="form-label">Name</label>
                                                        <input type="text" className="form-control" id="basicpill-name-input" placeholder="Enter Your Name" />
                                                    </div>
                                                    <div className="form-group m-3">
                                                        <label className="form-label">Discription</label>
                                                        <input type="text" className="form-control" id="basicpill-name-input" placeholder="etggghv" />
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Reset</button>
                                                        <button type="button" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example-Account no-input" className="form-label">ImageUpload</label>
                                <input className="form-control" type="file" placeholder='' />

                            </div>
                        </div>
                        <div className="row mt-3 ">
                            <div className=" d-flex justify-content-end gap-2    ">
                                <button type="button" className="btn btn-success waves-effect waves-light w-sm">
                                    <i className=" d-block font-size-8"></i> Edit
                                </button>
                                <button type="button" className="btn btn-danger waves-effect waves-light w-sm">
                                    <i className=" d-block font-size-8"></i> Delete
                                </button>
                                <div className="d-flex justify-content-end gap-2">
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
    )
}

export default AddService
