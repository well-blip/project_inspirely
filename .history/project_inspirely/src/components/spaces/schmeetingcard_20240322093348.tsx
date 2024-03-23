import React, { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import ScheduleMeeting from './ScheduleMeeting'; // Importing the ScheduleMeeting component

const SchMeetingCard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ScheduleMeeting />
        </Box>
      </Modal>
    </div>
  );
};

export default SchMeetingCard;
