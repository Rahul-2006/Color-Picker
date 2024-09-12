import React, { useState } from "react";
function ColorPicker() {
    
    const [color , setColor] = useState("#FFFFFF");
    function handleColorChange(event) {
        setColor(event.target.value);
    }

    const getTextColor = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness < 150 ? '#FFFFFF' : '#000000';
    };

  const textColor = getTextColor(color);

    return( <div className="color-picker-container">
            <h1> Color Picker</h1>
            <div className="color-display" style={{backgroundColor : color}}>
                <p  style={{backgroundColor: "transparent", color: textColor}}>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
          </div> );

}
export default ColorPicker
