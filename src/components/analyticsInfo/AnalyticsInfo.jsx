import React, { useState } from 'react'
import './AnalyticsInfo.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function AnalyticsInfo({ title, num1, num2, calsname, icon1, icon2 }) {
    return (
        <>
            <div className="analytics-info-box">
                <div className="analytics-info-left">
                    <div className="analytics-icon-box">
                        {icon1}
                    </div>
                    <div className="analytics-txt">
                        <p className="analytics-title">{title}</p>
                        <p className={calsname}>{num1}<span> {icon2} {num2} </span></p>
                    </div>
                </div>
                <MoreVertIcon className='analytics-dot-icon' />
            </div>
        </>
    )
}
