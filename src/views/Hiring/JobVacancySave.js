import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import StarRateIcon from "@material-ui/icons/StarRate";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";

import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
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

export default function JobVacancySave(props) {
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
              <CCardHeader style={{ fontSize: 25 }}>
                <CRow>
                  <CCol lg={7} style={{ display: "flex" }}>
                    Saved Job
                  </CCol>
                  <CCol lg={5} style={{ display: "flex" }}>
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
                {dataList.map((value) => (
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
                              <Box
                                display="flex"
                                flexDirection="row"
                                paddingLeft={5}
                                justifyContent="center"
                              >
                                <DeleteIcon fontSize="large" />
                              </Box>
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
