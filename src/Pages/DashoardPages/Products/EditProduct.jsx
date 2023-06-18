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
    <div>
      <CCardHeader>
        <strong>
          تعديل منتج <span className="text-danger">{product.name}</span>
        </strong>
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
          <CFormLabel htmlFor="validationCustom01">
            الرقم المعرف للمنتج
          </CFormLabel>
          <CFormInput
            disabled
            type="text"
            value={product._id}
            name="id"
            id="id"
          />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">اسم المنتج</CFormLabel>
          <CFormInput
            type="text"
            value={product.name}
            onInput={handleInputChange}
            name="name"
            id="name"
            required
          />
          <CFormFeedback invalid>من فضلك ادخل اسم المنتج</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">المادة الخام</CFormLabel>
          <CFormInput
            type="text"
            value={product.material}
            onInput={handleInputChange}
            name="material"
            id="material"
            required
          />
          <CFormFeedback invalid>
            من فضلك ادخل المادة الخام للمنتج
          </CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">الحجم</CFormLabel>
          <CFormInput
            type="text"
            value={product.size}
            onInput={handleInputChange}
            name="size"
            id="size"
            required
          />
          <CFormFeedback invalid>من فضلك ادخل الحجم للمنتج</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">اللون</CFormLabel>
          <CFormInput
            type="text"
            value={product.color}
            onInput={handleInputChange}
            name="color"
            id="color"
            required
          />
          <CFormFeedback invalid>من فضلك ادخل اللون للمنتج</CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">السعر</CFormLabel>
          <CFormInput
            type="number"
            value={product.price}
            onInput={handleInputChange}
            name="price"
            id="price"
            required
          />
          <CFormFeedback invalid>
            من فضلك ادخل السعر للمنتج بالارقام فقط
          </CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">
            الفئات المتاحة للمنتج
          </CFormLabel>
          <CFormSelect
            multiple
            onChange={handleInputChange}
            name="category"
            id="category"
            required
            defaultValue={product.category}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </CFormSelect>
          <CFormFeedback invalid>
            من فضلك اختر الفئات المتاحة للمنتج
          </CFormFeedback>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom01">
            صورة المنتج الحالية
          </CFormLabel>
          <CFormInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            name="image"
            id="image"
          />
        </CCol>
        <CCol md={12}>
          <CButton type="submit" color="primary">
            حفظ
          </CButton>
        </CCol>
      </CForm>
    </div>
  );
};

export default UpdateProducts;
