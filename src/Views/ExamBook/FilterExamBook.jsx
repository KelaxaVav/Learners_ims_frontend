import React from 'react';
import { Link } from 'react-router-dom';

const FilterExamBook = () => {
    return (
      <>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4 className="card-title">Filter Exam Book</h4>
              </div>
              <div className="card-body table-responsive">
                <div className="row col-12">
                  <div className="col-12 mb-3">
                    <label htmlFor="example-name-input" className="form-label">
                      Exam Date
                    </label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>2024-05-10 - Regular</option>
                      <option>2024-05-15 - Regular</option>
                      <option>2024-05-20 - Oral</option>
                      <option>2024-05-25 - Regular</option>
                    </select>
                  </div>
                 
                  <div className="col-12 text-end  ">
                    <Link to="/examBook">
                      <button type="button" className="btn btn-primary waves-effect waves-light">
                        Search
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default FilterExamBook
