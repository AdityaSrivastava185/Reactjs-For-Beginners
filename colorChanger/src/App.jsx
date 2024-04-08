import React, { useState } from 'react';
import ColorPicker from './Component/ColorPicker';
const App = () => {
  const [bgColor, setBgColor] = useState('bg-white');

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`min-h-screen ${bgColor} flex justify-center items-center`}>
      <div>
        <h1 className="text-4xl font-bold mb-8 text-slate-900 font-mono">Background Changer</h1>
        <ColorPicker onSelectColor={handleColorChange} />
      </div>
    </div>
  );
};

export default App;
