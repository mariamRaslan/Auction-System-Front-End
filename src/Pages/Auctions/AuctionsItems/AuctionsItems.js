import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
  CButton,
} from '@coreui/react'

const AuctiosItems = () => {
  return (
    <>
      <CCardHeader>
        <strong>Auctions Items</strong> <small>Table</small>
      </CCardHeader>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              Actions
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* map on items */}
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>@mdo</CTableDataCell>
            {/* button for details */}
            <CTableHeaderCell scope="col">
              <CButton className="btntext" color="primary" variant="outline">
                Details
              </CButton>
            </CTableHeaderCell>
            {/* button for edit */}
            <CTableHeaderCell scope="col">
              <CButton className="btntext" color="warning" variant="outline">
                Edit
              </CButton>
            </CTableHeaderCell>
            {/* button for delete */}

            <CTableHeaderCell scope="col">
              <CButton className="btntext" color="danger" variant="outline">
                Delete
              </CButton>
            </CTableHeaderCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}
export default AuctiosItems
