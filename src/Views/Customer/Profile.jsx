import React from 'react'

const Profile = () => {
  return (
    <div className="row">
      <div className="col-xl-9 col-lg-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm order-2 order-sm-1">
                <div className="d-flex align-items-start mt-3 mt-sm-0">
                  <div className="flex-shrink-0">
                    <div className="avatar-xl me-3">
                      <img src="assets/images/users/avatar-2.jpg" alt className="img-fluid rounded-circle d-block" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div>
                      <h5 className="font-size-15 mb-1">Kopana Panchalingam</h5>
                      <div className="row">
                        <p className="text-muted font-size-13"> Vehicle Class <strong>(A1, B, B1)</strong> </p>
                      </div>

                      <div className="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
                        <div><i className="mdi mdi-circle-medium text-success align-middle" />077 123 4567</div>
                        <div><i className="mdi mdi-circle-medium text-success align-middle" />072 456 1258</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-auto order-1 order-sm-2">
                <div className="d-flex align-items-center justify-content-end gap-2">
                  <label htmlFor="" className='form-label'>Reg.No :- 1900</label>
                  <div>
                    {/* <div className="dropdown">
                  <button className="btn btn-link font-size-16 shadow-none text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bx bx-dots-horizontal-rounded" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
            <ul className="nav nav-tabs-custom card-header-tabs border-top mt-4" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link px-3 active fs-5" data-bs-toggle="tab" href="#overview" role="tab">Personal Detail</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3  fs-5" data-bs-toggle="tab" href="#about" role="tab">Exam</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3  fs-5" data-bs-toggle="tab" href="#post" role="tab">Trial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3  fs-5" data-bs-toggle="tab" href="#payment" role="tab">Payment</a>
              </li>
            </ul>
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
        <div className="tab-content">
          <div className="tab-pane active" id="overview" role="tabpanel">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Customer Personal Details</h5>
              </div>
              <div className="card-body">
                <dl class="row mb-0">
                  <div class="col-md-4">
                    <dt class="col-sm-12 fw-normal">Full Name</dt>
                    <dd class="col-sm-12 fw-bold " style={{ fontSize: 15 }}>Kopana Panchalingam</dd>

                    <dt class="col-sm-12 fw-normal">NIC No</dt>
                    <dd class="col-sm-12 fw-bold" style={{ fontSize: 15 }}>9989653214V</dd>
                  </div>

                  <div class="col-md-4">
                    <dt class="col-sm-12 fw-normal">Address</dt>
                    <dd class="col-sm-12 fw-bold " style={{ fontSize: 15 }}>Kovil Road kurmankadu vavuniya</dd>

                    <dt class="col-sm-12 fw-normal">Date of Birth</dt>
                    <dd class="col-sm-12 fw-bold " style={{ fontSize: 15 }}>1999-01-01</dd>
                  </div>

                  <div class="col-md-4">
                    <dt class="col-sm-12 fw-normal">Age</dt>
                    <dd class="col-sm-12 fw-bold " style={{ fontSize: 15 }}>26</dd>

                    <dt class="col-sm-12 fw-normal">Phone No</dt>
                    <dd class="col-sm-12">
                      <dl class="row mb-0">
                        <dd class="col-sm-12 fw-bold " style={{ fontSize: 15 }}>077 125 4895 / 077 125 4895</dd>
                      </dl>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* end card body */}
            </div>
          </div>
          {/* end tab pane */}
          <div className="tab-pane" id="about" role="tabpanel">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Exam</h5>
              </div>
              <div className="card-body table-responsive ">
                <table id="dataTable" className="table table-bordered table-responsive nowrap w-100 ">
                  <thead>
                    <tr>
                      <th style={{ minWidth: "200px", maxWidth: "50px", alignContent: 'stretch' }}>Exam Date</th>
                      <th style={{ minWidth: "200px", maxWidth: "50px", alignContent: 'stretch' }}>Exam Type</th>
                      <th style={{ alignContent: 'stretch' }}>Status</th>
                      <th style={{ alignContent: 'stretch' }}>Amount</th>
                      <th style={{ alignContent: 'stretch' }}>Paid Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2024-01-01</td>
                      <td>Direct</td>
                      <td>Pass</td>
                      <td>32000</td>
                      <td>32000</td>

                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end card body */}
            </div>
            {/* end card */}
          </div>
          {/* end tab pane */}
          <div className="tab-pane" id="post" role="tabpanel">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Trial</h5>
              </div>
              <div className="card-body table-responsive ">
                <table id="dataTable" className="table table-bordered table-responsive nowrap w-100 ">
                  <thead>
                    <tr>
                      <th style={{ minWidth: "200px", maxWidth: "50px", alignContent: 'stretch' }}>Exam Date</th>
                      <th style={{ minWidth: "200px", maxWidth: "50px", alignContent: 'stretch' }}>Exam Type</th>
                      <th style={{ alignContent: 'stretch' }}>Trial Date</th>
                      <th style={{ alignContent: 'stretch' }}>status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2024-01-01</td>
                      <td>Normal</td>
                      <td>2024-02-01</td>
                      <td>pass</td>

                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end card body */}
            </div>
            {/* end card */}
          </div>
          {/* end tab pane */}
          <div className="tab-pane" id="payment" role="tabpanel">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Payment</h5>
              </div>
              <div className="card-body table-responsive ">
                <table className="table table-nowrap align-middle mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 70 }} className="fw-bold fs-6">No.</th>
                      <th className="fw-bold fs-6">Date</th>
                      <th className="fw-bold fs-6">Item</th>
                      <th className="text-end fw-bold fs-6" style={{ width: 120 }}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-center fw-bold fs-5" colSpan={4}>Charges </th>
                    </tr>
                    <tr>
                      <th scope="row">01</th>
                      <td><h5 className="mb-1 fs-6 fw-bold">2024-01-01</h5></td>
                      <td >Application Payment</td>
                      <td className="text-end">32000.00</td>
                    </tr>

                    <tr>
                      <th scope="row">02</th>
                      <td><h5 className="mb-1 fs-6 fw-bold">2024-01-01</h5></td>
                      <td >Re Exam (2024-01-05)</td>
                      <td className="text-end">550.00</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center fw-bold fs-5" colSpan={4}>Payment</th>
                    </tr>
                    <tr>
                      <th scope="row">03</th>
                      <td><h5 className="mb-1 fs-6 fw-bold">2024-01-01</h5></td>
                      <td >Application Payment</td>
                      <td className="text-end">3000.00</td>
                    </tr>
                    <tr>
                      <th scope="row">04</th>
                      <td><h5 className="mb-1 fs-6 fw-bold">2024-01-01</h5></td>
                      <td >Application Payment</td>
                      <td className="text-end">5000.00</td>
                    </tr>
                    <tr>
                      <th scope="row" colSpan={3} className=" text-end">
                        Total Payments</th>
                      <td className=" text-end fw-bold">8000.00</td>
                    </tr>
                    <tr>
                      <th scope="row" colSpan={3} className="border-0 text-end">Total charges</th>
                      <td className="border-0 text-end fw-bold">32550.00</td>
                    </tr>

                    <tr>
                      <th scope="row" colSpan={3} className="border-0 text-end">Amount Due</th>
                      <td className="border-0 text-end"><h4 className="m-0">24550.00</h4></td>
                    </tr>
                  </tbody>
                </table>

              </div>
              {/* end card body */}
            </div>
            {/* end card */}
          </div>
        </div>
        {/* end tab content */}
      </div>
      {/* end col */}
      <div className="col-xl-3 col-lg-4">
        {/* end card */}
        <div className="card">
          <div className="card-header">
            <h5 className="card-title ">Medical Detail</h5>
          </div>
          <div className="card-body">
            <div>
              <ul className="list-unstyled mb-0">
                <li className='mb-2'>
                  <h5 className="font-size-14 mb-1">Certificate No</h5>
                  <p className="font-size-13 text-muted mb-0">T024223</p>
                </li>
                <li className='mb-2'>
                  <h5 className="font-size-14 mb-1">Date</h5>
                  <p className="font-size-13 text-muted mb-0">2024-02-25</p>
                </li>
                <li className='mb-2'>
                  <h5 className="font-size-14 mb-1">Note</h5>
                  <p className="font-size-13 text-muted mb-0">O+, 56kg</p>
                </li>

              </ul>
            </div>
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
        <div className="card">
          <div className="card-header">
            <h5 className="card-title ">License Detail</h5>
          </div>
          <div className="card-body">
            <div>
              <ul className="list-unstyled mb-0">
                <li className='mb-2'>
                  <h5 className="font-size-14 mb-1">License No</h5>
                  <p className="font-size-13 text-muted mb-0">T024223</p>
                </li>
                <li className='mb-2'>
                  <h5 className="font-size-14 mb-1">Vehicle Class</h5>
                  <p className="font-size-13 text-muted mb-0">2024-02-25</p>
                </li>
                <li className='mb-2'>
                  <h5 className="font-size-14 mb-1">Note</h5>
                  <p className="font-size-13 text-muted mb-0">O+, 56kg</p>
                </li>

              </ul>
            </div>
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
      </div>
      {/* end col */}
    </div>

  )
}

export default Profile