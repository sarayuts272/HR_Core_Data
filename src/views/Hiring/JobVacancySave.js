import React from "react";
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
  CInput,
  CButton,
} from "@coreui/react";

export default function JobVacancySave() {

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
                  <CCol lg={7} style={{display: "flex"}}>Saved Jobs</CCol>
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
                <div className="careerfy-column-12">
                  <div className="careerfy-typo-wrap">
                    <div className="careerfy-candidate-savedjobs">
                      <div className="careerfy-candidate-savedjobs-wrap">
                        <table>
                          <thead>
                            <tr>
                              <th>Job Title</th>
                              <th>Company</th>
                              <th>Saved Date </th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-thumb"
                                >
                                  <img
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                    }}
                                    src="/images/avatars/avatar_1.png"
                                    alt=" "
                                  />
                                </a>
                                <h2>
                                  <a href="# ">German Speaking Team Leader</a>
                                </h2>
                              </td>
                              <td>
                                <span>@ Yup Studios</span>
                              </td>
                              <td>Sep 26, 2017</td>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-links"
                                >
                                  <i className="careerfy-icon careerfy-rubbish" style={{fontSize: "20px"}}/>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-thumb"
                                >
                                  <img
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                    }}
                                    src="/images/avatars/avatar_1.png"
                                    alt=" "
                                  />
                                </a>
                                <h2>
                                  <a href="# ">Sales Manager – Beauty Product</a>
                                </h2>
                              </td>
                              <td>
                                <span>@ Yup Studios</span>
                              </td>
                              <td>Sep 26, 2017</td>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-links"
                                >
                                  <i className="careerfy-icon careerfy-rubbish" style={{fontSize: "20px"}}/>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-thumb"
                                >
                                  <img
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                    }}
                                    src="/images/avatars/avatar_1.png"
                                    alt=" "
                                  />
                                </a>
                                <h2>
                                  <a href="# ">
                                    Web Developer – PHP, HTML, CSS....
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <span>@ Yup Studios</span>
                              </td>
                              <td>Sep 26, 2017</td>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-links"
                                >
                                  <i className="careerfy-icon careerfy-rubbish" style={{fontSize: "20px"}}/>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-thumb"
                                >
                                  <img
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                    }}
                                    src="/images/avatars/avatar_1.png"
                                    alt=" "
                                  />
                                </a>
                                <h2>
                                  <a href="# ">JavaScript Developer</a>
                                </h2>
                              </td>
                              <td>
                                <span>@ Yup Studios</span>
                              </td>
                              <td>Sep 26, 2017</td>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-links"
                                >
                                  <i className="careerfy-icon careerfy-rubbish" style={{fontSize: "20px"}}/>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-thumb"
                                >
                                  <img
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                    }}
                                    src="/images/avatars/avatar_1.png"
                                    alt=" "
                                  />
                                </a>
                                <h2>
                                  <a href="# ">
                                    Senior Finance Contracts Administrator
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <span>@ Yup Studios</span>
                              </td>
                              <td>Sep 26, 2017</td>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-links"
                                >
                                  <i className="careerfy-icon careerfy-rubbish" style={{fontSize: "20px"}}/>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-thumb"
                                >
                                  <img
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                    }}
                                    src="/images/avatars/avatar_1.png"
                                    alt=" "
                                  />
                                </a>
                                <h2>
                                  <a href="# ">JavaScript Developer</a>
                                </h2>
                              </td>
                              <td>
                                <span>Broken Dreams Fingerstyle</span>
                              </td>
                              <td>Sep 26, 2017</td>
                              <td>
                                <a
                                  href="# "
                                  className="careerfy-savedjobs-links"
                                >
                                  <i className="careerfy-icon careerfy-rubbish" style={{fontSize: "20px"}}/>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
