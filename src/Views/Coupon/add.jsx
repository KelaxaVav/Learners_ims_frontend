import React from 'react'

function add() {
  return (
    <div>
<div className="card">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
         <h4>Add Coupon</h4>
         </div>

        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label" htmlFor="validationCustom01">Code
             </label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="" defaultValue="" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label" htmlFor="validationCustom02">Name</label>
            <input type="text" className="form-control" id="validationCustom02" placeholder="" defaultValue="" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
      </div>

<div className="row">
      <div className="col-lg-6">
    <div className="mt-3 mt-lg-0">
      <div className="mb-3">
        <label htmlFor="example-date-input" className="form-label">Start Date</label>
        <input className="form-control" type="date" defaultValue="mm/dd/yyyy" id="example-date-input" />
      </div>
    
    </div>
  </div>
  <div className="col-lg-6">
    <div className="mt-3 mt-lg-0">
      <div className="mb-3">
        <label htmlFor="example-date-input" className="form-label"> End Date</label>
        <input className="form-control" type="date" defaultValue="mm/dd/yyyy" id="example-date-input" />
      </div>
    
    </div>
  </div>
  </div>




   
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label" htmlFor="validationCustom01">Percentage
             </label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="" defaultValue="" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label" htmlFor="validationCustom02">Total Coupon</label>
            <input type="text" className="form-control" id="validationCustom02" placeholder="" defaultValue="" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
      </div>
     <button type="button" class="btn btn-primary text-center">Submit</button>






    </div>
  )
}

export default add
