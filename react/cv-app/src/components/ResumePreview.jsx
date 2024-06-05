//import { useState } from 'react';
import PropTypes from 'prop-types';

export const ResumePreview = ({ children }) => {

    return (
        <div id='resume' className="bg-white col-span-2 p-5 m-auto aspect-[1/1.5] shadow-2xl h-5/6">
            {children}
        </div>
    )
}

ResumePreview.propTypes = {
    children: PropTypes.array,
}
