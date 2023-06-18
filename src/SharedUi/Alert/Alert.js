import React, { useState } from "react";

import { CAlert } from "@coreui/react";
import "./Alert.css";

const Alert = ({ message, type, color ,visible, setVisible }) => {
  return (
    <CAlert
      className={type}
      visible={visible}
      color={color}
      dismissible
      onClose={() => setVisible(false)}
    >
      <strong> عذرا..! </strong> {message}
    </CAlert>
  );
};


export default Alert;
