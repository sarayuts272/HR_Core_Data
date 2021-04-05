import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { TextField, Grid } from "@material-ui/core";
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
  text: {
    fontSize: theme.typography.pxToRem(20),
    // flexBasis: "50%",
    marginTop: 10,
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
          <CCol sm="12" md="12" xl="12">
            <CCard>
              <CCardBody>
                <CFormGroup row>
                  <CCol xs="12" md="12" xl="4">
                    <center>
                      {/* <img
                        alt=" "
                        height={200}
                        weight={220}
                        src={`${process.env.PUBLIC_URL}/images/user2.png`}
                      /> */}
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
                    </center>
                  </CCol>

                  <CCol xs="12" md="12" xl="8">
                    <h1>Sarayut Test</h1>
                    <CRow>
                      <CCol>
                        <Typography className={classes.text}>
                          <div
                            style={{
                              color: "gray",
                              display: "inline",
                              fontWeight: "bold",
                            }}
                          >
                            JOB GROUP:
                          </div>{" "}
                          HR
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          <div
                            style={{
                              color: "gray",
                              display: "inline",
                              fontWeight: "bold",
                            }}
                          >
                            SUB JOB GROUP:
                          </div>{" "}
                          BP
                        </Typography>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol>
                        <Typography className={classes.text}>
                          <div
                            style={{
                              color: "gray",
                              display: "inline",
                              fontWeight: "bold",
                            }}
                          >
                            DEPARTMENT:
                          </div>{" "}
                          HR TPE
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          <div
                            style={{
                              color: "gray",
                              display: "inline",
                              fontWeight: "bold",
                            }}
                          >
                            SECTION:
                          </div>{" "}
                          HR
                        </Typography>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol>
                        <Typography className={classes.text}>
                          <div
                            style={{
                              color: "gray",
                              display: "inline",
                              fontWeight: "bold",
                            }}
                          >
                            PL:
                          </div>{" "}
                          Ml
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          <div
                            style={{
                              color: "gray",
                              display: "inline",
                              fontWeight: "bold",
                            }}
                          >
                            SALARY:
                          </div>{" "}
                          82000
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
                  <CCol>
                  <Grid container>
                    {/* test */}
                    {edit.map((name, index) => (
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                          <CButton
                            color="outline-success"
                            className="my-2 my-sm-0"
                            type="submit"
                            size="l"
                            disabled
                            style={{fontSize: "20px"}}
                          >
                            {index + 1} Career Inspiration
                          </CButton>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Typography className={classes.text}>
                            <div style={{ fontWeight: "bold", color: "GrayText" }}>Job Family</div>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                          <Typography className={classes.text}>
                            <div style={{ fontWeight: "bold", color: "GrayText" }}>Position</div>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                          <TextField
                            id="outlined-basic"
                            size="small"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} lg={4}>
                          <Typography className={classes.text}>
                            <div style={{ fontWeight: "bold", color: "GrayText" }}>Reason</div>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} lg={8}>
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
                    >
                      <AddCircleOutlineIcon
                        onClick={() => addBox()}
                        style={{ fontSize: 50 }}
                        color="action"
                      ></AddCircleOutlineIcon>
                    </Grid>
                  </Grid></CCol>
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
