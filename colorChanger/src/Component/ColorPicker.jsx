import React from 'react';

const colors = ['bg-red-500', 'bg-blue-400', 'bg-green-300', 'bg-yellow-300'];

const ColorPicker = ({ onSelectColor }) => {
  return (
    <div className="flex justify-center space-x-4">
      {colors.map((color, index) => (
        <button
          key={index}
          className={`h-10 w-10 rounded-full ${color} border-8`}
          onClick={() => onSelectColor(color)}
        ></button>
      ))}
    </div>
  );
};

export default ColorPicker;
