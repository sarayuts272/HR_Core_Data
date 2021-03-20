import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import TransferIn from "./TransferIn";
import TransferOut from "./TransferOut";
import PaymentChange from "./PaymentChange";
import Promotion from "./Promotion";
import Terminate from "./Terminate";
import { axios } from "./../../axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CInput,
  CButton,
  CForm,
  CSelect,
} from "@coreui/react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingBottom: 30,
    //   backgroundColor: theme.palette.background.paper,
    backgroundColor: "white",
    paddingTop: 30,
  },
  background: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#ff3c19",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "50%",
    width: "50%",
    marginTop: 15,
  },
  rootSearch: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(1),
    display: "flex",
    flexBasis: 420,
    width: "70%",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  Search: {
    width: "90%",
  },
  heading2: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "50%",
    width: "80%",
    marginTop: 15,
  },
  text: {
    fontSize: theme.typography.pxToRem(23),
    // flexBasis: "50%",
    marginTop: 10,
  },
}));

export default function KeyAddition() {
  const classes = useStyles();

  const [adjust, setAdjust] = React.useState(0);

  const handleAdjust = (event) => {
    setAdjust(event.target.value);
  };

  const [keyAdditionProfile, setKeyAdditionProfile] = React.useState([]);
  const getKeyAdditionProfile = async () => {
    const response = await axios
      .get("/KeyAddition")
      .catch((err) => console.log("Err: ", err));

    if (response && response.data) {
      setKeyAdditionProfile(response.data);
    }
  };

  React.useEffect(() => {
    getKeyAdditionProfile();
  }, []);

  const [test, setTest] = React.useState([]);
  const handleTest = () => {
    setTest();
  };

  const test1 = () => {
    <button onClick={() => handleTest()}>5555</button>;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 100 }}>
        {/* <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          Key Addition
        </Typography> */}
        <CRow>
          <CCol sm="12" xl="12" style={{ fontSize: 20 }}>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                <CForm inline>
                  <CCol md="10">Key Searching </CCol>

                  <CCol md="2" xl className="mb-3 mb-xl-0">
                    <CButton active block color="light" aria-pressed="true">
                      import
                    </CButton>
                  </CCol>
                </CForm>
              </CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol xs="6" md="6">
                    <CRow>
                      <CCol lg={9}>
                        <CInput className="mr-sm-2" placeholder="Employee ID" />
                      </CCol>
                      <CCol lg={3}>
                        <CButton
                          color="outline-success"
                          className="my-2 my-sm-0"
                          type="submit"
                          size="sm"
                        >
                          Search
                          <SearchIcon />
                        </CButton>
                      </CCol>
                    </CRow>
                  </CCol>

                  <CCol xs="6" md="6">
                    <CRow>
                      <CCol lg={9}>
                        <CInput className="mr-sm-2" placeholder="Name" />
                      </CCol>
                      <CCol lg={3}>
                        <CButton
                          color="outline-success"
                          className="my-2 my-sm-0"
                          type="submit"
                          size="sm"
                        >
                          Search
                          <SearchIcon />
                        </CButton>
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="6" md="6">
                    <CRow>
                      <CCol lg={9}>
                        <CInput className="mr-sm-2" placeholder="Department" />
                      </CCol>
                      <CCol lg={3}>
                        <CButton
                          color="outline-success"
                          className="my-2 my-sm-0"
                          type="submit"
                          size="sm"
                        >
                          Search
                          <SearchIcon />
                        </CButton>
                      </CCol>
                    </CRow>
                  </CCol>

                  <CCol xs="6" md="6">
                    <CRow>
                      <CCol lg={9}>
                        <CInput className="mr-sm-2" placeholder="Section" />
                      </CCol>
                      <CCol lg={3}>
                        <CButton
                          color="outline-success"
                          className="my-2 my-sm-0"
                          type="submit"
                          size="sm"
                        >
                          Search
                          <SearchIcon />
                        </CButton>
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="4" style={{ alignSelf: "center" }}>
                    <center>
                      <img
                        height={200}
                        weight={220}
                        alt=" "
                        src={`${process.env.PUBLIC_URL}/images/user2.png`}
                      />
                    </center>
                  </CCol>

                  <CCol xs="12" md="8">
                    <CRow>
                      <CCol>
                        {/* {keyAdditionProfile &&
                          keyAdditionProfile
                            .filter((value) => {
                              if(){
                                return
                              }
                            })
                            .map((value) => {
                              return (
                                <Typography className={classes.text}>
                                  Name : HR {value.Name}
                                </Typography>
                              );
                            })} */}

                        <Typography className={classes.text}>
                          Name : Sarayut
                        </Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          ID : HR BP
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
                        <Typography className={classes.text}>PL :</Typography>
                      </CCol>
                      <CCol>
                        <Typography className={classes.text}>
                          Salary :
                        </Typography>
                      </CCol>
                    </CRow>
                    <br />

                    <CRow>
                      <CCol lg={10}>
                        <CCard>
                          <CCardHeader style={{ fontSize: "20px" }}>
                            Key Adjust
                          </CCardHeader>
                          <CCardBody>
                            <CCol xs="12" md="12">
                              <CSelect
                                custom
                                name="select"
                                id="select"
                                onChange={handleAdjust}
                              >
                                <option value="0">Please select</option>
                                <option value="1">Transfer In</option>
                                <option value="2">Transfer Out</option>
                                <option value="3">
                                  Probation **** ยังไม่มี
                                </option>
                                <option value="4">Promotion</option>
                                <option value="5">
                                  Secondment **** ยังไม่มี
                                </option>
                                <option value="6">Payment Change</option>
                                <option value="7">Terminate</option>
                              </CSelect>
                            </CCol>
                          </CCardBody>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>
            {adjust === "1" && <TransferIn />}
            {adjust === "2" && <TransferOut />}
            {adjust === "3" && <TransferIn />}
            {adjust === "4" && <Promotion />}
            {adjust === "5" && <TransferIn />}
            {adjust === "6" && <PaymentChange />}
            {adjust === "7" && <Terminate />}
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
