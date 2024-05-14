import React from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { setLogout, setUserAccountType } from '../Redux/Slice/slice'
import { useDispatch, useSelector } from 'react-redux';

function Header(props) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const logout = (e) => {
        e.preventDefault();
        dispatch(setLogout())
        dispatch(setUserAccountType(undefined))

        navigation("/");
    }
    // console.log(user.user.user.full_name);

    return (
        <>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* LOGO */}
                        <div className="navbar-brand-box">
                            <Link to={"/"} className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.svg" height={24} />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-sm.svg" height={24} /> <span className="logo-txt">Service App </span>
                                </span>
                            </Link>
                            <Link to={"/"} className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.svg" height={24} />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-sm.svg" height={24} /> <span className="logo-txt">Service </span>
                                </span>
                            </Link>
                        </div>
                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars" />
                        </button>

                    </div>
                    <div className="d-flex">
                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" className="btn header-item" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="search" className="icon-lg" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Search Result" />
                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="dropdown d-none d-sm-inline-block">
                            <button type="button" className="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height={16} />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* item*/}
                                <a href="#" className="dropdown-item notify-item language" data-lang="en">
                                    <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">English</span>
                                </a>
                                {/* item*/}
                                <a href="#" className="dropdown-item notify-item language" data-lang="sp">
                                    <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
                                </a>
                                {/* item*/}
                                <a href="#" className="dropdown-item notify-item language" data-lang="gr">
                                    <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
                                </a>
                                {/* item*/}
                                <a href="#" className="dropdown-item notify-item language" data-lang="it">
                                    <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
                                </a>
                                {/* item*/}
                                <a href="#" className="dropdown-item notify-item language" data-lang="ru">
                                    <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
                                </a>
                            </div>
                        </div>
                        <div className="dropdown d-none d-sm-inline-block">
                            <button type="button" className="btn header-item" id="mode-setting-btn">
                                <i data-feather="moon" className="icon-lg layout-mode-dark" />
                                <i data-feather="sun" className="icon-lg layout-mode-light" />
                            </button>
                        </div>
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item right-bar-toggle me-2">
                                <i data-feather="settings" className="icon-lg" />
                            </button>
                        </div>
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item topbar-light bg-light-subtle border-start border-end" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                                <span className="d-none d-xl-inline-block ms-1 fw-medium">{user?.user?.user?.full_name ?? "Gest"}</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* item*/}
                                <Link to={'/profile'} className="dropdown-item" ><i className="mdi mdi-face-man font-size-16 align-middle me-1" /> Profile</Link>
                                <Link to={'/lockscreen'} className="dropdown-item" ><i className="mdi mdi-lock font-size-16 align-middle me-1" /> Lock Screen</Link>
                                <div className="dropdown-divider" />
                                <button onClick={logout} className="dropdown-item" ><i className="mdi mdi-logout font-size-16 align-middle me-1" /> Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

Header.propTypes = {}

export default Header
