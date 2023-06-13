import React, { useState, useEffect } from 'react';
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react';
import axiosInstance from '../../../Axios';
import { useNavigate } from 'react-router-dom';

const AddDetails = () => {
  const [selectedItemId, setSelectedItemId] = useState('');
  const [selectedAuctionId, setSelectedAuctionId] = useState('');
  const [initialBidValue, setInitialBidValue] = useState('');
  const [minimumBidValue, setMinimumBidValue] = useState('');
  const [endTime, setEndTime] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [items, setItems] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const response = await axiosInstance.get('/items');
      setItems(response.data);
    };
    getItems();
  }, []);

  useEffect(() => {
    const getAuctions = async () => {
      const response = await axiosInstance.get('/auctions?status=not started');
      setAuctions(response.data.data);
    };
    getAuctions();
  }, []);

  useEffect(() => {
    setFormValid(
      !!selectedItemId &&
        !!selectedAuctionId &&
        !!initialBidValue &&
        !!minimumBidValue &&
        !!endTime &&
        !!maxPrice
    );
  }, [selectedItemId, selectedAuctionId, initialBidValue, minimumBidValue, endTime, maxPrice]);

  const handleSelectedItemIdChange = (event) => {
    setSelectedItemId(event.target.value);
  };

  const handleSelectedAuctionIdChange = (event) => {
    setSelectedAuctionId(event.target.value);
  };

  const handleInitialBidValueChange = (event) => {
    setInitialBidValue(event.target.value);
  };

  const handleMinimumBidValueChange = (event) => {
    setMinimumBidValue(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      item_id: parseInt(selectedItemId),
      auction_id: parseInt(selectedAuctionId),
      start_bidding: parseInt(initialBidValue),
      bidding_gap: parseInt(minimumBidValue),
      end_time: endTime,
      max_price: parseInt(maxPrice),
    };
    console.log(data);
    
    try {
      // perform validation
      const response = await axiosInstance.post('/itemDetails', data); // Updated URL
      if (response.status === 201) {
        navigate(`/auctions/${response.data.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CForm className="row g-3" onSubmit={handleSubmit}>
      <CCol md={6}>
        <CFormLabel htmlFor="selectedItemId">Select an item</CFormLabel>
        <CFormSelect
          custom
          id="selectedItemId"
          value={selectedItemId}
          onChange={handleSelectedItemIdChange}
          required
        >
          <option value="" disabled>
            Select an item
          </option>
          {items.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </CFormSelect>
        {!selectedItemId && <CFormFeedback invalid>Please select an item</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="selectedAuctionId">Select an auction</CFormLabel>
        <CFormSelect
          custom
          id="selectedAuctionId"
          value={selectedAuctionId}
          onChange={handleSelectedAuctionIdChange}
          required
        >
          <option value="" disabled>
            Select an auction
          </option>
          {auctions.map((auction) => (
            <option key={auction._id} value={auction._id}>
              {auction.name}
            </option>
          ))}
        </CFormSelect>
        {!selectedAuctionId && <CFormFeedback invalid>Please select an auction</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="initialBidValue">Initial bid value</CFormLabel>
        <CInputGroup>
          <CFormInput
            type="number"
            id="initialBidValue"
            value={initialBidValue}
            onChange={handleInitialBidValueChange}
            required
          />
          <CInputGroupText>ETH</CInputGroupText>
          {!initialBidValue && <CFormFeedback invalid>Please enter an initial bid value</CFormFeedback>}
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="minimumBidValue">Minimum bid value</CFormLabel>
        <CInputGroup>
          <CFormInput
            type="number"
            id="minimumBidValue"
            value={minimumBidValue}
            onChange={handleMinimumBidValueChange}
            required
          />
          <CInputGroupText>ETH</CInputGroupText>
          {!minimumBidValue && <CFormFeedback invalid>Please enter a minimum bid value</CFormFeedback>}
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="endTime">End time</CFormLabel>
        <CFormInput
          type="datetime-local"
          id="endTime"
          value={endTime}
          onChange={handleEndTimeChange}
          required
        />
        {!endTime && <CFormFeedback invalid>Please enter an end time</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="maxPrice">Max price</CFormLabel>
        <CInputGroup>
          <CFormInput
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            required
          />
          <CInputGroupText>ETH</CInputGroupText>
          {!maxPrice && <CFormFeedback invalid>Please enter a max price</CFormFeedback>}
        </CInputGroup>
      </CCol>
      <CCol md={12}>
        <CButton type="submit" color="primary" disabled={!formValid}>
          Add details
        </CButton>
      </CCol>
    </CForm>
  );
};

export default AddDetails;