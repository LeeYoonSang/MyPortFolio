import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SideBar.scss';

class SideBar extends Component {
    render() {
        const { url } = this.props;
        return (
            <aside className="Sidebar">
                <Link to="/" className="logo">
                    PortFolio
                </Link>
                <ul className="menu">
                    <li>menu</li>
                </ul>
            </aside>
        );
    }
}

export default SideBar;