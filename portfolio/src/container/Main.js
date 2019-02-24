import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import HeaderContainer from './HeaderContainer';
import MobileHeaderContainer from './MobileHeaderContainer';
import MainTemplate from 'component/MainTemplate';
import MainSidebar from './MainSidebar';
import { Project, about } from 'pages';

class Main extends Component {
    render() {
        return (
            <MainTemplate sidebar={<MainSidebar/>}>
            <HeaderContainer/>
            <MobileHeaderContainer/>
            <Switch>
                <Route path="/(|about)" component={about}/>
                <Route path="/project" component={Project}/>
            </Switch>
            </MainTemplate>
        );
    }
}

export default withRouter(Main);