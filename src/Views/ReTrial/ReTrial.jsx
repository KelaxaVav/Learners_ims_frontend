import React from 'react'
import { Link } from 'react-router-dom'

const ReTrial = () => {
  return (
    <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-header ">
          <div className='d-flex justify-content-between mb-3'>
            <h4 className="card-title">ReTrial - 2024-05-20</h4>
            <Link to="/CreateReTrial">
              <button type="button" className="btn btn-primary waves-effect waves-light">
              Create Re Trial+
              </button>
            </Link>
          </div>
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
            {/* <label htmlFor="example-balance-input" className="form-label">Bill No | NIC No </label> */}
                  <input className="form-control" type="text" placeholder='Search...' />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 mb-2 d-flex justify-content-center justify-content-md-between ">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                Search
                </button> 
            </div>
         
          </div>

        </div>
        <div className="card-body table-responsive">
          <table id="dataTable" className="table table-bordered table-responsive nowrap w-100 mt-4">
            <thead>
              <tr>
                <th style={{alignContent:'stretch'}}>No</th>
                <th style={{alignContent:'stretch'}}>Name</th>
                <th style={{alignContent:'stretch'}}>Class</th>
                <th style={{alignContent:'stretch'}}>NIC No</th>
                <th style={{alignContent:'stretch'}}>TP Number</th>
                <th style={{alignContent:'stretch'}}>Payment</th>
                <th style={{alignContent:'stretch'}}>Exam date</th>
                <th style={{alignContent:'stretch'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>01</td>
                <td>Kopana Panchalingam</td> 
                <td>A1,B,B1</td> 
                <th>967793264V</th>
                <th>0771234852</th>
                <td>32000</td>
                <td>2024-05-10</td>
                
                <td className="d-flex justify-content-around">
                  <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                    <i className="fas fa-pencil-alt"></i>
                  </a>
                  <a className="btn btn-outline-secondary btn-sm edit" title="Trash">
                    <i className="fas fa-trash"style={{color:'red'}}></i>
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

export default ReTrial