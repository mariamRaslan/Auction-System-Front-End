import React, { useState, useEffect } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
} from "@coreui/react";
import axiosInstance from "../../../Axios";

const BiddingsList = () => {
  const [biddingData, setBidding] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 5;

  // function to get diddings
  async function fetchBidding() {
    try {
      const response = await axiosInstance.get("/biddings/");
      console.log(response.data.data);
      setBidding(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchBidding();
  }, []);
useEffect(() => {
    renderPagination();
  }, [biddingData]);

  // pagination
  const getPageData = () => {
    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return biddingData.slice(startIndex, endIndex);
  };

  const pageData = getPageData();

  const handlePageChange = (page) => {
    setActivePage(page);
  };
 const renderPagination = () => {
  const pageCount = Math.ceil(biddingData.length / pageSize);
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
  return pages;
};
  return (
    <div>
      <CCardHeader>
        <strong>Biddings</strong> Table
      </CCardHeader>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">product Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Auction Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* Map over biddings */}
          {biddingData &&
            pageData.map((bid, index) => {
              return (
                <CTableRow key={bid._id}>
                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                  <CTableDataCell>{bid.user_id?.name}</CTableDataCell>
                  <CTableDataCell>{bid.item_id?.name}</CTableDataCell>
                  <CTableDataCell>{bid.auction_id?.name}</CTableDataCell>
                  <CTableDataCell>{bid.amount}</CTableDataCell>
                </CTableRow>
              );
            })}
        </CTableBody>
      </CTable>
      {renderPagination()}
    </div>
  );
};

export default BiddingsList;
