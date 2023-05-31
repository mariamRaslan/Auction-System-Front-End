import React, { useState } from 'react'
import {
  CButton,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

const UpdateProducts = () => {
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
    <>
      <CCardHeader>
        <strong>Edit Product</strong>
      </CCardHeader>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
          <CFormInput type="text" id="validationCustom01" required />
          <CFormFeedback invalid>This field is Required</CFormFeedback>
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">Material</CFormLabel>
          <CFormInput type="text" id="validationCustom01" required />
          <CFormFeedback invalid>This field is Required</CFormFeedback>
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom01">Size</CFormLabel>
          <CFormInput type="text" id="validationCustom01" required />
          <CFormFeedback invalid>This field is Required</CFormFeedback>
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom01">Color</CFormLabel>
          <CFormInput type="text" id="validationCustom01" required />
          <CFormFeedback invalid>This field is Required</CFormFeedback>
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom02">Quantity</CFormLabel>
          <CFormInput type="number" id="validationCustom02" required />
          <CFormFeedback valid>Looks good!</CFormFeedback>
          <CFormFeedback invalid>This field is Required</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom04">Category</CFormLabel>
          <CFormSelect id="validationCustom04">
            <option disabled>Choose...</option>
            <option>...</option>
          </CFormSelect>
          <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">Image</CFormLabel>
          <CFormInput type="file" id="validationTextarea" aria-label="file example" required />
          <CFormFeedback invalid>Invalid image</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Submit form
          </CButton>
        </CCol>
      </CForm>
    </>
  )
}
export default UpdateProducts
