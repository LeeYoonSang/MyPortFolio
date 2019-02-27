import React from 'react';
import './Button.scss';


const Button = ({icon, onclick, disable}) => {
    return (
        <div>
            <button 
            className="button" 
            onClick={onclick} 
            disabled={disable}>{icon}</button>
        </div>
    );
};
export default Button;