import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";

function GestRoute({ children }) {
    const user = useSelector((state) => state.user);
    const location = useLocation();

    if (user?.user) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }
    return children;
}

GestRoute.propTypes = {
    children: PropTypes.node,
}

export default GestRoute;