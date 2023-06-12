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
  const [activePage, setActivePage] = useState(1);
  const pageSize = 10;

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

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const getPageData = () => {
    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return auctionsList.slice(startIndex, endIndex);
  };

  const pageData = getPageData();

  const renderPagination = () => {
    const pageCount = Math.ceil(auctionsList.length / pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(
        <li key={i} className={`page-item ${activePage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">{pages}</ul>
      </nav>
    );
  };

  return (
    <>
      <CCardHeader dir='rtl'>
        <h2>المزادات</h2>
      </CCardHeader>
      <CTable dir='rtl'>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">الرقم المرجعي</CTableHeaderCell>
            <CTableHeaderCell scope="col">الاسم</CTableHeaderCell>
            <CTableHeaderCell scope="col">الحالة</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              العمليات
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {pageData.map((auction) => (
            <CTableRow key={auction.reference_number}>
              <CTableDataCell>{auction.reference_number}</CTableDataCell>
              <CTableDataCell>{auction.name}</CTableDataCell>
              <CTableDataCell>{auction.status}</CTableDataCell>
              <CTableHeaderCell scope="col">
                <CButton className="btntext w-100" color="primary" variant="outline" onClick={() => handleView(auction._id)}>
                  تفاصيل
                </CButton>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <CButton className="btntext w-100" color="warning" variant="outline" onClick={() => handleEdit(auction._id)}>
                  تعديل
                </CButton>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <CButton className="btntext w-100" color="danger" variant="outline" onClick={() => handleDeleteButtonClick(auction)}>
                  حذف
                </CButton>
              </CTableHeaderCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {renderPagination()}
      <CModal visible={deleteModal} onClose={() => setDeleteModal(false)}>
        <CModalHeader closeButton>
          تأكيد
        </CModalHeader>
        <CModalBody>هل أنت متأكد أنك تريد حذف هذا العنصر؟</CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={handleDelete}>
            حذف
          </CButton>
          <CButton color="secondary" onClick={() => setDeleteModal(false)}>
            إلغاء
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AuctionsList;
