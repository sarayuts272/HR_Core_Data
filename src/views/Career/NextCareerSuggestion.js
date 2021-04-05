import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./styles.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CCardFooter,
  CButton,
} from "@coreui/react";
import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";

export default function NextCareerSuggestion() {
  const [dataList, setDataList] = React.useState([
    {
      img: "/images/all/career/HR.jpg",
      job: "HR",
      jobFam: "Job Family",
      subJobFam: "Sub Job Family",
      prov: "Rayong"
    },
    {
      img: "/images/all/career/Programmer.jpg",
      job: "Programmer",
      jobFam: "Job Family",
      subJobFam: "Sub Job Family",
      prov: "Bangkok"
    },
    {
      img: "/images/all/career/HR.jpg",
      job: "HR",
      jobFam: "Job Family",
      subJobFam: "Sub Job Family",
      prov: "Rayong"
    },
    {
      img: "/images/all/career/Programmer.jpg",
      job: "Programmer",
      jobFam: "Job Family",
      subJobFam: "Sub Job Family",
      prov: "Bangkok"
    }
  ]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        {/* <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          Next Career Suggestion
        </Typography> */}

        <CRow>
          <CCol sm="12" xl="12" style={{ fontSize: 20 }}>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                Career Suggestion
              </CCardHeader>
              <CCardBody>
                {dataList.map((value) => (
                  <div class="careerfy-column-12">
                    <div class="careerfy-typo-wrap">
                      <div className="careerfy-candidate careerfy-candidate-default">
                        <ul className="careerfy-row">
                          <li className="careerfy-column-12">
                            <div className="careerfy-candidate-default-wrap">
                              <figure>
                                <a href="# ">
                                  <img
                                    src={value.img}
                                    alt=" "
                                    style={{
                                      borderRadius: "50%",
                                      width: 110,
                                      height: 110,
                                      display: "block",
                                      backgroundPosition: "center",
                                      backgroundSize: "auto 240px",
                                    }}
                                  />
                                </a>
                              </figure>
                              <div
                                className="careerfy-candidate-default-text"
                                style={{ paddingLeft: "50px" }}
                              >
                                <div className="careerfy-candidate-default-left">
                                  <h2>
                                    {value.job}
                                    {/* <i className="careerfy-icon careerfy-check-mark" /> */}
                                  </h2>
                                  <ul>
                                    <li>
                                      <i>
                                        <StarRateIcon />
                                      </i>
                                      {value.jobFam}
                                      {/* <a
                                    href="# "
                                    className="careerfy-candidate-default-studio"
                                  >
                                    green text
                                  </a> */}
                                    </li>
                                    <li>
                                      {/* <i className="fa fa-map-marker" />  */}
                                      <i>
                                        <StarRateIcon />
                                      </i>
                                      {value.subJobFam}
                                    </li>
                                    <li>
                                      {/* <i className="careerfy-icon careerfy-envelope" /> */}
                                      <i>
                                        <LocationOnIcon />
                                      </i>{" "}
                                      {value.prov}
                                    </li>
                                  </ul>
                                </div>
                                <a
                                  href="# "
                                  className="careerfy-candidate-default-btn"
                                  style={{ fontSize: 20, borderRadius: "5px" }}
                                >
                                  Register
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>Key Improve</CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">1</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">2</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">3</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">
                  <AdjustOutlinedIcon /> Submit
                </CButton>{" "}
                <CButton type="reset" size="sm" color="danger">
                  <BlockOutlinedIcon /> Reset
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
