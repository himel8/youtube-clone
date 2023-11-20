import React from "react";
import { FaStar } from "react-icons/fa";
const item = [1, 2, 3, 4, 5];
const Star = ({ size, gap }) => {
  return (
    <div className={`flex ${gap}`}>
      {item.map((data) => (
        <FaStar color="#ff8f00" size={size} />
      ))}
    </div>
  );
};

export default Star;
