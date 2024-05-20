import React from 'react'

function order() {
  return (
    <div>
        <div className="row" >
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className='text-right m-2'><h4>Order</h4>
                           <button type="button" class="btn btn-primary float-end">Add Order</button>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div class="card-body">

                                        <table id="datatable" className="table table-bordered dt-responsive  nowrap w-100 text-center col-lg-12 col-md-6 sm-1 ">
                                            <thead>
                                                <tr>
                                                    <th>Service No</th>
                                                    <th>Username</th>
                                                    <th>Provider</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                    </tr>
                                                    
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>001</td>
                                                    <td>Kopana</td>
                                                    <td>Edinburgh</td>
                                                    <td>Good</td>
                                                    <td>2011/04/25</td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default order
