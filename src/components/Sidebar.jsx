import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';



function Sidebar(props) {
    const is_admin = useSelector((state) => state?.user?.user?.user?.is_admin) ?? false;
    const dispatch = useDispatch()
    console.log(is_admin);
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
                                <Link to={"/dashboard"} >
                                    <i data-feather="home" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/user"} >
                                    <i className="fas fa-user" />
                                    <span>User</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/permission"} >
                                    <i className="fas fa-table" />
                                    <span>Permission</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/role"} >
                                    <i className="fab fa-critical-role" />
                                    <span>Role</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/service"} >
                                    <i className=" fas fa-puzzle-piece" />
                                    <span>Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/order"} >
                                    <i className="fas fa-cart-plus" />
                                    <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/customerList"} >
                                    <i className="fas fa-users" />
                                    <span>Customer</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/vehicleClass"} >
                                    <i className="fas fa-caravan" />
                                    <span>Vehicle</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/payments"} >
                                    <i className="fas fa-comment-dollar" />
                                    <span>Payments</span>
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
                            </li>
                        </ul>
                    </div>
                    {/* Sidebar */}
                </div>
            </div>
        </>
    )
}

Sidebar.propTypes = {}

export default Sidebar
