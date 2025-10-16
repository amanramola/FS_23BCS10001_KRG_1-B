import React, { useState } from 'react';

const DrawingTool = () => {
  const [drawings, setDrawings] = useState([]);
  const [color, setColor] = useState('#0000ff');

  const handleDraw = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const newCircle = {
      cx: e.clientX - rect.left,
      cy: e.clientY - rect.top,
      r: 8,
      fill: color,
      id: Date.now()
    };
    setDrawings([...drawings, newCircle]);
  };

  const undo = () => {
    setDrawings(drawings.slice(0, -1));
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <svg
        width="500"
        height="400"
        style={{ border: '1px solid black' }}
        onClick={handleDraw}
      >
        {drawings.map((circle) => (
          <circle
            key={circle.id}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill={circle.fill}
          />
        ))}
      </svg>
      <button onClick={undo} style={{ marginTop: '10px' }}>Undo</button>
    </div>
  );
};

export default DrawingTool;