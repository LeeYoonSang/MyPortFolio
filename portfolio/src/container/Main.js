import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import HeaderContainer from './HeaderContainer';
import MobileHeaderContainer from './MobileHeaderContainer';
import MainTemplate from 'component/MainTemplate';
import Sidebar from 'component/SideBar';

class Main extends Component {
    render() {
        return (
            <MainTemplate sidebar={<Sidebar/>}>
            <HeaderContainer/>
            <MobileHeaderContainer/>
            </MainTemplate>
        );
    }
}

export default Main;