import React from 'react';
import './style.css';

export const GoodsCard = ({title, imgSrc, price}) => {
  return (
    <div className='goods-card'>
        <img  src={imgSrc} className='goods-card__image' alt='goods'/>
        <div className='goods-card__title'>{title}</div>
        <div className='goods-card__price'>{price}</div>
    </div>
  )
}
