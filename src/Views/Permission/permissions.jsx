import React from 'react'
import PropTypes from 'prop-types'

function permissions(props) {
  return (
    <div>
      <div className='row'>
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="card">
            <div>
              <h4 style={{ position: "relative", left: "10px", top: "20px" }}>User Rights</h4>

              <div style={{ position: "relative", top: "-15px", left: "1100px" }}>
                <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#firstmodal">Add Permission</button>

                <div class="modal fade" id="firstmodal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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

                        <button class="btn btn-primary" data-bs-target="#secondmodal" data-bs-toggle="modal" data-bs-dismiss="modal">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" card-header d-flex justify-content-between" style={{ position: "relative", left: "190px" }} >
          <div><h6><div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ position: "relative", left: "-130px", top: "26px" }}>Employee Name<i class="mdi mdi-chevron-down"></i></button>
            <div class="dropdown-menu dropdownmenu-primary">
              <a class="dropdown-item" href="Name">Name</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div></h6>
            <div>

            </div>
          </div>
          <div className="mb-3" style={{ width: "300px", position: "relative", left: "-200px" }}>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {/* { <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div > } */}
          </div>
          <div className="mb-3" style={{ width: "300px", position: "relative", left: "-310px" }}>
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
        </div>
        <div className="card-body">
          <table id="datatable" className="table table-bordered dt-responsive  nowrap w-100">
            <thead>
              <tr className='text-center'>
                <td >Modules</td>
                <td>Add </td>
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
  )
}

permissions.propTypes = {}

export default permissions
