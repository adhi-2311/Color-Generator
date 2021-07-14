import React, { useEffect, useState } from "react";
import rgbToHex from "../utils";
import {FaCopy} from "react-icons/fa";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  function changeAlert() {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      onClick={changeAlert}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <i className="copy">
        <FaCopy />
      </i>
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </div>
  );
}

export default SingleColor;
