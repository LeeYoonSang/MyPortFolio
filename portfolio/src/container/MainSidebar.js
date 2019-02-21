import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Sidebar from 'component/SideBar';

class MainSidebar extends Component {
    render() {
        const { match } = this.props;
        return (
            <Sidebar url={this.props.match.url}/>
        );
    }
}

export default withRouter(MainSidebar);