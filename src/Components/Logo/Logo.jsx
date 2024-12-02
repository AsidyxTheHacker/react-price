import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Logo.css';

export default function Logo({ parentProduct, handleItem }) {
    const [getProduct, setGetProduct] = useState(null);

    const handleProduct = (item) => {
        setGetProduct(item);
    };

    useEffect(() => {
        parentProduct(getProduct);
        if (handleItem) {
            handleItem();  // Ensure the function runs when getProduct changes
        }
    }, [getProduct, parentProduct, handleItem]);

    return (
        <div className='logo-container'>
            <img
                className="logo"
                src="../../src/assets/logo.png"
                alt="Logo"
            />
            <Dropdown sendProduct={handleProduct} handleItem={handleItem} />
        </div>
    );
};