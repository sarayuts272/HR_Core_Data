import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

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

export default function JobVacancyApplyAdmin(props) {
  const classes = useStyles();

  const [dataList, setDataList] = React.useState([
    {
      img: "/images/all/career/HR.jpg",
      job: "HR",
      jobFam: "Job Family",
      subJobFam: "Sub Job Family",
      prov: "Rayong",
      date: "April 5, 2021",
    },
    {
      img: "/images/all/career/Programmer.jpg",
      job: "Programmer",
      jobFam: "Job Family",
      subJobFam: "Sub Job Family",
      prov: "Bangkok",
      date: "April 5, 2021",
    },
    {
      img: "/images/all/career/HR.jpg",
      job: "HR",
      jobFam: "Job Family",
      subJobFam: "Sub Job Family",
      prov: "Rayong",
      date: "April 5, 2021",
    },
    {
      img: "/images/all/career/Programmer.jpg",
      job: "Programmer",
      jobFam: "Job Family",
      subJobFam: "Sub Job Family",
      prov: "Bangkok",
      date: "April 5, 2021",
    },
  ]);

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
              <CCardHeader style={{ fontSize: 25 }}>Applied Lists</CCardHeader>
              <CCardBody>
                {dataList.map((value) => (
                  <div class="careerfy-typo-wrap">
                    <div className="careerfy-candidate careerfy-candidate-default">
                      <div className="careerfy-row">
                        <div className="careerfy-column-12">
                          <div className="careerfy-candidate-default-wrap">
                            <figure>
                              <a href="# ">
                                <img src={value.img} alt=" " />
                              </a>
                            </figure>
                            <div
                              className="careerfy-candidate-default-text"
                              style={{ paddingLeft: "50px" }}
                            >
                              <div className="careerfy-candidate-default-left">
                                <h2>
                                  Sarayut Test
                                  {/* <i className="careerfy-icon careerfy-check-mark" /> */}
                                </h2>
                                <ul>
                                  <li>{value.job}</li>
                                  <li>
                                    {value.jobFam}{" "}
                                    {/* <a
                                  href="# "
                                  className="careerfy-candidate-default-studio"
                                >
                                  green text
                                </a> */}
                                  </li>
                                  <li>
                                    {/* <i className="fa fa-map-marker" />  */}
                                    {value.subJobFam}
                                  </li>
                                  <li>
                                    {/* <i className="careerfy-icon careerfy-envelope" /> */}
                                    <i className="fa fa-map-marker" /> Province
                                  </li>
                                </ul>
                              </div>

                              <a
                                href="# "
                                className="careerfy-candidate-default-btn"
                                style={{
                                  fontSize: "20px",
                                  borderRadius: "5px",
                                }}
                                onClick={() =>
                                  props.history.push("/candidatedetails")
                                }
                              >
                                View Profile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} 
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
