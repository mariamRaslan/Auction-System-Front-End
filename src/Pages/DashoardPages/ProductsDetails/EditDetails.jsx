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
  const [minimumBidValue,setMinimumBidValue] = useState('');
  const [duration, setDuration] = useState('');
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
        setDuration(response.data.duration);
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
        const response = await axiosInstance.get('/auctions?status=not%20started');
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
      duration !== '' &&
      maxPrice !== ''
    );
  }, [selectedItemId, selectedAuctionId, initialBidValue, minimumBidValue, duration, maxPrice]);

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

  function handleDurationChange(event) {
    setDuration(event.target.value);
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
        duration: duration,
        max_price: parseInt(maxPrice),
      };
      await axiosInstance.patch(`/itemDetails/${id}`, data);
      navigate('/dashboard/dashboard/auctions');
    } catch (error) {
      console.log('Error updating item details:', error);
    }
  }

  if (!itemDetails) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <CForm className="row g-3" onSubmit={handleSubmit} >
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
            <option value="">اختر عنصرًا</option>
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
            <option value="">اختر مزادًا</option>
            {auctions.map((auction) => (
              <option key={auction._id} value={auction._id}>
                {auction.name}
              </option>
            ))}
          </CFormSelect>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="initialBidValue">المبلغ المبدئي</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
          <i className="cil-money"></i>
          </CInputGroupText>
          <CFormInput
            id="initialBidValue"
            type="number"
            min={0}
            value={initialBidValue}
            onChange={handleInitialBidValueChange}
            required
          />
          <CFormFeedback invalid>يرجى إدخال المبلغ المبدئي</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="minimumBidValue">الحد الأدنى للمزايدة</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
          <i className="cil-money"></i>
          </CInputGroupText>
          <CFormInput
            id="minimumBidValue"
            type="number"
            min={0}
            value={minimumBidValue}
            onChange={handleMinimumBidValueChange}
            required
          />
          <CFormFeedback invalid>يرجى إدخال الحد الأدنى للمزايدة</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="duration">وقت انتهاء المزاد</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
          <i className="cil-clock"></i>
          </CInputGroupText>
          <CFormInput
            id="duration"
            type="number"
            value={duration}
            min={1}
            onChange={handleDurationChange}
            required
          />
          <CFormFeedback invalid>يرجى إدخال وقت انتهاء المزاد</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="maxPrice">الحد الأقصى للمزايدة</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
          <i className="cil-money"></i>
          </CInputGroupText>
          <CFormInput
            id="maxPrice"
            type="number"
            min={0}
            value={maxPrice}
            onChange={handleMaxPriceChange}
            required
          />
          <CFormFeedback invalid>يرجى إدخال الحد الأقصى للمزايدة</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol xs={12}>
        <CButton type="submit" color="primary" disabled={!formValid}>
          حفظ
        </CButton>
      </CCol>
    </CForm>
  );
}

export default EditDetails;
