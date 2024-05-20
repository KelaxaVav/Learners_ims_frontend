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
                <th className='d-flex justify-content-around ' style={{alignContent:'stretch'}}><input className="form-check-input" type="checkbox" id="formCheck1"/><span >Check</span></th>
                  <th style={{ alignContent: 'stretch' }}>No</th>
                  <th style={{ alignContent: 'stretch' }}>Name</th>
                  <th style={{ alignContent: 'stretch' }}>Class</th>
                  <th style={{ alignContent: 'stretch' }}>PIV</th>
                  <th style={{ alignContent: 'stretch' }}>NIC No</th>
                  <th style={{ alignContent: 'stretch' }}>BILL No</th>
                  <th style={{ alignContent: 'stretch' }}>Status</th>
                  <th style={{ alignContent: 'stretch' }}>TP Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td className="text-center">
                    <input class="form-check-input  " type="checkbox" id="formCheck1"/></td>
                     
                  <td>01</td>
                  <td>Kopana panchalingam</td>
                  <td>A1,B,B1</td>
                  <th>5000.00</th>
                  <th>967793264v</th>
                  <th>1000</th>
                  <td>Pass</td>
                  <td>0771234567</td>
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
