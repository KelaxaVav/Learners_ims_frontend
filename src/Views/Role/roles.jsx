import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function roles(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                <label htmlFor="formGroupExampleInput2">Permission</label>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>select permission</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Reset</button>
                <button type="button" class="btn btn-primary">Submit</button>
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
            <div className="card-body table-responsive">
              <table id="dataTable" className="table table-bordered table-responsive  nowrap w-100 mt-4 ">
                <thead>
                  <tr>
                    <th>Role ID</th>
                    <th>Name</th>
                    <th>Permission</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td>001</td>
                    <td>Santhan</td>
                    <td></td>
                    <td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="trash">
                          <i className=" fas fa-trash"></i>
                        </a>
                      </td>
                    </td>
                  </tr>

                  <tr>
                    <td>002</td>
                    <td>Salini</td>
                    <td></td>
                    <td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="trash">
                          <i className=" fas fa-trash"></i>
                        </a>
                      </td>
                    </td>
                  </tr>

                  <tr>
                    <td>003</td>
                    <td>Narmathan</td>
                    <td></td>
                    <td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="trash">
                          <i className=" fas fa-trash"></i>
                        </a>
                      </td>
                    </td>
                  </tr>

                  <tr>
                    <td>004</td>
                    <td>Harisha</td>
                    <td></td>
                    <td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="trash">
                          <i className=" fas fa-trash"></i>
                        </a>
                      </td>
                    </td>
                  </tr>

                  <tr>
                    <td>005</td>
                    <td>Rizhi</td>
                    <td></td>
                    <td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                      <td>
                        <a className="btn btn-outline-secondary btn-sm edit" title="trash">
                          <i className=" fas fa-trash"></i>
                        </a>
                      </td>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      )
}

      roles.propTypes = { }

      export default roles
