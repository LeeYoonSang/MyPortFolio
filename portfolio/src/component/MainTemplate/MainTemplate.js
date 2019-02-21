import React from 'react';
import './MainTemplate.scss';

const MainTemplate = ({ children, sidebar }) => {
    return (
        <div className="MainTemplate">
            {sidebar}
            {children}
        </div>
    );
};

export default MainTemplate;