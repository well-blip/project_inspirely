import * as React from "react";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export default function InputVariants() {
  return (
    <Box
      sx={{
        float: "right",
        marginRight: "70%",
        display: "flex",
        gap: 2,
        alignItems: "right",
        paddingBottom: "0px",
      }}
    >
      <Input placeholder="Type in here…" variant="soft" />
      <Button variant="solid">Post </Button>
    </Box>
  );
}
