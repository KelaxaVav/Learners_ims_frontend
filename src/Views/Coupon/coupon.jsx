import React from 'react'
import { Link } from 'react-router-dom'

function coupon() {
    return (
        <div>
          <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Coupon</h4>
                        <div className="d-flex justify-content-end gap-2">
                            <Link to="/addcoupon">
                                <button
                                    type="button"
                                    className="btn btn-primary waves-effect waves-light w-sm" >
                                    Add Coupon
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div class="card-body">

                        <table id="datatable" class="table table-bordered dt-responsive  nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Coupon Code</th>
                                    <th>Name</th>
                                    <th>Percentage</th>
                                    <th>Start date</th>
                                    <th>End date</th>
                                    <th>Status</th>
                                    <th>Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61%</td>
                                    <td>2011/04/25</td>
                                    <td>2011/04/25</td>
                                    <td>Goood</td>
                                    <td>Yes</td>

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

export default coupon
