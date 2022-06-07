import React from 'react';
import "./ReturnConfirmModal.css";


function ReturnConfirmModal({ setOpenReturnConfirmModal }) {
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">

      <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenReturnConfirmModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1>Book a Product</h1>

        <p>Your total price is .... Do you want to procedure?</p>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenReturnConfirmModal(false);
            }}
            id="cancelBtn"
          >
            No
          </button>
          <button>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ReturnConfirmModal;