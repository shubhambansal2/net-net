import React from 'react';

const SmallBanner = ({ color, title, description }) => {
    return (
        <div className={`h-[20rem] w-full flex items-center justify-center bg-${color}`}>
            <div className="text-white text-center">
                <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
                <p className="mt-4">{description}</p>
            </div>
        </div>
    );
};

export default SmallBanner;