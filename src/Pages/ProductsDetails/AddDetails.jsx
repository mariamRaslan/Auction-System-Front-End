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
import axiosInstance from '../../Axios';
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
      item_id:parseInt( selectedItemId),
      auction_id:parseInt(selectedAuctionId),
      start_bidding:parseInt( initialBidValue),
      bidding_gap:parseInt( minimumBidValue),
      end_time: endTime,
      max_price:parseInt( maxPrice),
    };
    console.log(data)
    
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
    <CForm className="row g-3" dir="rtl" onSubmit={handleSubmit}>
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
            اختر منتجًا
          </option>
          {items.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </CFormSelect>
        {!selectedItemId && <CFormFeedback invalid>من فضلك اختر منتج</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="selectedAuctionId">اختر مزاد</CFormLabel>
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
        {!selectedAuctionId && <CFormFeedback invalid>من فضلك اختر مزاد</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="initialBidValue">قيمة العرض الأولي</CFormLabel>
        <CInputGroup>
          <CFormInput
            type="number"
            id="initialBidValue"
            min="1"
            step="1"
            value={initialBidValue}
            onChange={handleInitialBidValueChange}
            required
          />
          <CInputGroupText>جنيه</CInputGroupText>
          {!initialBidValue && (
            <CFormFeedback invalid>من فضلك أدخل قيمة العرض الأولي</CFormFeedback>
          )}
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="minimumBidValue">الحد الأدنى للمزايدة</CFormLabel>
        <CInputGroup>
          <CFormInput
            type="number"
            id="minimumBidValue"
            min="1"
            step="1"
            value={minimumBidValue}
            onChange={handleMinimumBidValueChange}
            required
          />
          <CInputGroupText>جنيه</CInputGroupText>
          {!minimumBidValue && (
            <CFormFeedback invalid>من فضلك أدخل الحد الأدنى للمزايدة</CFormFeedback>
          )}
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="endTime">موعد انتهاء المزاد</CFormLabel>
        <CFormInput
          type="time"
          id="endTime"
          placeholder="ادخل موعد انتهاء المزاد"
          value={endTime}
          onChange={handleEndTimeChange}
          required
        />
        {!endTime && <CFormFeedback invalid>من فضلك أدخل موعد انتهاء المزاد</CFormFeedback>}
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="maxPrice">الحد الأقصى للسعر</CFormLabel>
        <CInputGroup>
          <CFormInput
            type="number"
            id="maxPrice"
            min="1"
            step="1"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            required
          />
          <CInputGroupText>جنيه</CInputGroupText>
          {!maxPrice && (
            <CFormFeedback invalid>من فضلك أدخل الحد الأقصى للسعر</CFormFeedback>
          )}
        </CInputGroup>
      </CCol>
      <CCol md={12}>
        <CButton type="submit" color="primary" disabled={!formValid}>
          اضافة
        </CButton>
      </CCol>
    </CForm>
  );
};

export default AddDetails;
