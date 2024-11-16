import React from "react";
import { useLocation } from "react-router-dom";

const PaintDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  

  return (
    <div>
      <h1>Paint Details</h1>
      <p>Selected Type: {type}</p>
    </div>
  );
};

export default PaintDetails;
