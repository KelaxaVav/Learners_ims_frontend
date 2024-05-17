import React from 'react'
import { Link } from 'react-router-dom';

const ExamDates = () => {
    return (
        <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="card-title">Exam Dates</h4>
              <Link to="/CreateExamDate">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                CreateExamDates +
                </button>
              </Link>
            </div>
            <div className="card-body table-responsive">
              <table id="dataTable" className="table table-bordered table-responsive nowrap w-100 mt-4">
                <thead>
                  <tr>
                    <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Exam Date</th>
                    <th style={{alignContent:'stretch'}}>Limit Person</th>
                    <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024.05.20</td>
                    <td>100</td>
                    <td>hi</td> 
                    <td>
                      <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a className="btn btn-outline-secondary btn-sm edit" title="Trash">
                        <i className="fas fa-trash" style={{color:'red'}}></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      )
}
export default ExamDates;