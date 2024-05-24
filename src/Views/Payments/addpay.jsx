import React from 'react'

function addPay() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            {/* <div className="col-lg-6 col-md-12 col-sm-12"> */}
                            <h4 className="card-title">Add Payments</h4>
                            {/* </div> */}
                        </div>
                        {/* </div> */}
                        <div className="card-body row">
                            <div class="col-xl-4 col-md-6">
                                <div class="form-group mb-3">
                                    <label class="form-label">Select Payment Type</label>
                                    <select required class="form-control form-select">
                                        {/* <option value="">Select Payment Type</option> */}
                                        <option value="wr">Application Payment</option>
                                        <option value="wr">Application renewal Payment</option>
                                        <option value="wr">Oral Exam</option>
                                        <option value="wr">Re Exam</option>
                                        <option value="ph">Re Trial</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="form-group mb-3">
                                    <label class="form-label">NIC.No / Reg.No</label>
                                    <input className="form-control" type="text" placeholder='' />
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="form-group mb-3">
                                    <label>Amount </label>
                                    <input type="" required
                                        data-pristine-required-message="Please Enter Amount"
                                        class="form-control" placeholder="Enter Amount" />
                                    <label>Total amount :- 32000.00 <span>, Paid Amount :- 15000.00</span></label>
                                </div>
                            </div>
                            <div className="col-12 text-end">
                                <button type="button" class="btn btn-primary waves-effect waves-light">Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default addPay
