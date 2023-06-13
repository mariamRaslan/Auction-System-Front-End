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
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Axios";

const UpdateProducts = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});

  const [categories, setCategories] = useState([]);
  // function for get all categories
  async function fetchCategories() {
    try {
      const response = await axiosInstance.get("/categories");
      console.log(response.data.data);
      setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchProduct(id) {
    try {
      const response = await axiosInstance.get(`/items/${id}`);
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchCategories();
    fetchProduct(id);
  }, []);

  const [validated, setValidated] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === "category") {
      // Create an array of category IDs
      const categoryIds = Array.from(event.target.selectedOptions, (option) =>
        parseInt(option.value, 10)
      );
      setProduct((prevFormData) => ({
        ...prevFormData,
        category: categoryIds,
      }));
    } else {
      setProduct((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    console.log(setProduct);
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    setProduct((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const formDataWithImage = new FormData();
    for (const key in product) {
      if (key === "image") {
        formDataWithImage.append(key, product[key]);
      } else {
        formDataWithImage.append(key, product[key]);
      }
    }
    try {
      const response = await axiosInstance.patch(
        `/items/${id}`,
        formDataWithImage
      );
      console.log(response.data);
      window.location.href = "#/products/list";
    } catch (error) {
      console.error(error);
      setValidated(true);
    }
  }
  return (
    <div dir="rtl">
      <CCardHeader>
        <strong>تعديل المنتج</strong>
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
          <CFormLabel htmlFor="validationCustom01">رقم التعريف</CFormLabel>
          <CFormInput
            disabled
            type="text"
            value={product._id}
            name="id"
            id="id"
          />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">الاسم</CFormLabel>
          <CFormInput
            type="text"
            value={product.name}
            onInput={handleInputChange}
            name="name"
            id="name"
            required
          />
          <CFormFeedback invalid>من فضلك أدخل هذا الحقل!</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">الخامه</CFormLabel>
          <CFormInput
            type="text"
            value={product.material}
            onInput={handleInputChange}
            name="material"
            id="material"
            required
          />
          <CFormFeedback invalid>من فضلك أدخل هذا الحقل!</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">المقاس</CFormLabel>
          <CFormInput
            type="text"
            value={product.size}
            onInput={handleInputChange}
            name="size"
            id="size"
            required
          />
          <CFormFeedback invalid>من فضلك أدخل هذا الحقل!</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">اللون </CFormLabel>
          <CFormInput
            type="text"
            value={product.color}
            onInput={handleInputChange}
            name="color"
            id="color"
            required
          />
          <CFormFeedback invalid>من فضلك أدخل هذا الحقل!</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom02">الكمية</CFormLabel>
          <CFormInput
            type="number"
            value={product.qty}
            onInput={handleInputChange}
            name="qty"
            id="qty"
            required
          />
          <CFormFeedback invalid>من فضلك أدخل هذا الحقل!</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom04">فئه</CFormLabel>
          <CFormSelect
            multiple
            className="form-control default-select"
            onInput={handleInputChange}
            name="category"
            id="category"
          >
            <option disabled>اختر أكثر من فئه بالضغط علي زر ctrl </option>
            {categories.map((category) => {
              return (
                <option
                  selected={product.category == category._id}
                  value={category._id}
                >
                  {category.name}
                </option>
              );
            })}
          </CFormSelect>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="image">الصوره</CFormLabel>
          <CFormInput
            type="file"
            accept="image/*"
            onInput={handleImageChange}
            name="image"
            aria-label="file example"
          />
          <CFormFeedback invalid>صورة غير صالحة</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            حفظ التعديلات
          </CButton>
        </CCol>
      </CForm>
    </div>
  );
};
export default UpdateProducts;
