import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Stack,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profilePicImg from "../../assets/tech-man.jpg";

export default function SocialPostCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar alt="Sam Guy" src={profilePicImg} />
          <Box>
            <Typography variant="subtitle2" component="div">
              Mark Walson
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @markWalson
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="small">
            <MoreHorizIcon fontSize="inherit" />
          </IconButton>
        </Stack>
        <Typography variant="body1" gutterBottom>
          Prominent Speakers to visit Heriot Watt Today !
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            110
          </Typography>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            32
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton aria-label="share">
            <ShareOutlinedIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
