import React from 'react'
import './Costumer.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Costumer() {
  return (
    <>
      <div className="main-costumer-top">
        <div className="costumer-top-title">
          <p className="costumer-top-title__txt">Reached Costumers</p>
          <p className="costumer-top-title__num">52,345,123</p>
        </div>
        <MoreVertIcon className='costumer-icon' />
      </div>
      <div className="main-costumer-circle">
        <div className="main-costumer-circle1">
          <p className="costumer-circle-media">E-Commerce</p>
          <p className="costumer-circle-num">35,346,89</p>
        </div>
        <div className="main-costumer-circle2">
        <p className="costumer-circle-media">instagram</p>
          <p className="costumer-circle-num">13,980,76</p>
        </div>
        <div className="main-costumer-circle3">
        <p className="costumer-circle-media">Other</p>
          <p className="costumer-circle-num">7,180,16</p>
        </div>
      </div>
    </>
  )
}

