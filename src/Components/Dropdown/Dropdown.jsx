import './Dropdown.css';
import { useState } from 'react';
import data from '../../assets/data.json';

export default function Dropdown({ sendProduct }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectedOption = (e) => {
        const selectedName = e.target.value;
        document.querySelector('.next-button').click();
        const selectedProduct = data.find(o => o.name === selectedName);
        setSelectedOption(selectedProduct);
        sendProduct(selectedProduct);
    };

    return (
        <select
            id="dropdown"
            value={selectedOption ? selectedOption.name : ''}
            onChange={handleSelectedOption}
        >
            <option value="" disabled>Select Item ▼</option>
            {data.map(d => (
                <option key={d.name} value={d.name}>
                    {d.name}
                </option>
            ))}
        </select>
    );
};