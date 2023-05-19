import React, { useState } from 'react';
import './ZoomImages.css';

function ZoomImage(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="zoomable-image">
      <img src={props.src} alt={props.alt} style={props.style} id={props.id} onClick={toggleModal} />
      {isOpen && (
        <div className="modal">
          <span className="close" onClick={toggleModal}>&times;</span>
          <img src={props.src} alt={props.alt} />
        </div>
      )}
    </div>
  );
}

export default ZoomImage;