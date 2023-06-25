import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../Axios';
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
import ConfirmationModal from "../../../SharedUi/Modal/Modal";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LiveStreamList = () => {
  const [streams, setStreams] = useState([]);
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await axiosInstance.get('/streams');
        setStreams(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStreams();
  }, []);

  // function for delete stream
  async function deleteStream(id) {
    try {
      console.log(id);
      const response = await axiosInstance.delete(`/streams/${id}`);
      setStreams((prevStreams) => prevStreams.filter((stream) => stream._id !== id));
    } catch (error) {
      console.error(error);
      setAlertVisible(true);
    }
  }

  // function for toggling stream status
  async function toggleStreamStatus(id, status) {
    try {
      console.log(id, status);
      if (status === 'activate') {
        const response = await axiosInstance.get(`/activatestream/${id}`);
        toast.error(response.data)
       // console.log(response.data);
      } else {
        const response = await axiosInstance.get(`/deactivatestream/${id}`);
        toast.error(response.data)
      }
      const newStreams = await axiosInstance.get('/streams');
      setStreams(newStreams.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // pagination
  const getPageData = () => {
    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return streams.slice(startIndex, endIndex);
  };

  const pageData = getPageData();

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  const renderPagination = () => {
    const pageCount = Math.ceil(streams.length / pageSize);
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
        <h2>البث المباشر</h2>
      </CCardHeader>
      <ToastContainer />
      <CTable>
        <CTableHead style={{ backgroundColor: '#4f5d73', color: '#fff' }}>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">الاسم</CTableHeaderCell>
            <CTableHeaderCell scope="col">الرابط</CTableHeaderCell>
            <CTableHeaderCell scope="col">الحالة</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              العمليات
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {pageData.map((stream, index) => (
            <CTableRow key={stream._id}>
              <CTableDataCell>{index + 1}</CTableDataCell>
              <CTableDataCell>{stream.title}</CTableDataCell>
              <CTableDataCell>{stream.link}</CTableDataCell>
              <CTableDataCell>{stream.status}</CTableDataCell>
              <CTableHeaderCell scope="col">
                <CButton
                  className="btntext w-100"
                  color="danger"
                  variant="outline"
                  onClick={() => {
                    setShowConfirmationModal(true);
                    setSelectedId(stream._id);
                  }}
                >
                  حذف
                </CButton>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                {stream.status === 'active' ? (
                  <CButton
                    className="btntext w-100"
                    color="warning"
                    variant="outline"
                    onClick={() => toggleStreamStatus(stream._id, 'deactivate')}
                  >
                    إيقاف التشغيل
                  </CButton>
                ) : (
                  <CButton
                    className="btntext w-100"
                    color="success"
                    variant="outline"
                    onClick={() => toggleStreamStatus(stream._id, 'activate')}
                  >
                    تشغيل البث المباشر
                  </CButton>
                )}
              </CTableHeaderCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {renderPagination()}
      <ConfirmationModal
        title="تأكيد الحذف"
        message="هل انت متأكد من حذف هذا العنصر؟"
        confirmButtonText="حذف"
        cancelButtonText="الغاء"
        onConfirm={() => {
          deleteStream(selectedId);
          setShowConfirmationModal(false);
        }}
        onCancel={() => setShowConfirmationModal(false)}
        visible={showConfirmationModal}
        setVisible={setShowConfirmationModal}
      />
    </>
  );
};

export default LiveStreamList;