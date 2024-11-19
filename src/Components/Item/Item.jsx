import { useState } from 'react';
import './Item.css'

export  default function Item() {

    const [item, setItem] = useState('');

  return (
    <div className='item-container'>
      <img src={item}></img>
    </div>
  );
};