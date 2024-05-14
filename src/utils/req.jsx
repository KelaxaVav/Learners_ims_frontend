import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../Redux/Slice/slice";
import { baseUrl } from "../services/api";

let store;

export const injectStore = _store => {
    store = _store
}


axios.interceptors.request.use(
    config => {
        const userData = store?.user;
        const tokenKey = userData?.user.access_token;
        if (tokenKey) {
            config.headers['Authorization'] = 'Bearer ' + tokenKey
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        // const dispatch = useDispatch()
        if (error.response.status === 401 || error.response.status === 403) {
            // dispatch(setLogout())
            window.localStorage.clear("persist:root");
            Navigate({ to: "/" });

        }
    }
    return Promise.reject(error);
});

export default function req() {
    return axios.create({
        baseURL: baseUrl,
        // headers: {
        //     Accept: 'application/json',
        //     'Content-type': 'application/json',
        // },
    });
}