import React, { useState } from 'react';

export default function Sidebar() {
    const [wt, setwt] = useState(true);
    const [br, setbr] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCategoriesbr, setSelectedCategoriesbr] = useState([]);

    const weightCategories = ['100gm', '1 Litre', '500ml', '1kg', '500gm', '700gm', '350gm', '200gm', '5kg', '10kg'];
    const brandCategories = ['Momma Foods'];

    // Function to handle checkbox selection
    const handleCheckboxChange = (category) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter(item => item !== category) // Uncheck
                : [...prevSelected, category] // Check
        );
    };

    const handleCheckboxChangeBr = (category) => {
        setSelectedCategoriesbr((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter(item => item !== category) // Uncheck
                : [...prevSelected, category] // Check
        );
    };

    return (
        <>
            <div className='w-96 p-4 '> {/* Increased width to 80 (20rem) */}
                <div className='flex justify-between items-center gap-10'>
                    {/* Filter and Clean All Buttons */}
                    <div className='h-12 w-28 flex justify-center items-center text-red-500 rounded p-2 text-md bg-white border border-red-500 hover:bg-red-500 hover:text-white transition'>
                        FILTER
                    </div>
                    <div className='text-md hover:text-red-500'>
                        Clean All
                    </div>
                </div>
                {/* Grey Line */}
                <div className='bg-gray-400 h-1 w-full max-w-7xl mx-auto mt-2'></div>
                
                {/* Weight Category List */}
                <div className='mt-5 flex justify-between'>
                    <h1 className='text-2xl font-bold'>Weight</h1>
                    <button onClick={() => setwt(!wt)} className='text-2xl font-bold'>{wt ? "-" : "+"}</button>
                </div>
                
                {/* Conditionally render checkboxes when wt is true */}
                {wt && (
                    <div className='mt-5'>
                        <div className='mt-3'>
                            {weightCategories.map((category, index) => (
                                <div key={index}>
                                    <div className='flex items-center'>
                                        <input
                                            type="checkbox"
                                            id={category}
                                            name={category}
                                            value={category}
                                            checked={selectedCategories.includes(category)} 
                                            onChange={() => handleCheckboxChange(category)} 
                                            className='m-2 h-6 w-6'
                                        />
                                        <label htmlFor={category} className='text-lg text-gray-500 hover:text-blue-500'>{category}</label>
                                    </div>
                                    <div className='bg-gray-200 h-1 w-full max-w-7xl mx-auto mt-2'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                 {/* Brand Category List */}
                 <div className='mt-5 flex justify-between'>
                    <h1 className='text-2xl font-bold'>Brands</h1>
                    <button onClick={() => setbr(!br)} className='text-2xl font-bold'>{br ? "-" : "+"}</button>
                </div>
                
                {/* Conditionally render checkboxes when br is true */}
                {br && (
                    <div className='mt-5'>
                        <div className='mt-3'>
                            {brandCategories.map((category, index) => (
                                <div key={index}>
                                    <div className='flex items-center'>
                                        <input
                                            type="checkbox"
                                            id={category}
                                            name={category}
                                            value={category}
                                            checked={selectedCategoriesbr.includes(category)} 
                                            onChange={() => handleCheckboxChangeBr(category)}
                                            className='m-2 h-6 w-6' 
                                        />
                                        <label htmlFor={category} className='text-lg text-gray-500 hover:text-blue-500'>{category}</label>
                                    </div>
                                    <div className='bg-gray-200 h-1 w-full max-w-7xl mx-auto mt-2'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
            </div>
        </>
    );
}
