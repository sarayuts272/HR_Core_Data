import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CInput,
  CButton,
} from "@coreui/react";

export default function CareerMonitor() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        {/* <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          Career Monitor
        </Typography> */}

        <CRow>
          <CCol sm="3" xl="3">
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>Search</CCardHeader>
              <CCardBody>
                <CInput className="mr-sm-2" placeholder="Search" size="sm" />
                <br />
                <center>
                  <CButton
                    color="outline-success"
                    className="my-2 my-sm-0"
                    type="submit"
                    size="sm"
                  >
                    Search
                    <SearchIcon />
                  </CButton>
                </center>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>Fillter</CCardHeader>
              <CCardBody>
                <CInput
                  className="mr-sm-2"
                  placeholder="Job Family"
                  size="sm"
                />
                <br />
                <CInput
                  className="mr-sm-2"
                  placeholder="Sub Job Family"
                  size="sm"
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="9" xl="9" style={{ fontSize: 20 }}>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                Career Inspiration{" "}
              </CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <div className="careerfy-employer careerfy-employer-list">
                    <div className="careerfy-column-12">
                      <div className="careerfy-table-layer">
                        <div className="careerfy-table-row">
                          <div className="careerfy-table-cell">
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
                              +3 people inspried
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              <VisibilityIcon />
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
                            <h2 style={{ fontSize: "25px" }}>Programmer</h2>
                            <span style={{ fontSize: "15px" }}>
                              Job Family | Sub Job Family
                            </span>
                          </div>
                          <div className="careerfy-table-cell">
                            <ul className="careerfy-employer-thumblist">
                              <li>
                                <a href="# ">
                                  <img  alt=" " src="/images/avatars/avatar_1.png" />
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
                              +3 people inspried
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              <VisibilityIcon />
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
                              +3 people inspried
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              <VisibilityIcon />
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
                              +3 people inspried
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              <VisibilityIcon />
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
                              +3 people inspried
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              <VisibilityIcon />
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
                              +3 people inspried
                            </a>
                          </div>
                          <div className="careerfy-table-cell">
                            {" "}
                            <a href="# " className="careerfy-employer-list-btn">
                              <VisibilityIcon />
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
