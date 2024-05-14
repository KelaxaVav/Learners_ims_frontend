import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PageNotAccessible(props) {
    return (
        <>
            <div className="my-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mb-5">
                                <h1 className="display-1 fw-semibold">4<span className="text-primary mx-2">0</span>3</h1>
                                <h4 className="text-uppercase">Sorry, You do not have access to this page</h4>
                                <div className="mt-5 text-center">
                                    <Link to={"/"}  >
                                        <span className="btn btn-primary waves-effect waves-light">Back to Login</span>
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

PageNotAccessible.propTypes = {}

export default PageNotAccessible
