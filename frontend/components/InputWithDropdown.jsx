import React, { useState } from 'react';

const InputWithDropdown = ({ options }) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestedOptions, setSuggestedOptions] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    // Filter options based on input value
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestedOptions(filteredOptions);
  };

  const handleOptionSelect = (selectedValue) => {
    setSearchValue(selectedValue);
    setSuggestedOptions([]);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={searchValue}
        onChange={handleInputChange}
      />
      {suggestedOptions.length > 0 && (
        <ul className="absolute z-10 left-0 right-0 mt-2 p-2 bg-white border border-gray-300 rounded-md">
          {suggestedOptions.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect(option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputWithDropdown;
