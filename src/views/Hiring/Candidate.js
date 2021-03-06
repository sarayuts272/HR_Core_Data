import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  CardActions,
  Avatar,
  Link,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import testData from "./testData";
import getInitials from "./getInitials";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";

import {
  CCol,
  CRow,
  CInput,
  CButton,
} from "@coreui/react";

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
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "jobOpening",
    numeric: true,
    disablePadding: false,
    label: "Job Opening",
  },
  {
    id: "rating",
    numeric: true,
    disablePadding: false,
    label: "Rating",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  {
    id: "lastUpdate",
    numeric: true,
    disablePadding: false,
    label: "Last Update",
  },
  { id: "phone", numeric: true, disablePadding: false, label: "Phone" },
  { id: "icon", numeric: true, disablePadding: false, label: "" },
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
    width: "100%",
    paddingTop: "15px"
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

export default function Candidates() {
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
    <div className={classes.root}>
      <CRow>
        <CCol xs="12" md="12">
          <CRow>
            <CCol lg={4}>
              <CInput className="mr-sm-2" placeholder="Employee ID" />
            </CCol>
            <CCol lg={3}>
              <CButton
                color="outline-success"
                className="my-2 my-sm-0"
                type="submit"
                size="m"
              >
                Search
                <SearchIcon />
              </CButton>
            </CCol>
          </CRow>
        </CCol>

        <CCol xl={12} style={{paddingTop: "15px"}}>
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
                  rowCount={testData.length}
                />
                <TableBody>
                  {stableSort(testData, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);

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
                          <TableCell
                          // onClick={() => {
                          //   props.history.push("/profile/" + user.id);
                          // }}
                          >
                            <div className={classes.nameContainer}>
                              <Avatar
                                className={classes.avatar}
                                src={testData.avatarUrl}
                              >
                                {getInitials(testData.name)}
                              </Avatar>
                              <Link style={{ paddingLeft: 20 }} variant="body1">
                                {row.name}
                              </Link>
                            </div>
                          </TableCell>
                          {/* <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        style={{ paddingRight: 200 }}
                        align="left"
                      >
                        {row.name}
                      </TableCell> */}
                          <TableCell align="right">{row.jobOpening}</TableCell>
                          <TableCell align="right">{row.rating}</TableCell>
                          <TableCell align="right">{row.status}</TableCell>
                          <TableCell align="right">{row.lastUpdate}</TableCell>
                          <TableCell align="right">{row.phone}</TableCell>
                          <TableCell align="right">
                            <Box
                              display="flex"
                              flexDirection="row"
                              paddingLeft={5}
                              justifyContent="center"
                            >
                              <Box m={1}>
                                <DescriptionIcon color="action" />
                              </Box>
                              <Box m={1}>
                                <EmailIcon color="action" />
                              </Box>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <CardActions className={classes.actions}>
              <Typography style={{ flexGrow: 1, marginLeft: 10 }}>
                Total Employee: {testData.length}{" "}
              </Typography>
              <TablePagination
                style={{ flexGrow: 8 }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={testData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </CardActions>
          </Paper>
        </CCol>
      </CRow>
    </div>
  );
}
