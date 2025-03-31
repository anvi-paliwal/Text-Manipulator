import React from "react";

const Alert = ({ alert }) => {
  const capitalize = (word) => {
    return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          <strong>{capitalize(alert.type)}</strong> : {alert.message}
        </div>
      )}
    </div>
  );
};

export default Alert;
