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
      window.location.href = "/dashboard/dashboard/products/list";
    } catch (error) {
      console.error(error);
      setValidated(true);
    }
  }

  return (
    <div>
      <CCardHeader>
        <strong>اضافة منتج</strong>
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
          <CFormLabel htmlFor="validationCustom01">الاسم</CFormLabel>
          <CFormInput type="text" name="name" id="name" required />
          <CFormFeedback invalid>من فضلك ادخل الاسم</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">المادة الخام</CFormLabel>
          <CFormInput type="text" name="material" id="material" required />
          <CFormFeedback invalid>من فضلك ادخل المادة الخام</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom01">الحجم</CFormLabel>
          <CFormInput type="text" name="size" id="size" required />
          <CFormFeedback invalid>من فضلك ادخل الحجم</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom01">اللون</CFormLabel>
          <CFormInput type="text" name="color" id="color" required />
          <CFormFeedback invalid>من فضلك ادخل اللون</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom02">الكمية</CFormLabel>
          <CFormInput type="number" name="qty" id="qty" required />
          <CFormFeedback invalid>من فضلك ادخل الكمية</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom04">الفئات</CFormLabel>
          <CFormSelect
            // multiple
            className="form-control default-select"
            onChange={handleInputChange}
            name="category"
            id="category"
          >
            <option disabled>اختر اكثر من فئة بالضغط على ctrl</option>
            {categories.map((category) => {
              return (
                <option name="category" value={category._id}>
                  {category.name}
                </option>
              );
            })}
          </CFormSelect>
          <CFormFeedback invalid>
            من فضلك اختر فئة واحدة على الاقل
          </CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="image">صورة المنتج</CFormLabel>
          <CFormInput
            type="file"
            accept="image/*"
            required
            name="image"
            aria-label="file example"
          />
          <CFormFeedback invalid>من فضلك ادخل صورة المنتج</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            اضافة
          </CButton>
        </CCol>
      </CForm>
    </div>
  );
};

export default AddProduct;
