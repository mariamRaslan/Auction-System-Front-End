import React from 'react';
import './BlobButton.scss';

const BlobButton = ({ buttonText, href }) => {
  const linkProps = href ? { href } : {};

  return (
    <a className="blob-btn" {...linkProps}>
      {buttonText}
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>
    </a>
  );
};

export default BlobButton;