import React, { useEffect, useState } from "react";
import "./LiveStream.css";
import axiosInstance from "../../../Axios";
import { useParams } from "react-router-dom";

const LiveStream = () => {
  const [streamData, setStreamData] = useState({});
  const { auctionId } = useParams();
  

  useEffect(() => {
    const fetchStreamData = async () => {
      try {
        const response = await axiosInstance.get(`/auctionstream/${auctionId}`);
        setStreamData(response.data.data[0]);
        console.log(response.data.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchStreamData();
  }, [auctionId]);

  return (
    <div className="container mt-5" dir="rtl ">
      <div id="header">
        <h1 className="ms-3">{streamData.title}</h1>
        {/* <span>المزاد الحالي</span> */}
      </div>

      <div id="stream-container">
        {/* stream */}
        <div id="stream-embed-wrapper " style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            id="stream-embed-iframe"
            width="820"
            height="450"
            src={streamData.link}
            frameBorder="0"
            allowFullScreen
            style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
          ></iframe>
        </div>

        <div className="clear_both"></div>
      </div>

      <div id="footer">
        <div className="text-end ms-3 me-3 mb-3 text-dark">{streamData.description}</div>
        <a className="" href={streamData.link} target="_blank" rel="noopener noreferrer">
          شاهد البث على YouTube
        </a>
      </div>
    </div>
  );
};

export default LiveStream;