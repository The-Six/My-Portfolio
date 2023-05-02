import React from "react";
import "./modal.css";

const Modal = ({item, setHovering}) => {
  return (
    <div className="modalContainer">
      <div className="modalContent">
      <button className="modalCloseButton topright faulty-button" onClick={()=>setHovering(false)}>X</button>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Modal;
