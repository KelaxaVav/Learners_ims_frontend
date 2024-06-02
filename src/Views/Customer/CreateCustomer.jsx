import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap CSS

const options = [
    { value: 'a1', label: 'A1' },
    { value: 'b', label: 'B' },
    { value: 'b1', label: 'B1' },
];

const CreateCustomer = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <>
            <h4 className="card-title">CREATE Customer</h4>
            <div className="col-12 p-0 card rounded-0">
                <div className="card-body p-2">
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="name-input" className="form-label">Name</label>
                            <input className="form-control" type="text" id="name-input" placeholder='' />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="nic-input" className="form-label">NIC No</label>
                            <input className="form-control" type="text" id="nic-input" placeholder='' />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="address-input" className="form-label">Address</label>
                            <textarea id="address-input" className="form-control" rows="1" placeholder="Enter your Address"></textarea>
                        </div>
                        <div className="col-sm-6 mb-2 d-grid">
                            <label htmlFor="dob-input" className="form-label mb-0 p-0">Date of Birth</label>
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} id="dob-input" />
                        </div>

                        <div className="col-sm-6 mb-3">
                            <label htmlFor="personal-phone-input" className="form-label">Personal Phone No</label>
                            <input className="form-control" type="text" id="personal-phone-input" placeholder='' />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="phone-input" className="form-label">Phone No</label>
                            <input className="form-control" type="text" id="phone-input" placeholder='' />
                        </div>




                        <div className="mb-5 w-25">
                            <label htmlFor="example-Account no-input" className="form-label">ImageUpload</label>
                            <input className="form-control" type="file" placeholder='' />

                        </div>



                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne"></h2>
                            <div className=" mb-2">
                                <h6 className="fw-bold fs-5 ">Medical Detail</h6>
                                <div className="row">
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">Certificate No</h5>
                                                <input className="form-control" type="text" placeholder='' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col d-grid">
                                        <h5 className="font-size-14 mb-0">Date</h5>
                                        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} id="dob-input" />
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">Note</h5>
                                                <textarea className="form-control" name="" id="" rows="1"></textarea>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button className="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                <div className="square-switch">
                                    <input type="checkbox" id="square-switch2" switch="info" defaultChecked />
                                    <label htmlFor="square-switch2" data-on-label="Yes" data-off-label="No"></label>
                                </div>
                            </button>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <h6 className="fw-bold fs-5">License Detail</h6>
                                <div className="row">
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">License No</h5>
                                                <input className="form-control" type="text" placeholder='' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">Vehicle Class</h5>
                                                <Select
                                                    isMulti
                                                    value={selectedOptions}
                                                    onChange={handleChange}
                                                    options={options}
                                                    className="basic-multi-select form-control"
                                                    classNamePrefix="select"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                <h5 className="font-size-14 mb-1">Note</h5>
                                                <textarea className="form-control" name="" id="" rows="1"></textarea>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="d-flex justify-content-end gap-2">
                                <button type="button" className="btn btn-secondary waves-effect waves-light w-sm">
                                    <i className="d-block font-size-8"></i> Reset
                                </button>
                                <button type="button" className="btn btn-primary waves-effect waves-light w-sm">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateCustomer;
