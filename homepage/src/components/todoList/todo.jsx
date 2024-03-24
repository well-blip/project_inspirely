import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
function Todo() {
  let [items, setNewItems] = useState(["Try New Features !"]);
  return (
    <Box
      sx={{
        bgcolor: "whitesmoke",
        height: "50vh",
        marginRight: "25px",
        marginTop: "20px",
      }}
    >
      <div className="TodoList">
        <input
          type="text"
          id="inputText"
          style={{
            backgroundColor: "white",
            color: "black",
            width: "90%",
            border: "none",
            borderRadius: "10px",
            height: "25px",
            position: "relative",
            left: "10px",
            top: "5px",
          }}
          placeholder="Add Item"
        ></input>
        <button
          onClick={() => {
            setNewItems((prevItems) => {
              return [...prevItems, document.getElementById("inputText").value];
            });
            document.getElementById("inputText").value = "";
          }}
          style={{
            backgroundColor: "blue",
            width: "90%",
            position: "relative",
            top: "20px",
            left: "12px",
          }}
        >
          Add
        </button>
        <div
          className="itemContainer"
          style={{
            borderWidth: "1px",
            width: "98%",
            height: "300px",
            borderStyle: "solid",
            position: "relative",
            top: "30px",
            borderColor: "whitesmoke",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {items.map((item, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={item}
                sx={{ color: "black" }}
              />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}
export default Todo;
