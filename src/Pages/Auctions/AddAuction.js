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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAuction = () => {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState('')
  const [referenceNumber, setReferenceNumber] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [time, setTime] = useState('')
  const [fees, setFees] = useState('')
  const navigate = useNavigate()

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
    setEndDate('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      const today = new Date()
      const startDateObj = new Date(startDate)

      if (startDateObj < today) {
        // Check if the start date is before today's date
        setStartDate('')
        toast.error('تاريخ البدء يجب أن يكون بعد تاريخ اليوم')
      } else if (startDateObj > new Date(endDate)) {
        // Check if the end date is before the start date
        setEndDate('')
        toast.error('تاريخ الإنتهاء يجب أن يكون بعد تاريخ البدء')
      } else {
        try {
          const auctionData = {
            name,
            reference_number: parseInt(referenceNumber),
            start_date: startDate,
            end_date: endDate,
            time,
            fees: parseInt(fees),
          }
          console.log(auctionData)
          const response = await axiosInstance.post('/auctions', auctionData)
          console.log(response.data)

          navigate('/auctions')
          toast.success('تم إضافة المزاد بنجاح.')
        } catch (error) {
          console.error('Error:', error)
          toast.error('حدث خطأ أثناء إضافة المزاد.')
        }
      }
    }

    setValidated(true)
  }

  const nameFeedback = 'من فضلك ادخل اسم للمزاد'
  const referenceNumberFeedback = 'من فضلك ادخل رقم مرجعي صحيح'
  const startDateFeedback = 'من فضلك ادخل تاريخ بدء صحيح'
  const endDateFeedback = 'من فضلك ادخل تاريخ انتهاء صحيح'
  const timeFeedback = 'من فضلك ادخل وقت صحيح'
  const feesFeedback = 'من فضلك ادخل قيمة تأمين صحيحة'

  return (
    <div>
      <ToastContainer />

      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        dir="rtl"
      >
        <CCol md={6}>
          <CFormLabel htmlFor="auctionName">اسم المزاد</CFormLabel>
          <CFormInput
            type="text"
            id="auctionName"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CFormFeedback invalid>{nameFeedback}</CFormFeedback>
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
          <CFormFeedback invalid>{referenceNumberFeedback}</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="startDate">تاريخ البدء</CFormLabel>
          <CFormInput
            type="date"
            id="startDate"
            required
            value={startDate}
            onChange={handleStartDateChange}
          />
          <CFormFeedback invalid>{startDateFeedback}</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="endDate">تاريخ الإنتهاء</CFormLabel>
          <CFormInput
            type="date"
            id="endDate"
            required
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <CFormFeedback invalid>{endDateFeedback}</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="time">الوقت</CFormLabel>
          <CFormInput
            type="time"
            id="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <CFormFeedback invalid>{timeFeedback}</CFormFeedback>
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
            <CFormFeedback invalid>{feesFeedback}</CFormFeedback>
          </CInputGroup>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            إضافه مزاد
          </CButton>
        </CCol>
      </CForm>
    </div>
  )
}

export default AddAuction