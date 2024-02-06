import React from 'react'
import './ProductInfo.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


export default function ProductInfo({ image, productName, price, status, statusClass }) {
    return (
        <>
            <div className="product-detail-img">
                <img src={"../" + image} alt="product" />
            </div>
            <div className="product-detail-info">
                <p className="product-detail-name">{productName}</p>
                <div className="product-detail-like">
                    <p>86% cutomer satisfaction</p>
                    <ThumbUpOffAltIcon className='product-detail-like-icon' />
                </div>
                <div className="product-detail-color">
                    <p>color:</p>
                    <div>
                        <div className="product-detail-color1"></div>
                        <div className="product-detail-color2"></div>
                        <div className="product-detail-color3"></div>
                    </div>
                </div>
                <p className="product-desc-lable">description:</p>
                <p className="product-detail-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis Morbi tristique senectus et netus Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien faucibus et molestie ac feugiat sed lectus vestibulum Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget</p>
                <p className="product-detail-price">{price}</p>
                <p className={statusClass}>status: {status}</p>
            </div>
        </>
    )
}
