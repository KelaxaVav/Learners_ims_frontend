import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ConfirmAlertDialog from '../../utils/AlertDialog/ConfirmAlertDialog';
import { Http } from '../../services/api';
import AlertDialog from '../../utils/AlertDialog/AlertDialog';
import CustomDataTable from '../CustomPages/CustomDataTable';

function users(props) {
  const [userList, setUserList] = useState(false);

  useEffect(() => {
    fetchUsers();
}, []);

const handleDelete = async (id) => {
  const isConfirmed = await ConfirmAlertDialog({
      confirmButtonText: 'Yes, delete it!',
      message: 'Are you sure you want to delete?',
  });
  if (isConfirmed) {
      try {
          // const response = await axios.delete(`${API_BASE_URL}/customer/${id}`);
          const response = await Http.delete(`/user/${id}`);
          if (response.data.status) {
            fetchUsers();
              await AlertDialog({ title: "Deleted!", message: "User has been deleted.", icon: "success" });
          } else {
              await AlertDialog({ title: "Deleted!", message: "User has not been deleted.", icon: "error" });
          }

      } catch (error) {
          console.error(error);
          await AlertDialog({ title: "Deleted!", message: error?.response?.data?.meta?.message ?? "User has not been deleted.", icon: "error" });

      }
  }
};

const fetchUsers = async () => {
  try {
      // const response = await fetch(`${API_BASE_URL}/customer`);
      const response = await Http.get("user");
      setUserList(response.data.data);
  } catch (error) {
      console.error(error);
  }
};

const columns = [
  {
      name: 'Id',
      selector: row => row.id,
      omit: true,
  },
  {
      name: 'Full Name',
      selector: row => row.first_name + ' ' + row.last_name ,
  },
  {
      name: 'Mobile',
      selector: row => row.mobile,
  },
  {
      name: 'Email',
      selector: row => row.email,
  },
  {
    name: 'Role',
    selector: row => row.role.name,
},
  {
      name: 'Action',
      center: true,
      cell: (row) => (
          <div>
              {/* <Permission type={["member.edit"]}> */}
                  <Link
                      className="text-success me-2"
                      to={'/editUser'}
                      state={row}
                  >
                       <i className="fas fa-pencil-alt"></i>
                  </Link>
              {/* </Permission> */}
              {/* <Permission type={["member.delete"]}> */}
                  <Link
                      className="me-2 text-danger"
                      onClick={() => handleDelete(row.user_id)}
                  >
                       <i className="fas fa-trash"style={{color:'red'}}></i>
                  </Link>
              {/* </Permission> */}
          </div>
      ),
  },
];


  return (

    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="card-title">USERS</h4>
            <Link to="/createUser">
              <button type="button" className="btn btn-primary waves-effect waves-light " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add User +
              </button>
            </Link>
          </div>
          <div className="card-body table-responsive">
            <CustomDataTable
                dataRows={userList}
                columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

users.propTypes = {}

export default users
