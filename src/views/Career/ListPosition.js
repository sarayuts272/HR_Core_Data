import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: "80",
    paddingBottom: 50,
    //   backgroundColor: theme.palette.background.paper,
    backgroundColor: "white",
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    color: "#37474f",
  },
  card: {
    border: "2px solid",
    // borderColor: "#cfd8dc",
    borderColor: "#ffd54f",
    borderRadius: 12,
    backgroundColor: "#fff",
    width: 300,
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "50%",
    width: "50%",
    marginTop: 15,
  },
  padding1: {
    paddingTop: 15,
    paddingLeft: 80,
    paddingRight: 70,
  },
  table: {
    minWidth: 700,
  }
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default function Career(props) {
  const classes = useStyles();

  const listPosition = [
    { position: "HR Manager", jobfamily: "HR", subjobfamily: "HRBP" },
    { position: "HR Manager", jobfamily: "HR", subjobfamily: "HRBP" },
    { position: "HR Manager", jobfamily: "HR", subjobfamily: "HRBP" },
    { position: "HR Manager", jobfamily: "HR", subjobfamily: "HRBP" },
    { position: "HR Manager", jobfamily: "HR", subjobfamily: "HRBP" },
    { position: "HR Manager", jobfamily: "HR", subjobfamily: "HRBP" },
    { position: "HR Manager", jobfamily: "HR", subjobfamily: "HRBP" },
    { position: "CSR Manager", jobfamily: "CSR", subjobfamily: "aaaaaa" },
    { position: "CSR Manager", jobfamily: "CSR", subjobfamily: "aaaaaa" },
    { position: "CSR Manager", jobfamily: "CSR", subjobfamily: "aaaaaa" },
    { position: "CSR Manager", jobfamily: "CSR", subjobfamily: "aaaaaa" },
  ]


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        <div className={classes.root}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Position</StyledTableCell>
                  <StyledTableCell align="right">Job Family</StyledTableCell>
                  <StyledTableCell align="right">Sub Job Family</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listPosition.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.position}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.jobfamily}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.subjobfamily}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </React.Fragment>
  );
}
