import React from 'react'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook } from '@coreui/icons'

const ProductDetails = () => {
  return (
    <CRow className="detailsContainer">
      <CCol sm={9} lg={9}>
        <CWidgetStatsD
          className="mb-4"
          icon={<CIcon icon={cibFacebook} height={200} className="my-4 text-white" />}
          values={[
            { title: 'Name', value: 'FaceBook' },
            { title: 'Category', value: 'Software' },
          ]}
          style={{
            '--cui-card-cap-bg': '#3b5998',
          }}
        />
      </CCol>
      <CCol sm={12} md={12} lg={12} className="detailsContainer">
        <div className="details col-md-6">
          <p>
            <span>Material:</span> cotton
          </p>
          <p>
            <span>Size:</span> XL
          </p>
          <p>
            <span>Color:</span> Blue
          </p>
        </div>
      </CCol>
    </CRow>
  )
}

export default ProductDetails
