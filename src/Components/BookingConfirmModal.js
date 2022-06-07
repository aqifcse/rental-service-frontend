import React from 'react';
import "./BookingConfirmModal.css";


function BookingConfirmModal({ setOpenBookingConfirmModal }) {
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">

      <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenBookingConfirmModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1>Book a Product</h1>

        <p>Your estimated price is .... Do you want to procedure?</p>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenBookingConfirmModal(false);
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

export default BookingConfirmModal;