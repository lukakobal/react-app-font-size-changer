import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [size, setSize] = useState(20); // začetna velikost besedila

  const increase = () => setSize(size + 2); // poveča font
  const decrease = () => setSize(size - 2); // zmanjša font

  return (
    <div className="container">
      <h1 style={{ fontSize: `${size}px` }}>React Font Size Changer</h1>
      <div className="buttons">
        <button onClick={decrease}>−</button>
        <button onClick={increase}>+</button>
      </div>
      <p>Current size: {size}px</p>
    </div>
  );
}
