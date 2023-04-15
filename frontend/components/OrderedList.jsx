import React from 'react';

const OrderedList = ({ items }) => {
  return (
    <ol className="list-decimal list-inside">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ol>
  );
};

export default OrderedList;