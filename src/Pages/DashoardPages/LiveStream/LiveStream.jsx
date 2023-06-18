import React, { useState } from "react";

const CreateLiveStream = () => {
  const [channelID, setChannelID] = useState("");
  const [streamTitle, setStreamTitle] = useState("");
  const [streamDescription, setStreamDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Channel ID: ", channelID);
    console.log("Stream Title: ", streamTitle);
    console.log("Stream Description: ", streamDescription);
    // Add code to create live stream here
  };

  return (
    <div className="container mt-5">
      <h1>إنشاء بث مباشر</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="channelID" className="form-label">
            رابط البث المباشر
          </label>
          <input
            type="text"
            className="form-control"
            id="channelID"
            placeholder="أدخل  رابط البث المباشر"
            value={channelID}
            onChange={(event) => setChannelID(event.target.value)}
          />
          <div className="form-text">
            رابط البث على YouTube .
          </div>
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
          <div className="form-text">
            عنوان البث المباشر.
          </div>
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
          <div className="form-text">
            وصف مختصر للبث المباشر.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          إنشاء
        </button>
      </form>
    </div>
  );
};

export default CreateLiveStream;