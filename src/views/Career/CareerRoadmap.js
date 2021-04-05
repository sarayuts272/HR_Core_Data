import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { blue } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SearchBar from "material-ui-search-bar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  rootPosition: {
    borderRadius: 10,
    background: "#323232",
  },
  rootJobFamily: {
    borderRadius: 10,
    background: "#d32f2f",
  },
  rootSubJobFamily: {
    borderRadius: 10,
    background: "#ec7700",
  },
  heading: {
    color: "white",
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  const roadMapData = [
    { year: "now", jobfam: "" },
    { year: "1-5 years", jobfam: "" },
    { year: "6-10 years", jobfam: "" },
    { year: "10-15 years", jobfam: "" },
    { year: "15-20 years", jobfam: "" },
  ];

  const roadMap = () => {
    return roadMapData.map((value, index) => (
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h4">{value.year}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <LocationOnIcon />
          </TimelineDot>
          {index !== roadMapData.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Card className={classes.rootPosition} variant="outlined">
            <CardContent>
              <SearchBar
              // value={this.state.value}
              // onChange={(newValue) => this.setState({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
              />

              <Card
                className={classes.rootJobFamily}
                variant="outlined"
                style={{ margin: "20px 0" }}
              >
                <CardContent>
                  {/* <Typography
                    inline
                    align="center"
                    variant="h4"
                    className={classes.heading}
                    style={{ textDecoration: "underline" }}
                  >
                    POSITION
                  </Typography> */}

                  <Typography
                    align="center"
                    variant="h4"
                    className={classes.heading}
                  >
                    HR Manager
                  </Typography>

                  {/* {index} */}
                </CardContent>
              </Card>
              <Card className={classes.rootSubJobFamily} variant="outlined">
                <CardContent>
                  {/* <Typography
                    align="center"
                    variant="h4"
                    className={classes.heading}
                    style={{ textDecoration: "underline" }}
                  >
                    JOB FAMILY
                  </Typography> */}
                  <Typography
                    align="center"
                    variant="h4"
                    className={classes.heading}
                  >
                    HR
                  </Typography>

                  {/* <Typography
                    align="center"
                    variant="h4"
                    className={classes.heading}
                    style={{ textDecoration: "underline" }}
                  >
                    SUB JOB FAMILY
                  </Typography> */}
                  <Typography
                    align="center"
                    variant="h4"
                    className={classes.heading}
                  >
                    HRBD
                  </Typography>
                  {value.jobfam}
                  {/* {index} */}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item lg={12}>
          <Typography align="center" variant="h3">
            Career Roadmap
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <Timeline align="alternate">{roadMap()}</Timeline>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
