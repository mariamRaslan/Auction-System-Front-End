import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

function EditDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState('');
  const [selectedAuctionId, setSelectedAuctionId] = useState('');
  const [initialBidValue, setInitialBidValue] = useState('');
  const [minimumBidValue, setMinimumBidValue] = useState('');
  const [endTime, setEndTime] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [items, setItems] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    async function fetchItemDetails() {
      try {
        const response = await axiosInstance.get(`/itemDetails/${id}`);
        setItemDetails(response.data);
        setSelectedItemId(response.data.item_id._id);
        setSelectedAuctionId(response.data.auction_id._id);
        setInitialBidValue(response.data.start_bidding.toString());
        setMinimumBidValue(response.data.bidding_gap.toString());
        setEndTime(response.data.end_time);
        setMaxPrice(response.data.max_price.toString());
      } catch (error) {
        console.log(error);
      }
    }
    fetchItemDetails();
  }, [id]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axiosInstance.get('/items');
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);

  useEffect(() => {
    async function fetchAuctions() {
      try {
        const response = await axiosInstance.get('/auctions?status=not started');
        setAuctions(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAuctions();
  }, []);

  useEffect(() => {
    setFormValid(
      selectedItemId !== '' &&
      selectedAuctionId !== '' &&
      initialBidValue !== '' &&
      minimumBidValue !== '' &&
      endTime !== '' &&
      maxPrice !== ''
    );
  }, [selectedItemId, selectedAuctionId, initialBidValue, minimumBidValue, endTime, maxPrice]);

  function handleSelectedItemIdChange(event) {
    setSelectedItemId(event.target.value);
    console.log(event.target.value)
  }

  function handleSelectedAuctionIdChange(event) {
    setSelectedAuctionId(event.target.value);
    console.log(event.target.value)

  }

  function handleInitialBidValueChange(event) {
    setInitialBidValue(event.target.value);
  }

  function handleMinimumBidValueChange(event) {
    setMinimumBidValue(event.target.value);
  }

  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }

  function handleMaxPriceChange(event) {
    setMaxPrice(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setFormValid(false);
      return;
    }

    try {
      const data = {
        item_id: parseInt(selectedItemId),
        auction_id: parseInt(selectedAuctionId),
        start_bidding: parseInt(initialBidValue),
        bidding_gap: parseInt(minimumBidValue),
        end_time: endTime,
        max_price: parseInt(maxPrice),
      };
      await axiosInstance.patch(`/itemDetails/${id}`, data);
     // navigate('/auctions');
    } catch (error) {
      console.log('Error updating item details:', error);
    }
  }

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <CForm className="row g-3" onSubmit={handleSubmit} dir='rtl'>
      <CCol md={6}>
        <CFormLabel htmlFor="itemSelect">المنتج</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
          <i className="cil-calendar"></i>
          </CInputGroupText>
          <CFormSelect
            id="itemSelect"
            value={selectedItemId}
            onChange={handleSelectedItemIdChange}
          >
            <option value="">اختر منتج</option>
            {items.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </CFormSelect>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="auctionSelect">المزاد</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <i className="cil-calendar"></i>
          </CInputGroupText>
          <CFormSelect
            id="auctionSelect"
            value={selectedAuctionId}
            onChange={handleSelectedAuctionIdChange}
          >
            <option value="">اختر مزاد</option>
            {auctions.map((auction) => (
              <option key={auction._id} value={auction._id}>
                {auction.name}
              </option>
            ))}
          </CFormSelect>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="initialBidInput">  قيمة العرض الأولي   </CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            id="initialBidInput"
            type="number"
            min="1"
            step="1"
            value={initialBidValue}
            onChange={handleInitialBidValueChange}
            required
          />
          <CFormFeedback invalid>من فضلك أدخل قيمة العرض الأولي</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="minimumBidInput">الحد الأدنى للمزايدة</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            id="minimumBidInput"
            type="number"
            min="1"
            step="1"
            value={minimumBidValue}
            onChange={handleMinimumBidValueChange}
            required
          />
          <CFormFeedback invalid>من فضلك أدخل الحد الأدنى للمزايدة</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="endTimeInput">موعد انتهاء المزاد</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <i className="cil-calendar"></i>
          </CInputGroupText>
          <CFormInput
            id="endTimeInput"
            type="time"
            value={endTime}
            onChange={handleEndTimeChange}
            required
          />
          <CFormFeedback invalid>من فضلك أدخل موعد انتهاء المزاد</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="maxPriceInput">الحد الأقصى للسعر</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            id="maxPriceInput"
            type="number"
            min="1"
            step="1"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            required
          />
          <CFormFeedback invalid>من فضلك أدخل الحد الأقصى للسعر</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={12}>
      <CButton type="submit" disabled={!formValid}>
        حفظ التغييرات
      </CButton>
      </CCol>
    </CForm>
  );
}

export default EditDetails;