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

                        <table id="datatable" class="table table-bordered dt-responsive  nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>User Name</th>
                                    <th>Provider</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                 </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61%</td>
                                    <td>2011/04/25</td>
                                 
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
