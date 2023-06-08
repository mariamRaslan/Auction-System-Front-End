import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Axios';
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const AuctionsList = () => {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [auctionsList, setAuctionsList] = useState([]);
  const [auctionToDelete, setAuctionToDelete] = useState(null);

  useEffect(() => {
    getAuctionsList();
  }, []);

  const getAuctionsList = async () => {
    try {
      const res = await axiosInstance.get('/auctions');
      setAuctionsList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    if (!auctionToDelete) {
      return;
    }
  
    try {
      const res = await axiosInstance.delete(`/auctions/${auctionToDelete._id}`);
      setAuctionsList(auctionsList.filter((auction) => auction._id !== auctionToDelete._id));
      setDeleteModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleView = (auctionId) => {
    navigate(`/auctions/details/${auctionId}`);
  };

  const handleEdit = (auctionId) => {
    navigate(`/auctions/edit/${auctionId}`);
  };

  const handleDeleteButtonClick = (auction) => {
    setDeleteModal(true);
    setAuctionToDelete(auction);
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
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              Actions
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {auctionsList.map((auction) => (
            <CTableRow key={auction.reference_number}>
              <CTableDataCell>{auction.reference_number}</CTableDataCell>
              <CTableDataCell>{auction.name}</CTableDataCell>
              <CTableDataCell>{auction.status}</CTableDataCell>
              <CTableHeaderCell scope="col">
                <CButton className="btntext w-100" color="primary" variant="outline" onClick={() => handleView(auction._id)}>
                  View
                </CButton>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <CButton className="btntext w-100" color="warning" variant="outline" onClick={() => handleEdit(auction._id)}>
                  Edit
                </CButton>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <CButton className="btntext w-100" color="danger" variant="outline" onClick={() => handleDeleteButtonClick(auction)}>
                  Delete
                </CButton>
              </CTableHeaderCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>

      <CModal visible={deleteModal} onClose={() => setDeleteModal(false)}>
        <CModalHeader closeButton>Confirm Delete</CModalHeader>
        <CModalBody>Are you sure you want to delete this item?</CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={handleDelete}>
            Delete
          </CButton>
          <CButton color="secondary" onClick={() => setDeleteModal(false)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AuctionsList;