import React from 'react';
import axios from 'axios';

const AdminButton = ({ fileId }) => {
  const handleAccept = async () => {
    try {
      await axios.put(`http://localhost:5000/Otp/api/images/${fileId}`, { status: 'accepted' });
      alert('Status updated to "accepted"');
    } catch (error) {
      console.error(error);
      alert('Failed to update status.');
    }
  };

  const handleReject = async () => {
    try {
      await axios.put(`http://localhost:5000/Otp/api/images/${fileId}`, { status: 'rejected' });
      alert('Status updated to "rejected"');
    } catch (error) {
      console.error(error);
      alert('Failed to update status.');
    }
  };

  return (
    <div>
      
    </div>
  );
};

export default AdminButton;
