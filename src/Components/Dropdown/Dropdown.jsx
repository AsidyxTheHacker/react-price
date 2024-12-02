import './Dropdown.css';
import { useState } from 'react';
import data from '../../assets/data.json';

export default function Dropdown({ sendProduct, handleItem }) {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectedOption = (e) => {
        const selectedName = e.target.value;
        console.log("Selected Name:", selectedName);
    
        const selectedProduct = data.find(o => o.name === selectedName);
        console.log("Selected Product:", selectedProduct);
    
        setSelectedOption(selectedProduct);
        sendProduct(selectedProduct);
    
        // Ensure handleItem is called
        if (handleItem) {
            console.log("handleItem function is being called from Dropdown");
            handleItem();  // Call the function passed from Logo
        } else {
            console.log("handleItem is not available in Dropdown");
        }
    };

    return (
        <>
            <select
                id="dropdown"
                value={selectedOption ? selectedOption.name : ''}
                onChange={handleSelectedOption}
            >
                <option value="" disabled>Select Item</option>
                {data.map(d => (
                    <option key={d.name} value={d.name}>
                        {d.name}
                    </option>
                ))}
            </select>
        </>
    );
};