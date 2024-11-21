import { useState, useRef } from 'react';
import './Item.css';
import data from '../../assets/data.json';
import arrow_icon from '../../assets/arrow-icon.svg'

export default function Item() {
    const priceTextRef = useRef(null);
    const nextTextRef = useRef(null);

    const [item, setItem] = useState(data[Math.floor(Math.random() * data.length)]);

    const handleItem = () => {
        const randomNum = Math.floor(Math.random() * data.length);
        setItem(data[randomNum]);

        if (priceTextRef.current) {
            priceTextRef.current.innerText = "$$$";
        };
    };

    const handlePrice = () => {
        if (priceTextRef.current) {
            priceTextRef.current.innerText = `$${item.price}`;
        };
    };

    const handleMouseOver = () => {
        if (nextTextRef.current) {
            nextTextRef.current.classList.remove('hidden');
            nextTextRef.current.classList.add('animate__flipInY');
        };
    };

    const handleMouseOut = () => {
        if (nextTextRef.current) {
            nextTextRef.current.classList.add('hidden');
            nextTextRef.current.classList.remove('animate__flipInY');
        };
    };

    return (
        <div className='item-container'>
            <h2>{item.name}</h2>
            <div className='data-container'>
                <img className='item-photo' src={`../../src/assets/photos/${item.name}.jpg`} alt={item.name}></img>
                <div className="info-container">
                    <div className="button-container">
                        <img
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className='next-button'
                            src={arrow_icon}
                            onClick={handleItem}
                            alt="Next item"
                        ></img>
                        <p
                            className='animate__animated next-text hidden'
                            ref={nextTextRef}
                        >Next...</p>
                    </div>
                    <p
                        className='price-text'
                        onClick={handlePrice}
                        ref={priceTextRef}
                    >$$$</p>
                </div>
            </div>
        </div>
    );
};