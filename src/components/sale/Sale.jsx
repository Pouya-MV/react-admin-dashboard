import React from 'react'
import './Sale.css'

export default function Sale({price,caption,description,classname,saleIcon,descIcon}) {
    return (
        <>
            <div className="main-sale-info">
                <div className="sale-price">
                    <div className={classname}>
                        {saleIcon}
                    </div>
                    <p className="price-txt">{price}</p>
                </div>
                <p className="sale-caption">{caption}</p>
                <div className="sale-disc-box">
                    {descIcon}
                    <p className="sale-disc">{description}</p>
                </div>
            </div>
        </>
    )
}
