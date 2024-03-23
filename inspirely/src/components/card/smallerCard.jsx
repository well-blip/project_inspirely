import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import hackathonImg from "../assets/hackathon.jpg";

export default function RowCard() {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 300 }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 100 }}>
          <img src={hackathonImg} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          Hackathon
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          justifyContent: "center",
          fontSize: "xs",
          fontWeight: "xl",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderLeft: "1px solid",
          borderColor: "divider",
        }}
      >
        Ticket
      </CardOverflow>
    </Card>
  );
}
