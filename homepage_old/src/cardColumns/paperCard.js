import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function Variants() {
  return (
    <Stack direction="row" spacing={2} sx={{ margin: "30px" }}>
      <DemoPaper variant="elevation" sx={{ backgroundColor: "wheat" }}>
        Notepad for Quick Notes
      </DemoPaper>
    </Stack>
  );
}
