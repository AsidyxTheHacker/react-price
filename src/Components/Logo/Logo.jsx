import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Logo.css';

export default function Logo({ parentProduct }) {
    const [getProduct, setGetProduct] = useState(null);

    const handleProduct = (item) => {
        setGetProduct(item);
    };

    useEffect(() => {
        if (getProduct) {
            parentProduct(getProduct);
        }
    }, [getProduct, parentProduct]);

    return (
        <div className='logo-container'>
            <img
                className="logo"
                src="../../src/assets/logo.png"
                alt="Logo"
            />
            <Dropdown sendProduct={handleProduct} />
        </div>
    );
};