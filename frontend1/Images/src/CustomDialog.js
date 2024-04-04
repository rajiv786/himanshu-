import React from 'react';

const CustomDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="custom-dialog">
      <p>{message}</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default CustomDialog;
