import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";

export default function JobVacancyLists() {

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
                Job Vacancy Lists
              </CCardHeader>
              <CCardBody>
                <div className="careerfy-typo-wrap">
                  <div className="careerfy-applied-jobs">
                    <ul className="careerfy-column-12">
                      <div className="careerfy-applied-jobs-wrap">
                        <a href="# " className="careerfy-applied-jobs-thumb">
                          <img
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
                            <CButton
                              color="outline-success"
                              className="my-2 my-sm-0"
                              type="submit"
                              size="m"
                            >
                              View Detail
                            </CButton>
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
                            <CButton
                              color="outline-success"
                              className="my-2 my-sm-0"
                              type="submit"
                              size="m"
                            >
                              View Detail
                            </CButton>
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
                            <CButton
                              color="outline-success"
                              className="my-2 my-sm-0"
                              type="submit"
                              size="m"
                            >
                              View Detail
                            </CButton>
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
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                            }}
                            src="/images/avatars/avatar_5.png"
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
                            <CButton
                              color="outline-success"
                              className="my-2 my-sm-0"
                              type="submit"
                              size="m"
                            >
                              View Detail
                            </CButton>
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
