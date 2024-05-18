import React from "react";
import PropTypes from "prop-types";

function permissions(props) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="card-title">ROLES</h4>
              <div className="row">
                <div className="col-sm-auto align-self-center">
                  <label className="form-check-label " htmlFor="role">
                    Role :
                  </label>
                </div>
                <div className="col-sm-auto ">
                  <select id="role" className="form-select">
                    <option>Super Admin</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div className="col-sm-auto ">
                  <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Permission
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table id="datatable" className="table table-bordered dt-responsive  nowrap w-100">
                <thead>
                  <tr className="text-center">
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
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Job Work Entry</th>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Report</th>
                    <td colSpan="3"></td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Purchase</th>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Quotation</th>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Invoice</th>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Stock Report</th>
                    <td colSpan="3"></td>
                   
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Over All Report</th>
                    <td colSpan="3"></td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          style={{ position: "relative", left: "80px", height: "17px", width: "17px" }}
                          className="form-check-input  "
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="button" className="btn btn-primary" >
              Edit
            </button>
            <button type="button" className="btn btn-primary d-none" >
              Update
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

permissions.propTypes = {};

export default permissions;
