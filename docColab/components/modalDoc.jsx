import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import { addDocument } from "../src/firebaseConfig"; // Adjust this import path to where your addDocument function is located

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [docTitle, setDocTitle] = useState(""); // State to hold the document title

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateDocument = async () => {
    // Generate a unique part for the pathDoc
    const tempName = Date.now(); // This is just an example; you can make it more sophisticated
    const pathDoc = `https://pad.riseup.net/p/${tempName}`;

    // Add the document to Firestore
    await addDocument({
      title: docTitle,
      pathDoc: pathDoc,
    });

    // Optionally, navigate to the document or close the modal
    setOpen(false); // Close the modal after creation
    window.location.href = pathDoc; // Or navigate to the document's URL
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <AddIcon sx={{ color: "white" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Document
          </Typography>
          <div className="spacer" style={{ height: "10px" }}></div>
          <TextField
            required
            id="outlined-required"
            label="Document Title"
            defaultValue=""
            onChange={(e) => setDocTitle(e.target.value)} // Update the docTitle state when the input changes
          />
          <div
            className="spacer"
            style={{ height: "30px", width: "0px" }}
          ></div>
          <Button
            variant="contained"
            color="success"
            onClick={handleCreateDocument}
          >
            Create
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
