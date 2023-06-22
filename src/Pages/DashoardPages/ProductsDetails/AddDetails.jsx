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
  const [duration, setDuration] = useState('');
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
      const response = await axiosInstance.get('/auctions?status=not%20started');
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
        !!duration &&
        !!maxPrice
    );
  }, [selectedItemId, selectedAuctionId, initialBidValue, minimumBidValue, duration, maxPrice]);

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

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
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
      duration: duration,
      max_price: parseInt(maxPrice),
    };
    console.log(data);

    try {
      // perform validation
      const response = await axiosInstance.post('/itemDetails', data); // Updated URL
      if (response.status === 201) {
        navigate(`/dashboard/dashboard/productsDetails/list`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CForm className="row g-3" onSubmit={handleSubmit}>
      <CCol md={6}>
        <CFormLabel htmlFor="selectedItemId">اختر منتج</CFormLabel>
        <CFormSelect
          custom
          id="selectedItemId"
          value={selectedItemId}
          onChange={handleSelectedItemIdChange}
          required
        >
          <option value="" disabled>
            اختر منتج
          </option>
          {items.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </CFormSelect>
        {!selectedItemId && <CFormFeedback invalid>يرجى اختيار منتج</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="selectedAuctionId">اختر مزادًا</CFormLabel>
        <CFormSelect
          custom
          id="selectedAuctionId"
          value={selectedAuctionId}
          onChange={handleSelectedAuctionIdChange}
          required
        >
          <option value="" disabled>
            اختر مزادًا
          </option>
          {auctions.map((auction) => (
            <option key={auction._id} value={auction._id}>
              {auction.name}
            </option>
          ))}
        </CFormSelect>
        {!selectedAuctionId && <CFormFeedback invalid>يرجى اختيار مزاد</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="initialBidValue">قيمة العرض الأولي</CFormLabel>
        <CInputGroup>
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            type="number"
            id="initialBidValue"
            value={initialBidValue}
            onChange={handleInitialBidValueChange}
            required
          />
        </CInputGroup>
        {!initialBidValue && <CFormFeedback invalid>يرجى إدخال قيمة العرض الأولي</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="minimumBidValue">أدنى قيمة للعرض</CFormLabel>
        <CInputGroup>
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            type="number"
            id="minimumBidValue"
            value={minimumBidValue}
            onChange={handleMinimumBidValueChange}
            required
          />
        </CInputGroup>
        {!minimumBidValue && (
          <CFormFeedback invalid>يرجى إدخال أدنى قيمة للعرض</CFormFeedback>
        )}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="duration">مده المنتج</CFormLabel>
        <CInputGroup>
          <CInputGroupText>
            <i className="cil-calendar"></i>
          </CInputGroupText>
          <CFormInput
            type="number"
            id="duration"
            value={duration}
            min={1}
            onChange={handleDurationChange}
            required
          />
        </CInputGroup>
        {!duration && <CFormFeedback invalid>يرجى إدخال وقت الانتهاء</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="maxPrice">الحد الأقصى للسعر</CFormLabel>
        <CInputGroup>
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            required
          />
        </CInputGroup>
        {!maxPrice && <CFormFeedback invalid>يرجى إدخال الحد الأقصى للسعر</CFormFeedback>}
      </CCol>
      <CCol md={12}>
        <CButton type="submit" color="primary" disabled={!formValid}>
          أضف التفاصيل
        </CButton>
      </CCol>
    </CForm>
  );
};

export default AddDetails;
