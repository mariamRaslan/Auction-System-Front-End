import React from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CCardHeader, CButton, CModal, CModalHeader, CModalBody, CModalFooter } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const AuctionsList = () => {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = React.useState(false);

  const handleDelete = () => {
    // Implement your delete logic here
    // You can use the deleteModal state to toggle the delete confirmation modal
  };

  const handleView = () => {
    // Implement your view logic here
    // Navigate to the view page
    navigate('/auctions/details/1');
  };

  const handleEdit = () => {
    // Implement your edit logic here
    // Navigate to the edit page
    navigate('/auctions/edit/1');
  };

  return (
    <>
      <CCardHeader>
        <strong>All Auctions</strong>
      </CCardHeader>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Reference Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Action Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              Actions
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* map on items */}
          <CTableRow>
            <CTableDataCell>1111</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>Started</CTableDataCell>
            {/* button for details */}
            <CTableHeaderCell scope="col">
              <CButton className="btntext w-100" color="primary" variant="outline" onClick={handleView}>
                View
              </CButton>
            </CTableHeaderCell>
            {/* button for edit */}
            <CTableHeaderCell scope="col">
              <CButton className="btntext w-100" color="warning" variant="outline" onClick={handleEdit}>
                Edit
              </CButton>
            </CTableHeaderCell>
            {/* button for delete */}
            <CTableHeaderCell scope="col">
              <CButton className="btntext w-100" color="danger" variant="outline" onClick={() => setDeleteModal(true)}>
                Delete
              </CButton>
            </CTableHeaderCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      {/* Delete Confirmation Modal */}
      <CModal show={deleteModal} onClose={() => setDeleteModal(false)}>
        <CModalHeader closeButton>
          Confirm Delete
        </CModalHeader>
        <CModalBody>
          Are you sure you want to delete this item?
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={handleDelete}>Delete</CButton>
          <CButton color="secondary" onClick={() => setDeleteModal(false)}>Cancel</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AuctionsList;
