import * as React from "react";
import Box from "@mui/material/Box";
import ButtonAppBar from "./topBar";
import BasicTable from "./table";

export default function BoxBasic() {
  return (
    <Box
      component="section"
      sx={{ p: 2, border: "1px dashed grey", width: "500px" }}
    >
      <ButtonAppBar />
      <BasicTable />
    </Box>
  );
}
