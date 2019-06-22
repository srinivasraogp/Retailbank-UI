import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    return (
        <div><h2>Successfully Logout!!, Click here to <Link to="/login">Login Here</Link></h2></div>
    )
}

export default Logout;