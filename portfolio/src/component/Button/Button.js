import React from 'react';
import './Button.scss';

import Next from 'react-icons/lib/ti/arrow-forward';
import Prev from 'react-icons/lib/ti/arrow-back';

const Button = ({name, onclick, disable}) => {
    let icon;
    if(name === 'next'){
        icon = <Next/>;
    }
    else if(name === 'prev'){
        icon = <Prev/>
    }
    return (
        <div>
            <button className="button" onClick={onclick} disabled={disable}>{icon}</button>
        </div>
    );
};
export default Button;