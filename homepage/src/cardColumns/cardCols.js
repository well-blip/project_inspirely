import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginLeft: 15,
        marginTop: "30px",
        boxShadow: 2,
        transition: 'box-shadow 0.3s ease-in-out',
        "&:hover": { boxShadow: 0 },
      }}
    >
      <CardActionArea sx={{ marginLeft: 2.5 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://dropinblog.net/34244813/files/featured/1_4r4x8mggXOEYz1vU7tCdAw.jpeg"
          alt="Notes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Attendance Sheet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Attention Students! Just a friendly reminder about attendance in
            Biology - 1.
          </Typography>
          <Button variant="outlined" sx={{ mx: "auto", marginLeft: 5 }}>
            <></>
            View Attendance
          </Button>
          <IconButton aria-label="favourite" size="small">
            <FavoriteIcon
              style={{ color: "red", fontSize: "25", alignContent: "right" }}
            />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
