import React from 'react';
import { Alert } from '@material-ui/lab';

const Notification = ({ notification }) => {
  if (!notification) {
    return null;
  }

  if (notification.style === 'success') {
    return (
      <div>
        <Alert severity="success">{notification.notification}</Alert>
      </div>
    );
  } else {
    return (
      <div>
        <Alert severity="warning">{notification.notification}</Alert>
      </div>
    );
  }
};

export default Notification;
