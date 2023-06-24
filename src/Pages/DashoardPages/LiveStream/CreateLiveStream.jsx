import React, { useState, useEffect } from "react";
import axiosInstance from "../../../Axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateLiveStream = () => {
  const [streamLink, setStreamLink] = useState("");
  const [streamTitle, setStreamTitle] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axiosInstance.get(
          "/auctions?status=not%20started"
        );
        setAuctions(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuctions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form data
    if (!streamLink || !streamTitle || !streamDescription) {
      toast.error("يرجى ملء جميع الخانات");
      return;
    }
    const streamData = {
      title: streamTitle,
      description: streamDescription,
      link: streamLink
    };
    try {
      // Send the post request to create the stream
      const response = await axiosInstance.post("/streams", streamData);
      console.log(response.data);
      // Reset form fields
      setStreamLink("");
      setStreamTitle("");
      setStreamDescription("");
      toast.done("تم انشاء بث مباشر بنجاح");
      window.location.href = "/dashboard/dashboard/live-stream/list";
    } catch (error) {
      console.error(error);
      toast.error("عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى");
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h1>إنشاء بث مباشر</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="streamLink" className="form-label">
            رابط البث المباشر
          </label>
          <input
            type="text"
            className="form-control"
            id="streamLink"
            placeholder="أدخل رابط البث المباشر"
            value={streamLink}
            onChange={(event) => setStreamLink(event.target.value)}
          />
          <div className="form-text">رابط البث على YouTube .</div>
        </div>

        <div className="mb-3">
          <label htmlFor="streamTitle" className="form-label">
            عنوان البث المباشر
          </label>
          <input
            type="text"
            className="form-control"
            id="streamTitle"
            placeholder="أدخل عنوان البث المباشر"
            value={streamTitle}
            onChange={(event) => setStreamTitle(event.target.value)}
          />
          <div className="form-text">عنوان البث المباشر.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="streamDescription" className="form-label">
            وصف البث المباشر
          </label>
          <textarea
            className="form-control"
            id="streamDescription"
            placeholder="أدخل وصف البث المباشر"
            value={streamDescription}
            onChange={(event) => setStreamDescription(event.target.value)}
          />
          <div className="form-text">وصف مختصر للبث المباشر.</div>
        </div>

        <button type="submit" className="btn btn-primary">
          إنشاء
        </button>
      </form>
    </div>
  );
};

export default CreateLiveStream;
