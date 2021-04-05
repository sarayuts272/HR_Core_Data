import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StarRateIcon from "@material-ui/icons/StarRate";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";

export default function JobVacancyLists(props) {
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
              <CCardHeader style={{ fontSize: 25 }}>
                Job Vacancy Lists
              </CCardHeader>
              <CCardBody>
                {dataList.map((value) => (
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
                              src={value.img}
                              alt=" "
                            />
                          </a>
                          <div
                            className="careerfy-applied-jobs-text"
                            style={{ paddingLeft: "50px", alignSelf: "center" }}
                          >
                            <div className="careerfy-applied-jobs-left">
                              <h2>{value.job}</h2>
                              <ul>
                                <li>
                                  <i>
                                    <StarRateIcon />
                                  </i>{" "}
                                  {value.jobFam}
                                </li>
                                <li>
                                  <i>
                                    <StarRateIcon />
                                  </i>{" "}
                                  {value.subJobFam}
                                </li>
                                <li>
                                  <i>
                                    <LocationOnIcon />
                                  </i>
                                  {value.prov}
                                </li>

                                <div>
                                  <li>
                                    <i>
                                      <DateRangeIcon />
                                    </i>
                                    {value.date}
                                  </li>
                                </div>
                              </ul>
                            </div>
                            <a className="careerfy-savedjobs-links">
                              <CButton
                                color="outline-success"
                                className="my-2 my-sm-0"
                                type="submit"
                                size="m"
                                onClick={() =>
                                  props.history.push("/jobdetails")
                                }
                              >
                                Apply
                              </CButton>
                            </a>
                          </div>
                        </div>
                      </ul>
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
