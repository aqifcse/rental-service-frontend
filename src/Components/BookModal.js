import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./BookModal.css";

const actions = [
  { label: "Add", value: 1 },
  { label: "Edit", value: 2 },
  { label: "Delete", value: 3 }
];

function BookModal({ setOpenBookModal }) {

  const [value, onChange] = useState([new Date(), new Date()]);
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">

      <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenBookModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1>Book a Product</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select options={actions} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>

        <div>
          <DateRangePicker onChange={onChange} value={value} />
        </div>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenBookModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default BookModal;