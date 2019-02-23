import React from 'react';

const Button = ({name, onclick, disable}) => {
    return (
        <div>
            <button onClick={onclick} disabled={disable}>{name}</button>
        </div>
    );
};
export default Button;