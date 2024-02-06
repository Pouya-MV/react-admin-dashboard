import React from 'react'
import './MainTop.css'
import IosShareIcon from '@mui/icons-material/IosShare';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function MainTop() {
    return (
        <>
            <div className="main-top-date">
                <h3 className="top-title">Overview</h3>
                <p className="top-date">Wed, 22 March 2023</p>
            </div>
            <button className="main-top-btn">
                <IosShareIcon className='top-btn-icon' />
                Exports
                <KeyboardArrowDownIcon className='top-btn-icon' />
            </button>
        </>
    )
}
