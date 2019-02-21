import React from 'react';
import './HomeTemplate.scss';

const HomeTemplate = ({ header, children }) => {
    return (
        <div className="HomeTemplate">
            {header}
            <main>
                {children}
            </main>
        </div>
    );
};

export default HomeTemplate;