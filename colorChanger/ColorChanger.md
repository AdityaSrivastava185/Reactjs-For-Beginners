# Background Changer Project Documentation

## Objective 

The objective of the Color Picker project is to create a simple web application that allows users to change the background color dynamically by selecting from a predefined set of colors. This project serves as a practical exercise to demonstrate the integration of React.js and Tailwind CSS, while also providing beginners with a hands-on opportunity to learn about user interaction in web development.

## Introduction

The Background Changer project is a simple web application built using React.js and Tailwind CSS. It allows users to change the background color of the application by selecting from a set of predefined colors.

### Features

1. Users can select from a set of predefined colors to change the background color.

2. The application interface is simple and intuitive, making it easy for users to interact with.

3. Utilizes React.js for building dynamic user interfaces and Tailwind CSS for styling.


## Setting up the Project

1. **Create a React Project using Vite Bundler**:
    - Use `npm create vite@latest` to create a Vite-based React project.
    - Navigate to the project directory with `cd <project-name>`.
    - Install dependencies with `npm install`.
    - Start the development server with `npm run dev`.

2. **Installing tailwind css**
    - Open the command terminal 
    - run the command 
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
  - Navigate to the `tailwind.config.js` file and use this code in place of `content:[],` 
```bash
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
  - Navigate to the `index.css` file and use paste this code at the top of the file 
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
3. **Create a folder `component` inside the `src` folder** - 
    - This folder will contain the color component and functionalities of handling the event 

4. **Create a file called `ColorPicker.jsx` inside the component folder**
    - This file will contain the code for the color picker code and the functionalities of the project

```jsx
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

```
5. **Navigate to the `App.jsx` file** - 
    - This file will contain the component to render on the document 

```jsx
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

```
