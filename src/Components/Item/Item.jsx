import { useState } from 'react';
import './Item.css';
import data from '../../assets/data.json';

export default function Item() {

    let randomNum = Math.floor(Math.random() * data.length);
    const [item, setItem] = useState(data[Math.floor(Math.random() * data.length)]);

    const handleItem = () => {
        randomNum = Math.floor(Math.random() * data.length);
        setItem(data[randomNum]);
    };

    return (
        <div className='item-container'>
            <h2>{item.name}</h2>
            <a href={item.shop} target='_blank'><img src={item.url}></img></a>
            <button onClick={handleItem}>New Item</button>
        </div>
    );
};