import React from 'react'
import PropTypes from 'prop-types'

function permissions(props) {
  return (
    <div>
      <div className='row'>
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div class="modal fade" id="firstModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalToggleLabel">Add Permission</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="mb-3" style={{ width: "300px", position: "relative", right: "-75px" }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* { <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div > } */}
                  </div>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-primary" >Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="card-title">ROLES</h4>
              <button type="button" className="btn btn-primary waves-effect waves-light " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add Role +
              </button>
            </div>
            <div className="card-body">
              <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                  <select className="form-select">
                    <option>Select</option>
                    <option>Super Admin</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
              <table id="datatable" className="table table-bordered dt-responsive  nowrap w-100">
                <thead>
                  <tr className='text-center'>
                    <td>Modules</td>
                    <td>Add</td>
                    <td>Update</td>
                    <td>Delete</td>
                    <td>View</td>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Masters</th>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>

                  </tr>
                  <tr>
                    <th>Job Work Entry</th>
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>
                    </td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                  </tr>
                  <tr>
                    <th>Report</th>
                    <td colSpan="3"></td>
                    {/* <td></td>
                  <td></td> */}
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                  </tr>
                  <tr>
                    <th>Purchase</th>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                  </tr>
                  <tr>
                    <th>Quotation</th>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                    <td>   <div className="form-check form-check-inline">
                      <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    </div></td>
                  </tr>
                  <tr>
                    <th>Invoice</th>
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Stock Report</th>
                    <td colSpan="3"></td>
                    {/* <td></td>
                  <td></td> */}
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Over All Report</th>
                    <td colSpan="3"></td>
                    {/* <td></td>
                  <td></td> */}
                    <td>
                      <div className="form-check form-check-inline">
                        <input style={{ position: "relative", left: "80px", height: "17px", width: "17px" }} className="form-check-input  " type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      </div>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="button" class="btn btn-primary" style={{ position: "relative", left: "1150px" }}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

permissions.propTypes = {}

export default permissions
