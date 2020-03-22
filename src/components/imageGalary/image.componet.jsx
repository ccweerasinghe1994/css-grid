import React from "react";
import "./image.component.scss";
export const ImageContainer = ({ imageUrl }) => {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="card"></div>
  );
};
