import  { useEffect, useState, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { fetchDocuments, deleteDocument } from "../src/firebaseConfig"; // Adjust paths as needed

export default function BasicTable() {
  const [rows, setRows] = useState([]);

  const refreshDocuments = useCallback(async () => {
    const docs = await fetchDocuments();
    setRows(docs);
  }, []);

  useEffect(() => {
    refreshDocuments();
  }, [refreshDocuments]);

  const handleDelete = async (docId) => {
    await deleteDocument(docId);
    refreshDocuments(); // Refresh the documents list after deletion
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Delete</TableCell>{" "}
            {/* New Delete Column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <a href={row.pathDoc} target="_blank" rel="noopener noreferrer">
                  {row.title}
                </a>
              </TableCell>
              <TableCell align="right">
                <a href={row.pathDoc} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </TableCell>
              <TableCell align="right">
                <Button onClick={() => handleDelete(row.id)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
