import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function users(props) {
  return (

    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="card-title">USERS</h4>
            <Link to="/createUser">
              <button type="button" className="btn btn-primary waves-effect waves-light " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add User +
              </button>
            </Link>
          </div>
          <div className="card-body table-responsive">
            <table id="dataTable" className="table table-bordered table-responsive  nowrap w-100 mt-4 ">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>001</td>
                  <td>Kopana</td>
                  <td>Kopana@gmail.com</td>
                  <td>Admin</td>
                  <td >
                        <a className="btn btn-outline-secondary btn-sm edit m-3" title="Edit">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a className="btn btn-outline-secondary btn-sm edit" title="trash">
                        <i className="fas fa-trash" style={{color:'red'}}></i>
                        </a>
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

users.propTypes = {}

export default users
