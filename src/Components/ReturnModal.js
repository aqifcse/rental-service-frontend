import React from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ReturnModal.css";

const actions = [
    { label: "Add", value: 1 },
    { label: "Edit", value: 2 },
    { label: "Delete", value: 3 }
  ];

function ReturnModal({ setOpenReturnModal }) {
  
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

        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select options={actions} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>

        <Form className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
              />
            </Form.Group>
        </Form>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenReturnModal(false);
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

export default ReturnModal;