import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CInput,
  CButton,
  CSelect,
  CTextarea,
  CLabel,
} from "@coreui/react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingBottom: 30,
    //   backgroundColor: theme.palette.background.paper,
    backgroundColor: "white",
    // paddingTop: 30,
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

export default function JobVacancyCreate() {
  const classes = useStyles();

  const [adjust, setAdjust] = React.useState(0);

  const handleAdjust = (event) => {
    setAdjust(event.target.value);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 100 }}>
        {/* <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          Job Vacancy
        </Typography> */}
        <CRow>
          <CCol sm="12" xl="12" style={{ fontSize: 20 }}>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                Job Vacancy Create
              </CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol  lg={12}>
                        <CLabel htmlFor="textarea-input">Job Position</CLabel>
                      </CCol>
                      <CCol  xs="12" md="12" lg="9">
                        <CInput
                          className="mr-sm-2"
                          placeholder="Job Position"
                        />
                      </CCol>
                      <CCol xs="12" md="12"  lg="3">
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

                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol lg={12}>
                        <CLabel htmlFor="textarea-input">Job Group</CLabel>
                        <CSelect
                          custom
                          name="select"
                          id="select"
                          onChange={handleAdjust}
                        >
                          <option value="0">Select Job Group</option>
                          <option value="1">Transfer In</option>
                          <option value="2">Transfer Out</option>
                          <option value="3">Probation **** ยังไม่มี</option>
                          <option value="4">Promotion</option>
                          <option value="5">Secondment **** ยังไม่มี</option>
                          <option value="6">Payment Change</option>
                          <option value="7">Terminate</option>
                        </CSelect>
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol lg={12}>
                        <CLabel htmlFor="textarea-input">Sub Job Group</CLabel>
                        <CSelect
                          custom
                          name="select"
                          id="select"
                          onChange={handleAdjust}
                        >
                          <option value="0">Select Sub Job Group</option>
                          <option value="1">Transfer In</option>
                          <option value="2">Transfer Out</option>
                          <option value="3">Probation **** ยังไม่มี</option>
                          <option value="4">Promotion</option>
                          <option value="5">Secondment **** ยังไม่มี</option>
                          <option value="6">Payment Change</option>
                          <option value="7">Terminate</option>
                        </CSelect>
                      </CCol>
                    </CRow>
                  </CCol>

                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol lg={12}>
                        <CLabel htmlFor="textarea-input">Location</CLabel>
                        <CSelect
                          custom
                          name="select"
                          id="select"
                          onChange={handleAdjust}
                        >
                          <option value="0">Select Location</option>
                          <option value="1">Transfer In</option>
                          <option value="2">Transfer Out</option>
                          <option value="3">Probation **** ยังไม่มี</option>
                          <option value="4">Promotion</option>
                          <option value="5">Secondment **** ยังไม่มี</option>
                          <option value="6">Payment Change</option>
                          <option value="7">Terminate</option>
                        </CSelect>
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol lg={12}>
                        <CLabel htmlFor="textarea-input">Department</CLabel>
                        <CSelect
                          custom
                          name="select"
                          id="select"
                          onChange={handleAdjust}
                        >
                          <option value="0">Select Department</option>
                          <option value="1">Transfer In</option>
                          <option value="2">Transfer Out</option>
                          <option value="3">Probation **** ยังไม่มี</option>
                          <option value="4">Promotion</option>
                          <option value="5">Secondment **** ยังไม่มี</option>
                          <option value="6">Payment Change</option>
                          <option value="7">Terminate</option>
                        </CSelect>
                      </CCol>
                    </CRow>
                  </CCol>

                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol lg={12}>
                        <CLabel htmlFor="textarea-input">Company</CLabel>
                        <CSelect
                          custom
                          name="select"
                          id="select"
                          onChange={handleAdjust}
                        >
                          <option value="0">Select Company</option>
                          <option value="1">Transfer In</option>
                          <option value="2">Transfer Out</option>
                          <option value="3">Probation **** ยังไม่มี</option>
                          <option value="4">Promotion</option>
                          <option value="5">Secondment **** ยังไม่มี</option>
                          <option value="6">Payment Change</option>
                          <option value="7">Terminate</option>
                        </CSelect>
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol xs="12" md="12">
                    <CRow>
                      <CCol lg={12}>
                        <CLabel htmlFor="textarea-input">Description</CLabel>
                        <CTextarea
                          name="textarea-input"
                          id="textarea-input"
                          rows="10"
                          placeholder="Job Description..."
                          style={{ resize: "none" }}
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
