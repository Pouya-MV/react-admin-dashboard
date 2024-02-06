import React from 'react'
import './ProductStat.css'

export default function ProductStat({ id, image, productName, inventory, sale, active }) {
    return (
        <>
            <div className="product-stat-top">
                <img src={"../" + image} alt="product" />
                <p>{productName}</p>
            </div>
            <div className="product-stat-info-box">
                <p className="product-stat-info">id: <span>{id}</span></p>
                <p className="product-stat-info">sale: <span>{sale}</span></p>
                <p className="product-stat-info">inventory: <span>{inventory}</span></p>
                <p className="product-stat-info">active: <span>{active}</span></p>
            </div>
        </>
    )
}
