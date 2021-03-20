import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  TextField,
  Grid,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CCardFooter,
  CButton,
} from "@coreui/react";

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
}));

export default function Career(props) {
  const classes = useStyles();

  //   test
  const [count, setCount] = React.useState(1);
  const [edit, setEdit] = React.useState([count]);
  function addBox() {
    if (count < 3) {
      setCount(count + 1);
      setEdit([...edit, count + 1]);
    }
  }

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
                        height={200}
                        weight={220}
                        src={`${process.env.PUBLIC_URL}/images/user2.png`}
                      />
                    </center>
                  </CCol>

                  <CCol xs="12" md="8">
                    <h1>Sarayut Test</h1>
                    <CRow>
                      <CCol>
                        <Typography className={classes.text}>
                          Job Group : HR
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          Sub Job Group : HR BP
                        </Typography>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol>
                        <Typography className={classes.text}>
                          Department : HR TPE
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          Section : HR
                        </Typography>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol>
                        <Typography className={classes.text}>
                          PL : Ml
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          Salary : 82000
                        </Typography>
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                My Career Inspiration
              </CCardHeader>
              <CCardBody>
                <div className={classes.root}>
                  <Grid container className={classes.padding1}>
                    {/* test */}
                    {edit.map((name, index) => (
                      <Grid container spacing={3} className={classes.padding1}>
                        <Grid item xs={4} lg={4}>
                          <Typography className={classes.text}>
                            {index + 1}. Job Family
                          </Typography>
                        </Grid>
                        <Grid item xs={8} lg={8}>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={4} lg={4}>
                          <Typography className={classes.text}>
                            {index + 1}. Position
                          </Typography>
                        </Grid>
                        <Grid item xs={8} lg={8}>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={4} lg={4}>
                          <Typography className={classes.text}>
                            {index + 1}. Reason
                          </Typography>
                        </Grid>
                        <Grid item xs={8} lg={8}>
                          <TextField
                            id="outlined-basic"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    ))}

                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                      className={classes.padding1}
                    >
                      <AddCircleOutlineIcon
                        onClick={() => addBox()}
                        style={{ fontSize: 50 }}
                        color="action"
                      ></AddCircleOutlineIcon>
                    </Grid>
                  </Grid>
                </div>

                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary">
                    <AdjustOutlinedIcon /> Submit
                  </CButton>{" "}
                  <CButton type="reset" size="sm" color="danger">
                    <BlockOutlinedIcon /> Reset
                  </CButton>
                </CCardFooter>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
