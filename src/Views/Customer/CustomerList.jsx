import React from 'react';
import { Link } from 'react-router-dom';
import CustomDataTable from '../CustomPages/CustomDataTable';

const CustomerList = () => {

  // const columns = [
  //   {
  //       name: 'Date',
  //       selector: row => row.id,
  //       omit: true,
  //   },
  //   {
  //       name: 'Register No',
  //       selector: row => row.id,
  //       omit: true,
  //   },
  //   {
  //       name: 'Name',
  //       selector: row => row.first_name + ' ' + row.last_name ,
  //   },
  //   {
  //       name: 'NIC No',
  //       selector: row => row.mobile,
  //   },
  //   {
  //       name: 'Date of Birth',
  //       selector: row => row.email,
  //   },
  //   {
  //       name: 'Vehicle Classes',
  //       selector: row => row.email,
  //   },
  //   {
  //       name: 'Date of Birth',
  //       selector: row => row.email,
  //   },
  //   {
  //     name: 'Role',
  //     selector: row => row.role.name,
  // },
  //   {
  //       name: 'Action',
  //       center: true,
  //       cell: (row) => (
  //           <div>
  //               {/* <Permission type={["member.edit"]}> */}
  //                   <Link
  //                       className="text-success me-2"
  //                       to={'/editUser'}
  //                       state={row}
  //                   >
  //                        <i className="fas fa-pencil-alt"></i>
  //                   </Link>
  //               {/* </Permission> */}
  //               {/* <Permission type={["member.delete"]}> */}
  //                   <Link
  //                       className="me-2 text-danger"
  //                       onClick={() => handleDelete(row.user_id)}
  //                   >
  //                        <i className="fas fa-trash"style={{color:'red'}}></i>
  //                   </Link>
  //               {/* </Permission> */}
  //           </div>
  //       ),
  //   },
  // ];

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
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Application Register No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Name</th>
                  <th style={{alignContent:'stretch'}}>NIC No</th>
                  <th style={{alignContent:'stretch'}}>Address</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Date of Birth</th>
                  <th style={{alignContent:'stretch'}}>Age</th>
                  <th style={{alignContent:'stretch'}}>Phone No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Vehicle Classes</th>
                  <th style={{alignContent:'stretch'}}>Amount</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Medical Certificate No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Date Proficiency Certificate No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Driving License No</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}> Vehicle Class</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}> Bus FC card</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}> Date if any</th>
                  <th style={{alignContent:'stretch'}}>Photo</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Description</th>
                  <th style={{minWidth: "200px", maxWidth:"50px",alignContent:'stretch'}}>Action</th>

                </tr>
              </thead>
              {/* <CustomDataTable
                dataRows={userList}
                columns={columns}
            /> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
