import React from 'react';
import { Link } from 'react-router-dom';

const CustomerList = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="card-title">Customer</h4>
            <Link to="/createCustomer">
              <button type="button" className="btn btn-primary waves-effect waves-light">
              CreateCustomer +
              </button>
            </Link>
          </div>
          <div className="card-body table-responsive">
            <table id="dataTable" className="table table-bordered table-responsive nowrap w-100 mt-4">
              <thead>
                <tr>
                  <th style={{alignContent:'stretch'}}>Date</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Aplication Register No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Name</th>
                  <th style={{alignContent:'stretch'}}>NIC No</th>
                  <th style={{alignContent:'stretch'}}>Address</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Date of Birth</th>
                  <th style={{alignContent:'stretch'}}>Age</th>
                  <th style={{alignContent:'stretch'}}>Phone No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Vehicle Classes</th>
                  <th style={{alignContent:'stretch'}}>Amount</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Medical Cretificate No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Date Proficiency Certificate No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Driving License No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}> Vehicle Class</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}> Bus FC card</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}> Date if any</th>
                  <th style={{alignContent:'stretch'}}>Photo</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Discerption</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023.10.05</td>
                  <td>0001</td>
                  <td>Kopana panchalingam</td> 
                  <td>967793264v</td> 
                  <th>Vavuniya</th>
                  <th>1996.10.05</th>
                  <th>28</th>
                  <td>0775456789</td>
                  <th>AB1B</th>
                  <td>32000</td>
                  <td>7024225</td>
                  <td>2024.10.05</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="d-flex justify-content-around">
                    <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a className="btn btn-outline-secondary btn-sm edit" title="Trash">
                      <i className="fas fa-trash"style={{color:'red'}}></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
