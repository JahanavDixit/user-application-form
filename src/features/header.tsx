import React from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <Link to="/"> User Information Form </Link>
        </div>
    );

}

export default Header;