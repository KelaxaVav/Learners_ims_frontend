import { React } from 'react'
import { Link } from 'react-router-dom'

function Service() {
    return (

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">SERVICES</h4>
                        <div className="d-flex justify-content-end gap-2">
                            <Link to="/addservice">
                                <button
                                    type="button"
                                    className="btn btn-primary waves-effect waves-light w-sm" >
                                    AddService
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div class="card-body">

                        <table id="datatable" class="table table-bordered dt-responsive  nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Discrptions</th>
                                    <th>Price</th>
                                    <th>Catogory</th>
                                    <th> Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Service
