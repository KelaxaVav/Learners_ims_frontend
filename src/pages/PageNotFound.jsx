import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PageNotFound(props) {
  return (
    <>
    <div className="my-5 pt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center mb-5">
                        <h1 className="display-1 fw-semibold">4<span className="text-primary mx-2">0</span>4</h1>
                        <h4 className="text-uppercase">Sorry, page not found</h4>
                        <div className="mt-5 text-center">
                            <Link to={"/dashboard"}  >
                                <span className="btn btn-primary waves-effect waves-light">Back to Dashboard</span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8">
                    <div>
                        <img src="assets/images/error-img.png" className="img-fluid" />
                    </div>
                </div>
                {/* end row */}
            </div>
            {/* end row */}
        </div>
        {/* end container */}
    </div>

</>
  )
}

PageNotFound.propTypes = {}

export default PageNotFound
