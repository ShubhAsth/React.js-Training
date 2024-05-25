import React from 'react';
import LoadingFoodGIF from '../recources/images/LoadingFoodGIF.gif'

const Loading = () => {
    return (
        <div className="relative">
            <div className="fixed left-[40%] top-[28%]">
                <img src={LoadingFoodGIF} alt="Loading..."/>
            </div>
        </div>
    );
};

export default Loading;
