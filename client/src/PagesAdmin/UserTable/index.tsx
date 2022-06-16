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
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Container } from "@material-ui/core";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import moment from "moment";

import { getAdminUsers } from "../../redux/apiCalls";
import { useEffect } from "react";

export interface UserType {
  isAdmin: boolean;
 role: string;
 _id: string;
 username: string;
 email: string;
 createdAt: string;
 updatedAt:string;
}


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


export default function UserTable() {

  const dispatch = useAppDispatch();
  const fetchedUser = useAppSelector((state:any) => state.adminUser.user);
  
  useEffect(() => {
    getAdminUsers(dispatch);
  }, []);
  return (
    <>
      <Container style={{ maxWidth: "lg", paddingTop: "34" }}>
        <Box sx={{ m: 3, mt: 4 }} style={{ float: "right" }}>
        </Box>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: "sm", minHeight: "sm" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Created</StyledTableCell>
                <StyledTableCell align="right"> Admin</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fetchedUser?.map((user:UserType) => (
                <StyledTableRow key={user._id}>
                  <StyledTableCell component="th" scope="row">
                    {user._id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">{moment(user.createdAt).fromNow()}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.isAdmin ? (
                      <CheckIcon style={{ color: "green" }} />
                    ) : (
                      <ClearIcon style={{ color: "red" }} />
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton aria-label="edit" size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      style={{ color: "red" }}
                      aria-label="delete"
                      size="small"
                    >
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
