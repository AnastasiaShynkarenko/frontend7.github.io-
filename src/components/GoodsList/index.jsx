import React from 'react';
import './style.css';
import { GoodsCard } from '../GoodsCard';

const goodsList = [
  {
    imgSrc: "/apple.jpg",
    title: "Яблуко",
    price: "10 грн"
  },
  {
    imgSrc: "/pear.jpg",
    title: "Груша",
    price: "10 грн"
  },
  {
    imgSrc: "/orange.jpg",
    title: "Апельсин",
    price: "15 грн"
  },
  {
    imgSrc: "/banana.jpg",
    title: "Банан ",
    price: "15грн"
  },
  {
    imgSrc: "/cherry.jpg",
    title: "Вишня",
    price: " 30 грн"
  },
  {
    imgSrc: "/watermelon.jpg",
    title: "Кавун",
    price: "25грн"
  },
]

export const GoodsList = () => {
  return (
    <div className='goods-list'>
    {goodsList.map((card)=>(
      <GoodsCard imgSrc={card.imgSrc} title={card.title} price={card.price} key={card.title}/>
    ))}
    </div>
  )
}
