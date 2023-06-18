import React, { useEffect } from "react";
import "./LiveStream.css"

const LiveStream = () => {

  return (
    <div className="container" dir="rtl ">
      <div id="header">
        <h1 className="ms-3">عنوان البث مباشر </h1>
        {/* <span>المزاد الحالي</span> */}
      </div>

      <div id="stream-container">
        {/* stream */}
        <div id="stream-embed-wrapper " style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            id="stream-embed-iframe"
            width="820"
            height="450"
            src="https://www.youtube.com/embed/live_stream?channel=UC0nZ5FTveaBz-qbEuhQIToQ"
            frameBorder="0"
            allowFullScreen
            style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
          ></iframe>
        </div>

        <div className="clear_both"></div>
      </div>

      <div id="footer">
        <div className="text-end ms-3 me-3 text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis doloremque harum dolor pariatur consectetur earum ab? Quis, id, molestiae nulla, laboriosam nostrum quaerat 
          temporibus dignissimos impedit in quisquam nobis! Optio.</div>
        <a
          className=""
          href="https://www.youtube.com/channel/UC0nZ5FTveaBz-qbEuhQIToQ/live"
          target="_blank"
          rel="noopener noreferrer"
        >
          شاهد البث على YouTube
        </a>
      </div>
    </div>
  );
};

export default LiveStream;