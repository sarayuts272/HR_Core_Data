import React from "react";

//import materials
import { Grid } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  TextField,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

//import style
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    marginTop: 45,
  },
  profile: {
    marginBottom: 20,
    width: "85%",
  },
  details: {
    display: "flex",
  },
  avatar: {
    marginRight: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    marginTop: 15,
  },
  tabs1: {
    width: "85%",
    marginTop: 15,
  },
  profileTitle: {
    backgroundColor: "rgb(238, 37, 36)",
    color: "white",
  },
}));

export default function EducationDetails() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Card className={classes.profile}>
      <form autoComplete="off" noValidate>
        <div className={classes.profileTitle}>
          <CardHeader title="Education Details" />
        </div>

        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>
                    School or University
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-full-width"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>From</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="dense"
                      id="date-picker-inline"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>
                    To (Actual or Expected)
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="dense"
                      id="date-picker-inline"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Degree</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-full-width"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>

            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>
                    Overall Result (GPA)
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-full-width"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>

           
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
}
