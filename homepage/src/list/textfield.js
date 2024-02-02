import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function BasicTextFields({ onAddItem }) {
  const [input, setInput] = React.useState("");

  const handleAdd = () => {
    onAddItem(input);
    setInput(""); // Clear the input field after adding
  };
  console.log("onAddItem function received:", onAddItem);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "120px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{
          backgroundColor: "whitesmoke",
          "& .MuiOutlinedInput-root": {
            height: "40px",
          },
          "& .MuiOutlinedInput-input": {
            height: "calc(100% - 20px)",
            padding: "10px 14px",
          },
        }}
      />
      <span>&nbsp;</span>
      <Button
        variant="contained"
        onClick={handleAdd}
        sx={{
          backgroundColor: "#5865F2",
          padding: "0px",
          width: "10px", // Set your desired width
          height: "40px", // Set your desired height
        }}
      >
        Add
      </Button>
    </Box>
  );
}
