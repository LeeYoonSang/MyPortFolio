import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

import MenuItem from 'component/MenuItem';
import User_icon from 'react-icons/lib/ti/user';
import Project_icon from 'react-icons/lib/ti/book';

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
                        icon={<User_icon />}
                        text="about"
                        to="/about"
                        active={['/', '/about'].indexOf(url) > -1} />
                    <MenuItem
                        icon={<Project_icon />}
                        text="project"
                        to="/project"
                        active={url === '/project'} />
                </ul>
            </aside>
        );
    }
}

export default SideBar;