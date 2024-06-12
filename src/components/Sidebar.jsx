import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Sidebar(props) {
  const is_admin = useSelector((state) => state?.user?.user?.user?.is_admin) ?? false;
  const dispatch = useDispatch();
  // console.log(is_admin);
  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/*- Sidemenu */}
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title" data-key="t-menu"></li>

              <li>
                <Link to={"/dashboard"}>
                  <i data-feather="home" />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li data-key="user_manage">
                <a href="#" className="has-arrow">
                  <i className="fas fa-users-cog" />
                  <span>User Manage</span>
                </a>

                <ul className="sub-menu" aria-expanded="false">
                  <li data-key="user">
                    <Link to={"/user"}>
                      <i className="fas fa-user" />
                      <span>User</span>
                    </Link>
                  </li>
                  <li data-key="role">
                    <Link to={"/role"}>
                      <i className="fab fa-critical-role" />
                      <span>Role</span>
                    </Link>
                  </li>
                  <li data-key="permission">
                    <Link to={"/permission"}>
                      <i className="fas fa-table" />
                      <span>Permission</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/customer"}>
                  <i className="fas fa-users" />
                  <span>Customer</span>
                </Link>
              </li>

              <li>
                <a href="#" className="has-arrow" data-key="exam_date">
                  <i className=" far fa-calendar-alt" />
                  <span>Exam Date</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to={"/exam-date"}>
                      <i className=" far fa-calendar-alt" />
                      <span>Exam Date</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/trial-date"}>
                      <i className=" far fa-calendar-check" />
                      <span>TrialDate</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="has-arrow" data-key="Book">
                  <i className="fas fa-book" />
                  <span>Book</span>
                </a>

                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to={"/filterExamBook"}>
                      <i className="fas fa-book" />
                      <span>Exam Book</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/filterLPBook"}>
                      <i className="fas fa-book-open" />
                      <span>LP Book</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="has-arrow" data-key="t-level-1-2">
                  <i className="fas fa-shuttle-van" />
                  <span>Re Attempt</span>
                </a>

                <ul className="sub-menu" aria-expanded="true">
                  <li>
                    <Link to={"/filterReTrial"}>
                      <i className="fas fa-shuttle-van" />
                      <span>Re Trial</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/filterReExam"}>
                      <i className="fas fa-book" />
                      <span>Re Exam</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/filterReExam"}>
                      <i className="fas fa-book" />
                      <span>Oral Exam</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li data-key="vehicle_class">
                <Link to={"/vehicleClass"}>
                  <i className="fas fa-caravan" />
                  <span>Vehicle Class</span>
                </Link>
              </li>
              <li data-key="payments">
                <Link to={"/payments"}>
                  <i className="fas fa-comment-dollar" />
                  <span>Payments</span>
                </Link>
              </li>

              {/* 
                 <li>
                  <Link to={"/service"}>
                    <i className=" fas fa-puzzle-piece" />
                    <span>Service</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/order"}>
                    <i className="fas fa-cart-plus" />
                    <span>Order</span>
                  </Link>
                </li>
                
                <li>
                    <Link to={"/salary"} >
                        <i className="fas fa-money-bill-alt" />
                        <span>Salary</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/coupon"} >
                        <i className="fas fa-layer-group" />
                        <span>Coupon</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/setting"} >
                        <i className="fas fa-cogs" />
                        <span>Setting</span>
                    </Link>
                </li> */}
            </ul>
          </div>
          {/* Sidebar */}
        </div>
      </div>
    </>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
