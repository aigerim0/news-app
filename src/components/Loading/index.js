import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="spinner-border text-dark isloading" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;