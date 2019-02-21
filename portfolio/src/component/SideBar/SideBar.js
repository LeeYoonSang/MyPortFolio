import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

import MenuItem from 'component/MenuItem';

class SideBar extends Component {
    render() {
        const { url } = this.props;
        return (
            <aside className="Sidebar">
                <Link to="/" className="logo">
                    PortFolio
                </Link>
                <ul className="menu">
                    <MenuItem
                        text="about"
                        to="/about"
                        active={url === '/about'} />
                    <MenuItem
                        text="project"
                        to="/project"
                        active={url === '/project'} />
                </ul>
            </aside>
        );
    }
}

export default SideBar;