import React, { useContext } from 'react';

export default function Input({ intext, height, width, top, statev, statef }) {
  
  
  const handleInputChange = (e) => {
    console.log(e.target.value); 
  };

  return (
    <>
      <input
        className={`text-gray-400 w-${width} h-${height} mt-${top} rounded-sm p-4 placeholder-gray-500 
          ${statev ? "placeholder-opacity-0" : "placeholder-opacity-100"} 
          transition-all duration-300 ease-in-out focus:outline-none appearance-none focus:ring-0`}
        placeholder={intext}
        onFocus={() => statef(true)} 
        onBlur={() => statef(false)} 
        onChange={handleInputChange}
      />
    </>
  );
}

