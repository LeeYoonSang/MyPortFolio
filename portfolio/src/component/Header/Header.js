import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="main-head">
                <Link to="/" className="mobile-logo">
                    PortFolio
                </Link>
        </div>
    );
};

export default Header;