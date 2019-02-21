import React from 'react';
import './PageTemplate.scss';

const PageTemplate = ({ children }) => {
    return (
        <div className="PageTemplate">
            {children}
        </div>
    );
};

export default PageTemplate;