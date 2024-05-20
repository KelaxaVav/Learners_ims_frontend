import React from 'react'

 const CreateCustomer = () => {
  return (
    <>
    <h4 className="card-title">CREATE Customer</h4>
    <div className="col-12 p-0 card  rounded-0 ">
        <div className="card-body p-2">
            <div className="row ">
                <div className="col-lg-6 ">
                   
                   

                    <div className="mb-3 m-1 ">
                        <label htmlFor="example-balance-input" className="form-label">Application Register No</label>
                        <input className="form-control" type="number" placeholder='' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="example-balance-input" className="form-label">NIC No</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>
                   
                    <div className="mb-3">
                        <label htmlFor="example-description-input" className="form-label">Date of Birth</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>
                   
                    <div className="mb-3">
                        <label htmlFor="example-description-input" className="form-label">Phone No</label>
                        <input className="form-control" type="text" placeholder='' />
                        {/* <input className="form-control mt-2" type="text" placeholder='' /> */}
                    </div>
                
                    <div className="mb-3">
                        <label htmlFor="example-balance-input" className="form-label">Medical Certificate No</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="example-balance-input" className="form-label">Driving License No</label>
                      <input className="form-control" type="text" placeholder='' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="example-balance-input" className="form-label"> Date if any</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>
                  
                    <div className="mb-3">
                        <label htmlFor="example-balance-input" className="form-label">Description</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>
                 
                </div>
                <div className="col-lg-6">
                <div className="mb-3">
                        <label htmlFor="example-description-input" className="form-label">Name</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>
                   
                    <div className="mb-3">
                        <label htmlFor="example-description-input" className="form-label">Address</label>
                        <textarea id="basicpill-address-input" class="form-control" rows="2" placeholder="Enter your Address"></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="example-description-input" className="form-label">Age</label>
                        <input className="form-control" type="number" placeholder='' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="example-description-input" className="form-label">Vehicle Classes</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="example-balance-input" className="form-label">Date Proficiency Certificate No</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>


                   
                    <div className="mb-3">
                        <label htmlFor="example-balance-input" className="form-label"> Vehicle Class </label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="example-balance-input" className="form-label">  Bus FC card</label>
                        <input className="form-control" type="text" placeholder='' />
                    </div>
                  

                    <div className="mb-3">
                        <label htmlFor="example-Account no-input" className="form-label">ImageUpload</label>
                        <input className="form-control" type="file" placeholder='' />

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





</>
  )
}

export default CreateCustomer;