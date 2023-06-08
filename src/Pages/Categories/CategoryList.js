import React, { useState } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
//import fontaswome


const CategoryList = () => {
  
  
  
  return (
    //table to display id , name , button for edit and button for delete
    <div>
      <CCardHeader>
        <h1>Categories</h1>
      </CCardHeader>
      <CTable>
        <CTableHead> 
          <CTableRow>
            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
            <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Category 1</CTableDataCell>
            <CTableDataCell>
              <CButton color="primary">Edit</CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton color="danger">Delete</CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
            
    
  )
}
export default CategoryList
