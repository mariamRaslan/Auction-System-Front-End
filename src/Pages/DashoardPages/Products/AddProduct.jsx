import React, { useState, useEffect } from "react";
import {
  CButton,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
} from "@coreui/react";
import axiosInstance from "../../../Axios";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);

  // function to get all categories
  async function fetchCategories() {
    try {
      const response = await axiosInstance.get("/categories");
      console.log(response.data.data);
      setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const [categoryIds, setCategoryIds] = useState([]);

  function handleInputChange(event) {
    const { options } = event.target;
    if (event.target.name === "category") {
      // Create an array of category IDs
      const categoryIds = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          categoryIds.push(parseInt(options[i].value, 10));
        }
      }
      setCategoryIds(categoryIds);
      console.log(categoryIds);
    }
  }

  const [validated, setValidated] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    try {
      const productData = {
        name: form.elements.name.value,
        qty: form.elements.qty.value,
        material: form.elements.material.value,
        size: form.elements.size.value,
        color: form.elements.color.value,
        category: categoryIds,
        image: form.elements.image.files[0],
      };
      console.log(productData);
      const formDataWithImage = new FormData();
      for (const key in productData) {
        formDataWithImage.append(key, productData[key]);
      }
      console.log(formDataWithImage);
      const response = await axiosInstance.post("/items", formDataWithImage);
      console.log(response.data);
      window.location.href = "#/products/list";
    } catch (error) {
      console.error(error);
      setValidated(true);
    }
  }

  return (
    <div>
      <CCardHeader>
        <strong>Add Product</strong>
      </CCardHeader>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="post"
      >
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
          <CFormInput type="text" name="name" id="name" required />
          <CFormFeedback invalid>Please enter a value.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">Material</CFormLabel>
          <CFormInput type="text" name="material" id="material" required />
          <CFormFeedback invalid>Please enter a value.</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom01">Size</CFormLabel>
          <CFormInput type="text" name="size" id="size" required />
          <CFormFeedback invalid>Please enter a value.</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom01">Color</CFormLabel>
          <CFormInput type="text" name="color" id="color" required />
          <CFormFeedback invalid>Please enter a value.</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom02">Quantity</CFormLabel>
          <CFormInput type="number" name="qty" id="qty" required />
          <CFormFeedback invalid>Please enter a value.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom04">Categories</CFormLabel>
          <CFormSelect
            multiple
            className="form-control default-select"
            onChange={handleInputChange}
            name="category"
            id="category"
          >
            <option disabled>Select more than one category by pressing ctrl</option>
            {categories.map((category) => {
              return (
                <option name="category[]" value={category._id}>
                  {category.name}
                </option>
              );
            })}
          </CFormSelect>
          <CFormFeedback invalid>Please provide a valid category.</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="image">Image</CFormLabel>
          <CFormInput
            type="file"
            accept="image/*"
            required
            name="image"
            aria-label="file example"
          />
          <CFormFeedback invalid>Invalid image.</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Add Product
          </CButton>
        </CCol>
      </CForm>
    </div>
  );
};

export default AddProduct;