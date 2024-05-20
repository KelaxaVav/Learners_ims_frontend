import React from 'react';
import { Link } from 'react-router-dom';

const LPBooks = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header ">
            <div className='d-flex justify-content-between mb-3'>
              <h4 className="card-title">LP Book - 2024-05-20</h4>
              <Link to="/createLPBook">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                  Create LP Book +
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
                  <th style={{ alignContent: 'stretch' }}>No</th>
                  <th style={{ alignContent: 'stretch' }}>Name</th>
                  <th style={{ alignContent: 'stretch' }}>Class</th>
                  <th style={{ alignContent: 'stretch' }}>PIV</th>
                  <th style={{ alignContent: 'stretch' }}>NIC No</th>
                  <th style={{ alignContent: 'stretch' }}>BILL No</th>
                  <th style={{ alignContent: 'stretch' }}>Status</th>
                  <th style={{ alignContent: 'stretch' }}>TP Number</th>
                  <th style={{ alignContent: 'stretch' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Kopana panchalingam</td>
                  <td>A1,B,B1</td>
                  <th>5000.00</th>
                  <th>962255315V</th>
                  <th>1000</th>
                  <td>Pass</td>
                  <td>0771234567</td>

                  <td className="d-flex justify-content-around">
                    <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a className="btn btn-outline-secondary btn-sm edit" title="Trash">
                      <i className="fas fa-trash" style={{ color: 'red' }}></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className=" d-flex justify-content-end gap-2">
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light w-sm">
              Submit
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LPBooks;
