import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Confirm = ({ showConfirm, handlerShowConfirm, setConfirm, message }) => {
  return (
    <>
      <Modal show={showConfirm} onHide={handlerShowConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        {!message && (
          <>
            <Modal.Body>Do you want to delete your account?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handlerShowConfirm}>
                Close
              </Button>
              <Button variant="danger" onClick={() => setConfirm(true)}>
                Delete
              </Button>
            </Modal.Footer>
          </>
        )}
        {message && <Modal.Body>{message}</Modal.Body>}
      </Modal>
    </>
  );
};

export default Confirm;
