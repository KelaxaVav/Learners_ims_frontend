import React from 'react'
import { Link } from 'react-router-dom';

 const VehicleClass = () => {
  return (
    <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4 className="card-title">Customer</h4>
          <Link to="/createVehicle">
            <button type="button" className="btn btn-primary waves-effect waves-light">
            CreateCustomer +
            </button>
          </Link>
        </div>
        <div className="card-body table-responsive">
          <table id="dataTable" className="table table-bordered table-responsive nowrap w-100 mt-4">
            <thead>
              <tr>
                <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Name</th>
                <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Discerption</th>
                <th style={{alignContent:'stretch'}}>Amount</th>
                <th style={{alignContent:'stretch'}}>BIV Amount</th>
                <th style={{alignContent:'stretch'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kopana</td>
                <td>abcdefghijklmnopqrstuvw</td>
                <td>35000</td> 
                <td>32000</td> 
                <td >
                  <a className="btn btn-outline-secondary btn-sm edit m-3" title="Edit">
                    <i className="fas fa-pencil-alt"></i>
                  </a>
                  <a className="btn btn-outline-secondary btn-sm edit" title="Trash">
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

export default VehicleClass;