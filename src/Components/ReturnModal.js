import React, { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ReturnModal.css";

import ReturnConfirmModal from './ReturnConfirmModal';

const actions = [
    { label: "Add", value: 1 },
    { label: "Edit", value: 2 },
    { label: "Delete", value: 3 }
  ];

function ReturnModal({ setOpenReturnModal }) {
    const [modalReturnConfirmOpen, setModalReturnConfirmOpen] = useState(false);
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">

        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenReturnModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1>Return a Product</h1>

        <form>

          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <Select options={actions} />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
           
          <input type="text"/>

          <div className="footer">
            <button
              onClick={() => {
                setOpenReturnModal(false);
              }}
              id="cancelBtn"
            >
              No
            </button>
            <button
              type="button"
              onClick={() => {
                setModalReturnConfirmOpen(true);
              }}
              className="openModalBtn"
            >Yes</button>
            {modalReturnConfirmOpen && <ReturnConfirmModal setOpenReturnConfirmModal={setModalReturnConfirmOpen} />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReturnModal;