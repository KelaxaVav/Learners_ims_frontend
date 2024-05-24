import React from 'react'
import { Link } from 'react-router-dom'

function payments() {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <h4 className="card-title">Payments</h4>
                                <Link to="/addPay">
                                    <button
                                        type="button"
                                        className="btn btn-primary waves-effect waves-light w-sm" >
                                        Add Payments
                                    </button>
                                </Link>
                        </div>
                        <div class="card-body">
                            <table id="datable" class="table table-bordered dt-responsive  nowrap w-100">
                                <thead>
                                    <tr>
                                        <th style={{ alignContent: 'stretch' }}>User Name</th>
                                        <th style={{ alignContent: 'stretch' }}>Payment Type</th>
                                        <th style={{ alignContent: 'stretch' }}>Total</th>
                                        <th style={{ alignContent: 'stretch' }}>Paid Amount</th>
                                        <th style={{ alignContent: 'stretch' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>KKopana</td>
                                        <td>Re Exam</td>
                                        <td>1500</td>
                                        <td>1000</td>
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
                </div>
            </div>
        </div>
    )
}

export default payments
