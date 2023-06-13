import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react';
import axiosInstance from "../../../Axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Custom hook to fetch auction data from API
const useAuction = (auctionId) => {
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    const fetchAuction = async () => {
      const { data } = (await axiosInstance.get(`/auctions/${auctionId}`)).data;
      setAuction(data);
    };
    fetchAuction();
  }, [auctionId]);

  return auction;
};

const EditAuction = () => {
  const auctionId = useParams().auctionId;
  const [validated, setValidated] = useState(false);
  const auction = useAuction(auctionId);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    try {
      const updatedAuction = {
        name: form.elements.auctionName.value,
        start_date: form.elements.startDate.value,
        end_date: form.elements.endDate.value,
        reference_number: form.elements.referenceNumber.value,
        time: form.elements.time.value,
        fees: form.elements.fees.value,
        status: form.elements.status.value,
      };
      await axiosInstance.patch(`/auctions/${auctionId}`, updatedAuction);
      navigate('/auctions');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    auction && (
      <CForm 
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CCol md={12}>
          <CFormLabel htmlFor="auctionName">Auction name</CFormLabel>
          <CFormInput
            type="text"
            id="auctionName"
            required
            defaultValue={auction.name}
          />
          <CFormFeedback invalid>Please enter a name for the auction</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="startDate">Start date</CFormLabel>
          <CFormInput
            type="date"
            id="startDate"
            required
            defaultValue={auction.start_date && format(new Date(auction.start_date), 'yyyy-MM-dd')}
          />
          <CFormFeedback invalid>Please enter a valid start date</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="endDate">End date</CFormLabel>
          <CFormInput
            type="date"
            id="endDate"
            required
            defaultValue={auction.end_date && format(new Date(auction.end_date), 'yyyy-MM-dd')}
          />
          <CFormFeedback invalid>Please enter a valid end date</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="referenceNumber">Reference number</CFormLabel>
          <CFormInput
            type="text"
            id="referenceNumber"
            required
            defaultValue={auction.reference_number}
          />
          <CFormFeedback invalid>Please enter a valid reference number</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="time">Time</CFormLabel>
          <CFormInput type="time" id="time" required defaultValue={auction.time} />
          <CFormFeedback invalid>Please enter a valid time</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="fees">Insurance value</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText>$</CInputGroupText>
            <CFormInput
              type="number"
              id="fees"
              required
              min="0"
              step="0.01"
              defaultValue={auction.fees}
            />
            <CFormFeedback invalid>Please enter a valid insurance value</CFormFeedback>
          </CInputGroup>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="status">Status</CFormLabel>
          <CFormSelect id="status" required defaultValue={auction.status}>
            <option disabled>Choose...</option>
            <option value="started">Started</option>
            <option value="ended">Ended</option>
            <option value="not started">Not Started</option>
          </CFormSelect>
          <CFormFeedback invalid>Please select the auction status</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Save changes
          </CButton>
        </CCol>
      </CForm>
    )
  );
};

export default EditAuction;