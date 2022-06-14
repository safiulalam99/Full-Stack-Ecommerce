import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Container } from "@material-ui/core";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("aasdhjdgasukhfgasfvjhasgfaaskhjfg", 159, 6.0, 24, 4.0),
  createData("aasdhjdgasukhfgasfvjhasgfaaskhjfg", 237, 9.0, 37, 4.3),
  createData("aasdhjdgasukhfgasfvjhasgfaaskhjfg", 262, 16.0, 24, 6.0),
  createData("aasdhjdgasukhfgasfvjhasgfaaskhjfg", 305, 3.7, 67, 4.3),
  createData("aasdhjdgasukhfgasfvjhasgfaaskhjfg", 356, 16.0, 49, 3.9),
];

export default function UserTable() {
 const admin= true;
  return (
    <>
      <Container style={{maxWidth: "lg", paddingTop:'34'}} >
      <Box sx={{ m: 3, mt:4,  }} style={{float:'right'}}>
      <Button variant="contained">Create User</Button>
      </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "sm", minHeight:"sm" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right"> Admin</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">
                    {admin ? <CheckIcon style={{color:'green'}} /> : <ClearIcon style={{color:'red'}} />}
                    </StyledTableCell>
                  <StyledTableCell align="right">
                  <IconButton aria-label="edit" size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton  style={{color:"red"}} aria-label="delete" size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
