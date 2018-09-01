import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const DeleteModal = (props) => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.closeModal}
    className="modal-dialog"
    overlayClassName="Overlay"
  >
    <div className="modal-content">
      <div className="modal-body">
        <h1>Delete</h1>
        <p>Are you sure you want to delete the link?</p>
      </div>
      <div className="modal-footer">
        <button onClick={()=>props.handleDelete(props.documentId)} className="btn btn-danger">Delete</button>
        <button onClick={props.closeModal} className="btn btn-default">Cancel</button>
      </div>
    </div>
    </Modal>
);

export default DeleteModal;




