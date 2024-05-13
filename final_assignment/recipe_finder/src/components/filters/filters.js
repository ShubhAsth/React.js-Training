import React, { useState } from 'react';
import CuisineFilter from './cuisineFilter';

function Filters() {
    return (
        <div className="bg-gradient-to-r from-white-800 to-white-600 h-full w-1/6">
            <div className="mb-4">
                <CuisineFilter/>
            </div>
        </div>
    );
}

export default Filters;
