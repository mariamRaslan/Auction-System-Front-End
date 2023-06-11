import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import axiosInstance from "../../Axios"
import { useNavigate } from 'react-router-dom'

const AddAuction = () => {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState('')
  const [referenceNumber, setReferenceNumber] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [time, setTime] = useState('')
  const [fees, setFees] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      try {
        const auctionData = {
          name,
          reference_number:parseInt( referenceNumber),
          start_date: startDate,
          end_date: endDate,
          time,
          fees: parseInt( fees),
        }
        console.log(auctionData)
        const response = await axiosInstance.post('/auctions', auctionData)
        console.log(response.data)
        
        navigate('/auctions')
      } catch (error) {
        console.error('Error:', error)
      }
    }
    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      dir="rtl"
    >
      <CCol md={6}>
        <CFormLabel htmlFor="auctionName">اسم المزاد</CFormLabel>
        <CFormInput type="text" id="auctionName" required value={name} onChange={(e) => setName(e.target.value)} />
        <CFormFeedback invalid>من فضلك ادخل اسم للمزاد</CFormFeedback>
      </CCol>
      <CCol md={6}>
          <CFormLabel htmlFor="referenceNumber">الرقم المرجعي</CFormLabel>
          <CFormInput
            type="text"
            id="referenceNumber"
            required
            value={referenceNumber}
            onChange={(e) => setReferenceNumber(e.target.value)}
          />
          <CFormFeedback invalid>من فضلك ادخل رقم مرجعي صحيح</CFormFeedback>
        </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="startDate">تاريخ البدء</CFormLabel>
        <CFormInput type="date" id="startDate" required value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <CFormFeedback invalid>من فضلك ادخل تاريخ بدء صحيح</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="endDate">تاريخ الإنتهاء</CFormLabel>
        <CFormInput type="date" id="endDate" required value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <CFormFeedback invalid>من فضلك ادخل تاريخ انتهاء صحيح</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="time">الوقت</CFormLabel>
        <CFormInput type="time" id="time" required value={time} onChange={(e) => setTime(e.target.value)} />
        <CFormFeedback invalid>من فضلك ادخل وقت صحيح</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="fees">التأمين</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput
            type="number"
            id="fees"
            required
            min="0"
            step="0.01"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
          />
          <CFormFeedback invalid>من فضلك ادخل قيمة تأمين صحيحة</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          إضافه مزاد
        </CButton>
      </CCol>
    </CForm>
  )
}

export default AddAuction