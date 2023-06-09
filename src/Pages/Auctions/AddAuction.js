import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

const AddAuction = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="auctionName">اسم المزاد</CFormLabel>
        <CFormInput type="text" id="auctionName" required />
        <CFormFeedback invalid>Please provide an auction name.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="startDate">تاريخ البدء</CFormLabel>
        <CFormInput type="date" id="startDate" required />
        <CFormFeedback invalid>Please provide a valid start date.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="endDate">تاريخ الإنتهاء</CFormLabel>
        <CFormInput type="date" id="endDate" required />
        <CFormFeedback invalid>Please provide a valid end date.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="time">الوقت</CFormLabel>
        <CFormInput type="time" id="time" required />
        <CFormFeedback invalid>Please provide a valid time.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="fees">التأمين</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput type="number" id="fees" required min="0" step="0.01" />
          <CFormFeedback invalid>Please provide a valid fee.</CFormFeedback>
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
