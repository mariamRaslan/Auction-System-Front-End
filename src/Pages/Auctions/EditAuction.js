import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const EditAuction = () => {
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
      <CCol md={6}>
        <CFormLabel htmlFor="auctionName">Auction Name</CFormLabel>
        <CFormInput type="text" id="auctionName" required />
        <CFormFeedback invalid>Please provide an auction name.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="referenceNumber">Reference Number</CFormLabel>
        <CFormInput type="text" id="referenceNumber" required />
        <CFormFeedback invalid>Please provide a reference number.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="startDate">Start Date</CFormLabel>
        <CFormInput type="date" id="startDate" required />
        <CFormFeedback invalid>Please provide a valid start date.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="endDate">End Date</CFormLabel>
        <CFormInput type="date" id="endDate" required />
        <CFormFeedback invalid>Please provide a valid end date.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="time">Time</CFormLabel>
        <CFormInput type="time" id="time" required />
        <CFormFeedback invalid>Please provide a valid time.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="fees">Fees</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText>$</CInputGroupText>
          <CFormInput type="number" id="fees" required min="0" step="0.01" />
          <CFormFeedback invalid>Please provide a valid fee.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="status">Status</CFormLabel>
        <CFormSelect id="status" required>
          <option value="">Choose...</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </CFormSelect>
        <CFormFeedback invalid>Please select a status.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Edit Auction
        </CButton>
      </CCol>
    </CForm>
  )
}

export default EditAuction
