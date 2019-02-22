import React, { Component } from 'react';
import './MobileHeader.scss';
import MobileHeadItem from 'component/MobileHeadItem';

class MobileHeader extends Component {
    render() {
        const { url } = this.props;
        return (
            <div className="MobileHeader">
            <MobileHeadItem
            active={url==='/about'} to="/about" name="about"/>
            <MobileHeadItem active={url==='/project'} to="/project" name="project"/>
                
            </div>
        );
    }
}

export default MobileHeader;