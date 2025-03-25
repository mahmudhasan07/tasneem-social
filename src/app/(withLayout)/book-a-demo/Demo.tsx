'use client'
import React from 'react';
import DemoPart1 from './DemoPart1';
import DemoPart2 from './DemoPart2';

const Demo = () => {
    return (
        <div className=' flex lg:flex-nowrap  justify-center flex-wrap gap-6'>
            <DemoPart1 />
            <DemoPart2 />
        </div>
    );
};

export default Demo;