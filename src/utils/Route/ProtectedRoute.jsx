import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import { ACCOUNT_TYPE } from '../helper';
import { setLogout, setUserAccountType, setUserData } from '../../Redux/Slice/slice';

function ProtectedRoute({ children, type }) {
    const user = useSelector((state) => state.user);
    const location = useLocation();

    const dispatch = useDispatch()

    // console.log(type,
    //     user?.user?.user?.is_admin,
    //     user?.user?.user?.is_agent,
    //     user?.user?.user?.is_moderator,
    // );


    if (!user?.user && !type) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (user?.user?.user?.is_admin && (type?.includes(ACCOUNT_TYPE.ADMIN) || type?.includes(ACCOUNT_TYPE.ALL))) {
        return children;
    }

    if (user?.user?.user?.is_agent && (type?.includes(ACCOUNT_TYPE.AGENT) || type?.includes(ACCOUNT_TYPE.ALL))) {
        return children;
    }

    if (user?.user?.user?.is_moderator && (type?.includes(ACCOUNT_TYPE.MODERATOR) || type?.includes(ACCOUNT_TYPE.ALL))) {
        return children;
    }

    dispatch(setLogout())
    dispatch(setUserAccountType(undefined))

    return <Navigate to="/no-access" state={{ from: location }} replace />;
    // return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
    type: PropTypes.array,
}

export default ProtectedRoute;