import React from "react";
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from "@coreui/react";

const ConfirmationModal = ({ title, message, confirmButtonText, cancelButtonText, onConfirm, onCancel, visible, setVisible }) => {
  return (
    <CModal
      alignment="center"
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <CModalHeader>
        <CModalTitle>{title}</CModalTitle>
      </CModalHeader>
      <CModalBody>{message}</CModalBody>
      <CModalFooter>
        <CButton onClick={onConfirm} color="danger">
          {confirmButtonText}
        </CButton>
        <CButton color="secondary" onClick={onCancel}>
          {cancelButtonText}
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ConfirmationModal;
