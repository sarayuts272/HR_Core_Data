import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
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

export default function JobVacancyListsAdmin() {
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
              <CCardHeader style={{ fontSize: 25 }}>Job Vacancy Lists</CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <div className="careerfy-employer careerfy-employer-list">
                    <div className="careerfy-column-12">
                      <div className="careerfy-table-layer">
                        <div className="careerfy-table-row">
                          <div className="careerfy-table-cell">
                            <figure style={{paddingRight: "25px"}}>
                              <a href="# ">
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/avatars/avatar_1.png`}
                                  alt=" "
                                />
                              </a>
                            </figure>
                            <h2 style={{ fontSize: "25px" }}>Programmer</h2>
                            <span style={{ fontSize: "15px" }}>
                              Job Family | Sub Job Family
                            </span>
                          </div>
                          <div className="careerfy-table-cell">
                            <ul className="careerfy-employer-thumblist">
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_1.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_2.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_3.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_4.png" />
                                </a>
                              </li>
                            </ul>
                            <a
                              href="# "
                              className="careerfy-employer-thumblist-size"
                            >
                              +3 people apply
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              6 vacancies
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CFormGroup>

                <CFormGroup row>
                  <div className="careerfy-employer careerfy-employer-list">
                    <div className="careerfy-column-12">
                      <div className="careerfy-table-layer">
                        <div className="careerfy-table-row">
                          <div className="careerfy-table-cell">
                            <figure style={{paddingRight: "25px"}}>
                              <a href="# ">
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/avatars/avatar_1.png`}
                                  alt=" "
                                />
                              </a>
                            </figure>
                            <h2 style={{ fontSize: "25px" }}>Programmer</h2>
                            <span style={{ fontSize: "15px" }}>
                              Job Family | Sub Job Family
                            </span>
                          </div>
                          <div className="careerfy-table-cell">
                            <ul className="careerfy-employer-thumblist">
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_1.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_2.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_3.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_4.png" />
                                </a>
                              </li>
                            </ul>
                            <a
                              href="# "
                              className="careerfy-employer-thumblist-size"
                            >
                              +3 people apply
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              6 vacancies
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CFormGroup>

                <CFormGroup row>
                  <div className="careerfy-employer careerfy-employer-list">
                    <div className="careerfy-column-12">
                      <div className="careerfy-table-layer">
                        <div className="careerfy-table-row">
                          <div className="careerfy-table-cell">
                            <figure style={{paddingRight: "25px"}}>
                              <a href="# ">
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/avatars/avatar_1.png`}
                                  alt
                                />
                              </a>
                            </figure>
                            <h2 style={{ fontSize: "25px" }}>Programmer</h2>
                            <span style={{ fontSize: "15px" }}>
                              Job Family | Sub Job Family
                            </span>
                          </div>
                          <div className="careerfy-table-cell">
                            <ul className="careerfy-employer-thumblist">
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_1.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_2.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_3.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_4.png" />
                                </a>
                              </li>
                            </ul>
                            <a
                              href="# "
                              className="careerfy-employer-thumblist-size"
                            >
                              +3 people apply
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              6 vacancies
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CFormGroup>

                <CFormGroup row>
                  <div className="careerfy-employer careerfy-employer-list">
                    <div className="careerfy-column-12">
                      <div className="careerfy-table-layer">
                        <div className="careerfy-table-row">
                          <div className="careerfy-table-cell">
                            <figure style={{paddingRight: "25px"}}>
                              <a href="# ">
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/avatars/avatar_1.png`}
                                  alt=" "
                                />
                              </a>
                            </figure>
                            <h2 style={{ fontSize: "25px" }}>Programmer</h2>
                            <span style={{ fontSize: "15px" }}>
                              Job Family | Sub Job Family
                            </span>
                          </div>
                          <div className="careerfy-table-cell">
                            <ul className="careerfy-employer-thumblist">
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_1.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_2.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_3.png" />
                                </a>
                              </li>
                              <li>
                                <a href="# ">
                                  <img alt=" " src="/images/avatars/avatar_4.png" />
                                </a>
                              </li>
                            </ul>
                            <a
                              href="# "
                              className="careerfy-employer-thumblist-size"
                            >
                              +3 people apply
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              6 vacancies
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
