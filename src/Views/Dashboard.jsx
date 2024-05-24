import React from 'react'
import PropTypes from 'prop-types'
import useScript from '../hooks/useScript';
import { Link } from 'react-router-dom';

function Dashboard(props) {
    // useScript("assets/js/pages/dashboard.init.js");
    return (
        <>
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h1>Dashboard</h1>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        {/* card */}
                        <div className="card card-h-100">
                            {/* card body */}
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <span className="text-muted mb-3 lh-1 d-block text-truncate">Total payment</span>
                                        <h4 className="mb-3">
                                            <span className="counter-value" >25000.00</span>
                                        </h4>
                                    </div>
                                    <div className="col-6">
                                        <div id="mini-chart1" data-colors="[&quot;#5156be&quot;]" className="apex-charts mb-2" />
                                    </div>
                                </div>
                                <div className="text-nowrap">
                                    {/* <span className="badge badge-soft-success text-success">+$20.9k</span>
                            <span className="ms-1 text-muted font-size-13">Since last week</span> */}
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div>{/* end col */}
                    <div className="col-xl-3 col-md-6">
                        {/* card */}
                        <div className="card card-h-100">
                            {/* card body */}
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <span className="text-muted mb-3 lh-1 d-block text-truncate">register Payment</span>
                                        <h4 className="mb-3">
                                            <span className="counter-value">11780.00</span>
                                        </h4>
                                    </div>
                                    <div className="col-6">
                                        <div id="mini-chart2" data-colors="[&quot;#5156be&quot;]" className="apex-charts mb-2" />
                                    </div>
                                </div>
                                <div className="text-nowrap">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        {/* card */}
                        <div className="card card-h-100">
                            {/* card body */}
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <span className="text-muted mb-3 lh-1 d-block text-truncate">Re Exam Payment</span>
                                        <h4 className="mb-3">
                                            <span className="counter-value">12000.00</span>
                                        </h4>
                                    </div>
                                    <div className="col-6">
                                        <div id="mini-chart2" data-colors="[&quot;#5156be&quot;]" className="apex-charts mb-2" />
                                    </div>
                                </div>
                                <div className="text-nowrap">
                                    {/* <span className="badge badge-soft-danger text-danger">-29 Trades</span>
                            <span className="ms-1 text-muted font-size-13">Since last week</span> */}
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div>{/* end col*/}
                    <div className="col-xl-3 col-md-6">
                        {/* card */}
                        <div className="card card-h-100">
                            {/* card body */}
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <span className="text-muted mb-3 lh-1 d-block text-truncate">Re Trial Payment</span>
                                        <h4 className="mb-3">
                                            <span className="counter-value" >1220.00</span>
                                        </h4>
                                    </div>
                                    <div className="col-6">
                                        <div id="mini-chart3" data-colors="[&quot;#5156be&quot;]" className="apex-charts mb-2" />
                                    </div>
                                </div>
                                <div className="text-nowrap">
                                    {/* <span className="badge badge-soft-success text-success">+ $2.8k</span>
                            <span className="ms-1 text-muted font-size-13">Since last week</span> */}
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div>{/* end col */}
                   
                </div>{/* end row*/}




            </div>
            <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4 className="card-title">Specific Customer Details</h4>
              </div>
              <div className="card-body table-responsive">
                <div className="row col-12">
                  <div className="col-12 mb-3">
                    <label htmlFor="example-name-input" className="form-label">
                      NIC.No | Register.No
                    </label>
                    <input type="text" className='form-control' placeholder="Search..."/>
                  </div>
                 
                  <div className="col-12 text-end  ">
                    <Link to="/profile">
                      <button type="button" className="btn btn-primary waves-effect waves-light">
                        Search
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            {/* container-fluid */}
        </>
    )
}

Dashboard.propTypes = {}

export default Dashboard
