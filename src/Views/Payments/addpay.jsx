import React from 'react'

function addPay() {
    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Add Payments</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="col-xl-4 col-md-6">
                    <div class="form-group mb-3">
                        <label class="form-label">Select Payment Type</label>
                        <select required class="form-control form-select">
                            <option value="">Select Payment Type</option>
                            <option value="wr">Re Exam</option>
                            <option value="ph">Re Trial</option>
                        </select>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="form-group mb-3">
                        <th style={{ alignContent: 'stretch' }}>Name</th>
                        <input className="form-control" type="text" placeholder='' />
                    </div>
                </div>
                <div className="row">
                    <div class="col-xl-4 col-md-6">
                        <div class="form-group mb-3">
                            <label>Amount</label>
                            <input type="" required
                                data-pristine-required-message="Please Enter Amount"
                                class="form-control" placeholder="Enter Amount" />
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="form-group mb-3">
                            <label>Total Amount</label>
                            <input type="" required
                                data-pristine-required-message="Please Enter Total Amount"
                                class="form-control" placeholder="Enter Total Amount" />
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="form-group mb-3">
                            <label>Pay Amount</label>
                            <input type="" required
                                data-pristine-required-message="Please Enter Pay Amount"
                                class="form-control" placeholder="Enter Pay Amount" />
                        </div>
                    </div>
                </div>

            </div>
            <button type="button" class="btn btn-primary float-left">Add Coupon</button>
        </div>
    )
}

export default addPay
