import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MobileHeader from 'component/MobileHeader';

class MobileHeaderContainer extends Component {
    render() {
        const { match } = this.props;
        return (
            <MobileHeader url={ match.url }/>
        );
    }
}

export default withRouter(MobileHeaderContainer);