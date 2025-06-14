import React from 'react';

const PageHeader = ({ title, subtitle }) => ( 
    <div className="mb-6"> 
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">{title}</h1> 
        {subtitle && <p className="text-base text-gray-500 mt-2">{subtitle}</p>} 
    </div>
);

export default PageHeader;