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
    <CForm className="row g-3" onSubmit={handleSubmit} >
      <CCol md={6}>
        <CFormLabel htmlFor="itemSelect">Item</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
          <i className="cil-calendar"></i>
          </CInputGroupText>
          <CFormSelect
            id="itemSelect"
            value={selectedItemId}
            onChange={handleSelectedItemIdChange}
          >
            <option value="">Select an item</option>
            {items.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </CFormSelect>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="auctionSelect">Auction</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <i className="cil-calendar"></i>
          </CInputGroupText>
          <CFormSelect
            id="auctionSelect"
            value={selectedAuctionId}
            onChange={handleSelectedAuctionIdChange}
          >
            <option value="">Select an auction</option>
            {auctions.map((auction) => (
              <option key={auction._id} value={auction._id}>
                {auction.name}
              </option>
            ))}
          </CFormSelect>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="initialBidInput">Initial BidValue</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            type="number"
            id="initialBidInput"
            placeholder="Enter initial bid value"
            value={initialBidValue}
            onChange={handleInitialBidValueChange}
            required
          />
          <CFormFeedback invalid>Please enter a valid bid value</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="minimumBidInput">Minimum Bid Gap</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            type="number"
            id="minimumBidInput"
            placeholder="Enter minimum bid gap"
            value={minimumBidValue}
            onChange={handleMinimumBidValueChange}
            required
          />
          <CFormFeedback invalid>Please enter a valid bid gap value</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="endTimeInput">End Time</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <i className="cil-calendar"></i>
          </CInputGroupText>
          <CFormInput
            type="datetime-local"
            id="endTimeInput"
            placeholder="Choose end time"
            value={endTime}
            onChange={handleEndTimeChange}
            required
          />
          <CFormFeedback invalid>Please choose a valid end time</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="maxPriceInput">Max Price</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            type="number"
            id="maxPriceInput"
            placeholder="Enter max price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            required
          />
          <CFormFeedback invalid>Please enter a valid max price value</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol xs={12}>
        <CButton type="submit" color="primary" disabled={!formValid}>
          Update Details
        </CButton>
      </CCol>
    </CForm>
  );
}

export default EditDetails;