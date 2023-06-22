import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Axios";
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
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import Alert from "src/SharedUi/Alert/Alert";

const AuctionsList = () => {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [auctionsList, setAuctionsList] = useState([]);
  const [auctionToDelete, setAuctionToDelete] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 7;
  const [alertVisible, setAlertVisible] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getAuctionsList();
  }, []);

  const getAuctionsList = async () => {
    try {
      const res = await axiosInstance.get("/auctions");
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
      const res = await axiosInstance.delete(
        `/auctions/${auctionToDelete._id}`
      );
      setAuctionsList(
        auctionsList.filter((auction) => auction._id !== auctionToDelete._id)
      );
      setDeleteModal(false);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      setAlertVisible(true);
    }
  };

  const handleView = (auctionId) => {
    navigate(`/dashboard/dashboard/auctions/details/${auctionId}`);
  };

  const handleEdit = (auctionId) => {
    navigate(`/dashboard/dashboard/auctions/edit/${auctionId}`);
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
        <li key={i} className={`page-item ${activePage === i ? "active" : ""}`}>
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
      <CCardHeader>
        <h2>المزادات</h2>
      </CCardHeader>
      <CTable>
        <CTableHead style={{ backgroundColor: "#4f5d73", color: "#fff" }}>
          <CTableRow>
            <CTableHeaderCell scope="col">الرقم المرجعي </CTableHeaderCell>
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
              {/* <CTableDataCell>{auction.status}</CTableDataCell> */}
              <CTableDataCell>
                {auction.status === "not started"
                  ? "قيد الانتظار"
                  : auction.status === "started"
                  ? "نشط"
                  : auction.status === "ended"
                  ? "انتهى"
                  : auction.status}
              </CTableDataCell>

              <CTableHeaderCell scope="col">
                <CButton
                  className="btntext w-100"
                  color="primary"
                  variant="outline"
                  onClick={() => handleView(auction._id)}
                >
                  تفاصيل
                </CButton>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <CButton
                  className="btntext w-100"
                  color="warning"
                  variant="outline"
                  onClick={() => handleEdit(auction._id)}
                >
                  تعديل
                </CButton>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <CButton
                  className="btntext w-100"
                  color="danger"
                  variant="outline"
                  onClick={() => handleDeleteButtonClick(auction)}
                >
                  حذف
                </CButton>
              </CTableHeaderCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {renderPagination()}
      <CModal visible={deleteModal} onClose={() => setDeleteModal(false)}>
        <CModalHeader closeButton>Confirm</CModalHeader>
        <CModalBody>Are you sure you want to delete this item?</CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={()=>{handleDelete(); setDeleteModal(false)}}>
            Delete
          </CButton>
          <CButton color="secondary" onClick={() => setDeleteModal(false)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      <Alert
        type="error-alert"
        visible={alertVisible}
        color="warning"
        message={error}
        dismissible
        alignment="center"
        setVisible={setAlertVisible}
      />
    </>
  );
};

export default AuctionsList;
