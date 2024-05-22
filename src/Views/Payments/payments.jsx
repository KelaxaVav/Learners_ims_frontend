import React from 'react'
import { Link } from 'react-router-dom'

function payments() {
    return (
        <div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Payments</h4>
                            <div className="d-flex justify-content-end gap-2">
                                <Link to="/addPay">
                                    <button
                                        type="button"
                                        className="btn btn-primary waves-effect waves-light w-sm" >
                                        Add Payments
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div class="card-body">
                            <table id="datable" class="table table-bordered dt-responsive  nowrap w-100">
                                <thead>
                                    <tr>
                                        <th style={{ alignContent: 'stretch' }}>User Name</th>
                                        <th style={{ alignContent: 'stretch' }}>Payment Type</th>
                                        <th style={{ alignContent: 'stretch' }}>Total</th>
                                        <th style={{ alignContent: 'stretch' }}>Pay Amount</th>
                                        <th style={{ alignContent: 'stretch' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>KKopana</td>
                                        <td>Re Exam</td>
                                        <td>1000</td>
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
