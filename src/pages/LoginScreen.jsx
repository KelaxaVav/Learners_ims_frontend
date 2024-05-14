import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useLocalStorage } from '@uidotdev/usehooks';
import { useDispatch } from 'react-redux';
import { setUserAccountType, setUserData } from '../Redux/Slice/slice';
import req from '../utils/req';
import { baseUrl } from '../services/api';
import { getUserAccountAccessType } from '../utils/helper';

// interface ILogin {
//     username: string,
//     password: string,
//     is_reminder: boolean,
// }
function LoginScreen(props) {
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordField = () => {
        console.log("before", isShowPassword);
        setIsShowPassword((per) => !per)
        console.log("after", isShowPassword);

    }
    const onSubmit = (data) => {
        setIsLoading(true);
        req().post(`/auth/login`, data).then((loginData) => {
            // console.log("axios: ", user);
            if (loginData.data.status) {
                // navigation("/dashboard");
                dispatch(setUserData(loginData.data.data))
                dispatch(setUserAccountType(getUserAccountAccessType(loginData)))
            } else {
                // login failed
                console.log("axios error: ", loginData?.data?.meta?.message);
            }
        }).catch((err) => {
            console.log("axios error: ", err);
        }).finally(() => setIsLoading(false))


        // if (data.username == "admin" && data.password == "admin@123") {
        //     console.log(data)
        //     // window.sessionStorage.setItem("user", data.username);
        // }
        // else {
        //     alert('Invalid Username or Password');
        // }
    }
    return (
        <>
            <div className="auth-page">
                <div className="container-fluid p-0">
                    <div className="row g-0 d-flex justify-content-center">
                        <div className="col-md-5">
                            <div className="auth-full-page-content d-flex p-sm-5 p-4">
                                <div className="w-100">
                                    <div className="d-flex flex-column h-100">
                                        <div className="mb-4 mb-md-5 text-center">
                                            <Link to={"/"}>
                                                <span className="d-block auth-logo"><img src="assets/images/logo-sm.svg" height={28} /> <span className="logo-txt">TMS</span></span>
                                            </Link>
                                        </div>
                                        <div className="auth-content my-auto">
                                            <div className="text-center">
                                                <h5 className="mb-0">Welcome Back !</h5>
                                                <p className="text-muted mt-2">Sign in to continue to TMS.</p>
                                            </div>
                                            <form className="mt-4 pt-2" onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mb-3">
                                                    <label className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter username" {...register("username", { required: true })} />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-grow-1">
                                                            <label className="form-label">Password</label>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div>
                                                                <Link to={"/forgot-password"}>
                                                                    <span className="text-muted">Forgot password?</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input-group auth-pass-inputgroup">
                                                        <input type={isShowPassword ? "text" : "password"} className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon" {...register("password", { required: true })} />
                                                        <button className="btn btn-light shadow-none ms-0" type="button" id="password-addon" onClick={togglePasswordField}><i className={isShowPassword ? "mdi mdi-eye-off-outline" : "mdi mdi-eye-outline"} /></button>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="remember-check" {...register("is_reminder")} />
                                                            <label className="form-check-label" htmlFor="remember-check">
                                                                Remember me
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="mb-3">
                                                    {!isLoading && <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Log In</button>
                                                    }
                                                    {isLoading && <button disabled className="btn btn-primary w-100 waves-effect waves-light">Loading ...</button>}
                                                </div> */}
                                                 <div className="mb-3">
                                                    <Link to={"/dashboard"}
                                               className="btn btn-primary w-100 waves-effect waves-light" type="submit">Log In
                                                  </Link>
                                                    
                                                </div>
                                            </form>
                                            {/* <div className="mt-4 pt-2 text-center">
                                                <div className="signin-other-title">
                                                    <h5 className="font-size-14 mb-3 text-muted fw-medium">- Sign in with -</h5>
                                                </div>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="#" className="social-list-item bg-primary text-white border-primary">
                                                            <i className="mdi mdi-facebook" />
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="social-list-item bg-info text-white border-info">
                                                            <i className="mdi mdi-twitter" />
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="social-list-item bg-danger text-white border-danger">
                                                            <i className="mdi mdi-google" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                            {/* <div className="mt-5 text-center">
                                        <p className="text-muted mb-0">Don't have an account ? <a href="auth-register.html" className="text-primary fw-semibold"> Signup now </a> </p>
                                    </div> */}
                                        </div>
                                        <div className="mt-4 mt-md-5 text-center">
                                            <p className="mb-0">©  Transaction Management System . <i className="mdi mdi-heart text-danger" /> by Lirojan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end auth full page content */}
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container fluid */}
            </div>

        </>
    )
}

LoginScreen.propTypes = {}

export default LoginScreen
