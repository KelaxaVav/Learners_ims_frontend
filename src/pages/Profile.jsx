import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';

function Profile(props) {
  const user = useSelector((state) => state.user);
  console.log(user.user.user);
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-9 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm order-2 order-sm-1">
                  <div className="d-flex align-items-start mt-3 mt-sm-0">
                    <div className="flex-shrink-0">
                      <div className="avatar-xl me-3">
                        <img
                          src="assets/images/users/avatar-2.jpg"
                          className="img-fluid rounded-circle d-block"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="font-size-16 mb-1">Nesathasan Lirojan</h5>
                        <p className="text-muted font-size-13">Full Stack Developer</p>
                        <div className="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
                          <div>
                            <i className="mdi mdi-circle-medium me-1 text-success align-middle" />
                            Agent
                          </div>
                          <div>
                            <i className="mdi mdi-circle-medium me-1 text-success align-middle" />
                            karanliro@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto order-1 order-sm-2">
                  <div className="d-flex align-items-start justify-content-end gap-2">
                    <div>
                      <div className="dropdown">
                        <button
                          className="btn btn-link font-size-16 shadow-none text-muted dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-horizontal-rounded" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item " href="#">
                              <i className="fas fa-undo-alt mr-2"> </i>
                              Go To Agent List
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item bg-warning" href="#">
                              <i className="fas fa-user-edit" />
                              Update User
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs-custom card-header-tabs border-top mt-4" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link px-3 active" data-bs-toggle="tab" href="#agentDetail" role="tab">
                    Agent Detail
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" data-bs-toggle="tab" href="#loginDetail" role="tab">
                    Login Detail
                  </a>
                </li>
              </ul>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          <div className="tab-content">
            <div className="tab-pane active" id="agentDetail" role="tabpanel">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Personal Detail</h5>
                </div>
                <div className="card-body">
                  <div>
                    <div className="pb-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">Address :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p className="mb-2">Omanthai, VAvuniya.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">Country :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p className="mb-2">Srilanka</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">State :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p className="mb-2">Northern</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">City :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p>Vavuniya</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
            </div>
            {/* end tab pane */}
            <div className="tab-pane" id="loginDetail" role="tabpanel">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Agent Login Detail</h5>
                </div>
                <div className="card-body">
                  <div>
                    <div className="pb-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">Status :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p className="mb-2">Active</p>
                            {/* <p className="pull-right badge bg-blue">Active</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">Last Login :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p className="mb-2">2023-10-06 16:46:20</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">Last Activity :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p className="mb-2">2023-10-06 16:46:20</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">Create Date :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p>2023-10-06 16:46:20</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-3">
                      <div className="row">
                        <div className="col-xl-2">
                          <div>
                            <h5 className="font-size-15">Ip Address :</h5>
                          </div>
                        </div>
                        <div className="col-xl">
                          <div className="text-muted">
                            <p>162.25.25.225</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end tab pane */}
          </div>
          {/* end tab content */}
        </div>
        {/* end col */}
        <div className="col-xl-3 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-3">Agent Commission Detail</h5>
              <div>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#" className="py-2 d-block text-muted">
                      <i className="mdi mdi-web text-primary me-1" /> Commission :<span>250000</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block text-muted">
                      <i className="mdi mdi-note-text-outline text-primary me-1" /> Admin Commission :
                      <span>2500</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block text-muted">
                      <i className="mdi mdi-note-text-outline text-primary me-1" /> Current Balance :
                      <span>22500</span>
                    </a>
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
      {/* end row */}
    </div>
  </>
  )
}

Profile.propTypes = {}

export default Profile
