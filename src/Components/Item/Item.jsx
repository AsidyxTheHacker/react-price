import { useState, useRef, useEffect } from 'react';
import './Item.css';
import data from '../../assets/data.json';
import arrow_icon from '../../assets/arrow-icon.svg';

export default function Item({ getParentProduct }) {
    const priceSfxRef = useRef(null);
    const priceTextRef = useRef(null);
    const nextTextRef = useRef(null);
    const descTextRef = useRef(null);
    const buttonContainerRef = useRef(null);

    const [item, setItem] = useState(data[Math.floor(Math.random() * data.length)]);

    useEffect(() => {
        if (getParentProduct) {
            setItem(getParentProduct);
        }
    }, [getParentProduct]);

    const handleItem = () => {
    const randomNum = Math.floor(Math.random() * data.length);
    setItem(data[randomNum]);

    if (priceSfxRef.current) {
        priceSfxRef.current.currentTime = 4;
    };

    if (priceTextRef.current) {
        priceTextRef.current.innerText = "$$$";
        priceTextRef.current.classList.remove('animate__tada');
    };

    if (buttonContainerRef.current) {
        buttonContainerRef.current.style.zIndex = '-1';
    };
};

    const handlePrice = () => {
        if (priceTextRef.current) {
            if (priceTextRef.current.innerText === "$$$") {
                if (priceSfxRef.current) {
                    priceSfxRef.current.play();
                };
            };

            priceTextRef.current.innerText = `$${item.price}`;
            priceTextRef.current.classList.add('animate__tada');
        };

        if (buttonContainerRef.current) {
            buttonContainerRef.current.style.zIndex = '1';
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
                <img 
                    className='item-photo' 
                    src={`../../src/assets/photos/${item.name}.jpg`} 
                    alt={item.name}
                />
                <div className="info-container">
                    <div className="button-container" ref={buttonContainerRef}>
                        <img
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className='next-button'
                            src={arrow_icon}
                            onClick={handleItem}
                            alt="Next item"
                        />
                        <p
                            className='animate__animated next-text hidden'
                            ref={nextTextRef}
                        >Next...</p>
                    </div>
                    <p
                        className='animate__animated price-text'
                        onClick={handlePrice}
                        ref={priceTextRef}
                    >$$$</p>
                    <p
                        className='desc-text'
                        ref={descTextRef}
                    >{item.desc}</p>
                </div>
            </div>
            <audio ref={priceSfxRef} className="price-audio">
                <source src="../../src/assets/price-sfx.mp3" type="audio/mp3" />
            </audio>
        </div>
    );
};