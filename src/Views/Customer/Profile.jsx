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
                  <h5 className="font-size-16 mb-1">Phyllis Gatlin</h5>
                  <p className="text-muted font-size-13">Full Stack Developer</p>
                  <div className="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
                    <div><i className="mdi mdi-circle-medium me-1 text-success align-middle" />Development</div>
                    <div><i className="mdi mdi-circle-medium me-1 text-success align-middle" />phyllisgatlin@minia.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-auto order-1 order-sm-2">
            <div className="d-flex align-items-start justify-content-end gap-2">
              <div>
                <button type="button" className="btn btn-soft-light"><i className="me-1" /> Message</button>
              </div>
              <div>
                <div className="dropdown">
                  <button className="btn btn-link font-size-16 shadow-none text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bx bx-dots-horizontal-rounded" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="nav nav-tabs-custom card-header-tabs border-top mt-4" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link px-3 active" data-bs-toggle="tab" href="#overview" role="tab">Overview</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" data-bs-toggle="tab" href="#about" role="tab">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" data-bs-toggle="tab" href="#post" role="tab">Post</a>
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
            <h5 className="card-title mb-0">About</h5>
          </div>
          <div className="card-body">
          </div>
          {/* end card body */}
        </div>
      </div>
      {/* end tab pane */}
      <div className="tab-pane" id="about" role="tabpanel">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">About</h5>
          </div>
          <div className="card-body">
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
      </div>
      {/* end tab pane */}
      <div className="tab-pane" id="post" role="tabpanel">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Post</h5>
          </div>
          <div className="card-body">
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
    {/* end card */}
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-3">Portfolio</h5>
        <div>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="py-2 d-block text-muted"><i className="mdi mdi-web text-primary me-1" /> Website</a>
            </li>
            <li>
              <a href="#" className="py-2 d-block text-muted"><i className="mdi mdi-note-text-outline text-primary me-1" /> Blog</a>
            </li>
          </ul>
        </div>
      </div>
      {/* end card body */}
    </div>
    {/* end card */}
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-3">Similar Profiles</h5>
        <div className="list-group list-group-flush">
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex align-items-center">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img src="assets/images/users/avatar-1.jpg" alt className="img-thumbnail rounded-circle" />
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14 mb-1">James Nix</h5>
                  <p className="font-size-13 text-muted mb-0">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex align-items-center">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img src="assets/images/users/avatar-3.jpg" alt className="img-thumbnail rounded-circle" />
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14 mb-1">Darlene Smith</h5>
                  <p className="font-size-13 text-muted mb-0">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex align-items-center">
              <div className="avatar-sm flex-shrink-0 me-3">
                <div className="avatar-title bg-light-subtle text-light rounded-circle font-size-22">
                  <i className="bx bxs-user-circle" />
                </div>
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14 mb-1">William Swift</h5>
                  <p className="font-size-13 text-muted mb-0">Backend Developer</p>
                </div>
              </div>
            </div>
          </a>
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