import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";


import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CButton,
} from "@coreui/react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingBottom: 50,
    //   backgroundColor: theme.palette.background.paper,
    backgroundColor: "white",
    paddingTop: 30,
  },
  background: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#D1C8C4",
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
  text: {
    fontSize: theme.typography.pxToRem(20),
    // flexBasis: "50%",
    marginTop: 15,
  },
  topname: {
    fontSize: theme.typography.pxToRem(25),
    // flexBasis: "50%",
    marginTop: 15,
    background: "yellow",
  },
}));

export default function JobVacancyApply() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        {/* <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          Job Vacancy
        </Typography> */}

        <CRow>
          <CCol sm="12" xl="12" style={{ fontSize: 20 }}>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                <CRow>
                  <CCol lg={7} style={{display: "flex"}}>Applied Jobs</CCol>
                  <CCol lg={5} style={{display: "flex"}}>
                      <CInput className="mr-sm-2" placeholder="Search Orders" />
                    
                      <CButton
                        color="outline-success"
                        className="my-2 my-sm-0"
                        type="submit"
                        size="sm"
                      >
                        <SearchIcon />
                      </CButton>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <div className="careerfy-typo-wrap">
                  <div className="careerfy-applied-jobs">
                    <ul className="careerfy-column-12">
                      <div className="careerfy-applied-jobs-wrap">
                        <a href="# " className="careerfy-applied-jobs-thumb">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_2.png"
                            alt=" "
                          />
                        </a>
                        <div
                          className="careerfy-applied-jobs-text"
                          style={{ paddingLeft: "50px", alignSelf: "center" }}
                        >
                          <div className="careerfy-applied-jobs-left">
                            <h2>HR</h2>
                            <ul>
                              <li>Job Family</li>
                              <li>Sub Job Family</li>
                              <li>
                                <i className="fa fa-map-marker" /> Rayong
                              </li>

                              <li>
                                <i className="careerfy-icon careerfy-calendar" />{" "}
                                Sep 26, 2017
                              </li>
                            </ul>
                          </div>
                          <a className="careerfy-savedjobs-links">
                            <Box
                              display="flex"
                              flexDirection="row"
                              paddingLeft={5}
                              justifyContent="center"
                            >
                              <CButton
                                color="outline-success"
                                className="my-2 my-sm-0"
                                type="submit"
                                size="m"
                              >
                                <VisibilityIcon />
                              </CButton>
                            </Box>
                          </a>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="careerfy-typo-wrap">
                  <div className="careerfy-applied-jobs">
                    <ul className="careerfy-column-12">
                      <div className="careerfy-applied-jobs-wrap">
                        <a href="# " className="careerfy-applied-jobs-thumb">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_1.png"
                            alt=" "
                          />
                        </a>
                        <div
                          className="careerfy-applied-jobs-text"
                          style={{ paddingLeft: "50px" }}
                        >
                          <div className="careerfy-applied-jobs-left">
                            <h2>Programmer</h2>
                            <ul>
                              <li>Job Family</li>
                              <li>Sub Job Family</li>
                              <li>
                                <i className="fa fa-map-marker" /> Bangkok
                              </li>

                              <li>
                                <i className="careerfy-icon careerfy-calendar" />{" "}
                                Sep 26, 2017
                              </li>
                            </ul>
                          </div>
                          <a className="careerfy-savedjobs-links">
                            <Box
                              display="flex"
                              flexDirection="row"
                              paddingLeft={5}
                              justifyContent="center"
                            >
                              <CButton
                                color="outline-success"
                                className="my-2 my-sm-0"
                                type="submit"
                                size="m"
                              >
                                <VisibilityIcon />
                              </CButton>
                            </Box>
                          </a>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="careerfy-typo-wrap">
                  <div className="careerfy-applied-jobs">
                    <ul className="careerfy-column-12">
                      <div className="careerfy-applied-jobs-wrap">
                        <a href="# " className="careerfy-applied-jobs-thumb">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_3.png"
                            alt=" "
                          />
                        </a>
                        <div
                          className="careerfy-applied-jobs-text"
                          style={{ paddingLeft: "50px" }}
                        >
                          <div className="careerfy-applied-jobs-left">
                            <h2>Programmer</h2>
                            <ul>
                              <li>Job Family</li>
                              <li>Sub Job Family</li>
                              <li>
                                <i className="fa fa-map-marker" /> Rayong
                              </li>

                              <li>
                                <i className="careerfy-icon careerfy-calendar" />{" "}
                                Sep 26, 2017
                              </li>
                            </ul>
                          </div>
                          <a className="careerfy-savedjobs-links">
                            <Box
                              display="flex"
                              flexDirection="row"
                              paddingLeft={5}
                              justifyContent="center"
                            >
                              <CButton
                                color="outline-success"
                                className="my-2 my-sm-0"
                                type="submit"
                                size="m"
                              >
                                <VisibilityIcon />
                              </CButton>
                            </Box>
                          </a>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="careerfy-typo-wrap">
                  <div className="careerfy-applied-jobs">
                    <ul className="careerfy-column-12">
                      <div className="careerfy-applied-jobs-wrap">
                        <a href="# " className="careerfy-applied-jobs-thumb">
                          <img
                           alt=" "
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_4.png"
                            alt=" "
                          />
                        </a>
                        <div
                          className="careerfy-applied-jobs-text"
                          style={{ paddingLeft: "50px" }}
                        >
                          <div className="careerfy-applied-jobs-left">
                            <h2>HR</h2>
                            <ul>
                              <li>Job Family</li>
                              <li>Sub Job Family</li>
                              <li>
                                <i className="fa fa-map-marker" /> Rayong
                              </li>

                              <li>
                                <i className="careerfy-icon careerfy-calendar" />{" "}
                                Sep 26, 2017
                              </li>
                            </ul>
                          </div>
                          <a className="careerfy-savedjobs-links">
                            <Box
                              display="flex"
                              flexDirection="row"
                              paddingLeft={5}
                              justifyContent="center"
                            >
                              <CButton
                                color="outline-success"
                                className="my-2 my-sm-0"
                                type="submit"
                                size="m"
                              >
                                <VisibilityIcon />
                              </CButton>
                            </Box>
                          </a>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
