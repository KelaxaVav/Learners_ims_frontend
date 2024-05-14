import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                        © 2023, made with favorite by Kelaxa IT Solutions for a better web Applications.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

Footer.propTypes = {}

export default Footer
