import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import updateDataTest from "./updateDataTest";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";

import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import { CardActions } from "@material-ui/core";

import { CCard, CCardBody, CCol, CRow, CFormGroup } from "@coreui/react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "item",
    numeric: false,
    disablePadding: false,
    label: "Item",
  },
  {
    id: "by",
    numeric: false,
    disablePadding: false,
    label: "By",
  },
  {
    id: "module",
    numeric: false,
    disablePadding: false,
    label: "Module",
  },
  { id: "date", numeric: false, disablePadding: false, label: "Date" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80",
    paddingBottom: 50,
    //   backgroundColor: theme.palette.background.paper,
    backgroundColor: "white",
    paddingTop: 30,
  },
  media: {
    height: 200,
  },
  rootcard: {
    flexGrow: 1,
    width: "70%",
  },
  heading: {
    color: "gray",
  },
  padding1: {
    paddingTop: 15,
    paddingLeft: 80,
    paddingRight: 70,
  },
  text: {
    fontSize: theme.typography.pxToRem(23),
    // flexBasis: "50%",
    marginTop: 10,
  },
  topcontent: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  topname: {
    fontSize: theme.typography.pxToRem(25),
    // flexBasis: "50%",
    marginTop: 15,
  },
  padding2: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 10,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  rootSearch: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(1),
    display: "flex",
    flexBasis: 420,
  },
  spacer: {
    flexGrow: 1,
  },
  row2: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function EmployeeUpdate(props) {
  const classes = useStyles();

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        <CRow>
          <CCol sm="12" xl="12">
            <CCard>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="4">
                    <center>
                      <img
                        alt=" "
                        src={`${process.env.PUBLIC_URL}/images/avatars/avatar_1.png`}
                        style={{
                          position: "relative",
                          zIndex: 20,
                          borderRadius: "50%",
                          width: "200px",
                          height: "200px",
                          display: "block",
                          objectFit: "cover",
                          transition: "all 0.3s ease",
                        }}
                      />

                      <CCol>
                        <h2>0090-100844</h2>
                      </CCol>
                    </center>
                  </CCol>

                  <CCol xs="12" md="8" style={{ alignSelf: "center" }}>
                    <h1>Sarayut Test</h1>
                    <CRow>
                      <CCol>
                        <Typography className={classes.text}>
                          <div style={{ color: "gray", display: "inline", fontWeight: "bold" }}>
                            DEPARTMENT:
                          </div>{" "}
                          HR
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          <div style={{ color: "gray", display: "inline", fontWeight: "bold" }}>
                            SECTION:
                          </div>{" "}
                          HR BP
                        </Typography>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol>
                        <Typography className={classes.text}>
                          <div style={{ color: "gray", display: "inline", fontWeight: "bold" }}>
                            POSITION:
                          </div>{" "}
                          HR
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          <div style={{ color: "gray", display: "inline", fontWeight: "bold" }}>
                            PL:
                          </div>{" "}
                          S4
                        </Typography>
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>

            <Paper className={classes.paper}>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={updateDataTest.length}
                  />
                  <TableBody>
                    {stableSort(updateDataTest, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={{}}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.name}
                            selected={isItemSelected}
                          >
                            {/* <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        style={{ paddingRight: 200 }}
                        align="left"
                      >
                        {row.name}
                      </TableCell> */}
                            <TableCell align="left">{row.item}</TableCell>
                            <TableCell align="left">{row.by}</TableCell>
                            <TableCell align="left">{row.module}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <CardActions className={classes.actions}>
                <Typography style={{ flexGrow: 1, marginLeft: 10 }}>
                  Total Employee: {updateDataTest.length}{" "}
                </Typography>
                <TablePagination
                  style={{ flexGrow: 8 }}
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={updateDataTest.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </CardActions>
            </Paper>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
