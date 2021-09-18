import React from 'react';

const Buttons = ({onClick,title,color}) => {
    return (
        <button className={`callback d-block ms-auto bg-${color} `}
                onClick={ onClick}>
            {title}
        </button>
    );
};

export default Buttons;