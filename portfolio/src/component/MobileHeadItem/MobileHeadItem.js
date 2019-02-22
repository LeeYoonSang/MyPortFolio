import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './MobileHeadItem.scss';

const MobileHeadItem = ({ to, name, active}) => {
    return (
        <Link
        to={to} className={cx('MobileHeadItem', {active})}>
        <div className="item-name">{name}</div>
        </Link>
    );
};

export default MobileHeadItem;