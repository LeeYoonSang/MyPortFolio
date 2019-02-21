import React from 'react';
import styles from './MenuItem.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MenuItem = ({ text, to, active }) => {
    return (
        <li className={cx('MenuItem',{ active })}>
            <Link to={to}>
            <div className="text">{text}</div>
            </Link>
        </li>
    );
};

export default MenuItem;