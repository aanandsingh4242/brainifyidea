import React, { useState } from 'react';

function MouseOverExample() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div 
      className="example-div"
      style={{ backgroundColor: bgColor }}
      onMouseOver={() => setBgColor("blue")}
      onMouseOut={() => setBgColor("white")}
    >
      Hover
    </div>
  );
}

export default MouseOverExample;
