import React from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import GifBoxIcon from "@mui/icons-material/GifBox";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import profilePicImg from "../assets/sam_guy.jpg";
import DateCalendarValue from "../calender/calender";
export default function WhatsHappening() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingTop: "10px",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt="Profile Picture" src={profilePicImg} />
        <TextField
          fullWidth
          placeholder="What's Happening?"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          multiline
          rows={1}
          sx={{ ml: 1 }}
        />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton edge="start">
          <PhotoIcon />
        </IconButton>
        <IconButton>
          <GifBoxIcon />
        </IconButton>
        <IconButton>
          <SentimentSatisfiedAltIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" disableElevation>
          Post
        </Button>
      </Stack>
    </Box>
  );
}
