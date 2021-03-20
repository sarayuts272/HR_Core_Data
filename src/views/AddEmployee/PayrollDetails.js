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
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
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

const shift_list = [
  {
    label: "A",
    value: "a",
  },
  {
    label: "B",
    value: "b",
  },
  {
    label: "C",
    value: "c",
  },
  {
    label: "D",
    value: "d",
  },
];

const shiftType_list = [
  {
    label: "3 หยุด 3",
    value: "3st3",
  },
  {
    label: "4 หยุด 2",
    value: "3st2",
  },
];

export default function PayrollDetails() {
  const classes = useStyles();

  //time1
  const [selectedDate, setSelectedDate] = React.useState(new Date(""));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //time2
  const [selectedDate1, setSelectedDate1] = React.useState(new Date(""));
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  //Type
  const [type, setType] = React.useState("");
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  //Shift
  const [shift, setShift] = React.useState("");
  const handleChangeShift = (event) => {
    setShift(event.target.value);
  };

  //Shift type
  const [shiftType, setShiftType] = React.useState("");
  const handleChangeShiftType = (event) => {
    setShiftType(event.target.value);
  };

  return (
    <Card className={classes.profile}>
      <form autoComplete="off" noValidate>
        <div className={classes.profileTitle}>
          <CardHeader title="Payroll Details " />
        </div>

        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Day/Shift</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={type}
                      onChange={handleChangeType}
                    >
                      <Grid container>
                        <Grid item md={6}>
                          <FormControlLabel
                            value="day"
                            control={<Radio />}
                            label="Day"
                          />
                        </Grid>
                        <Grid item md={6}>
                          <FormControlLabel
                            value="shift"
                            control={<Radio />}
                            label="Shift"
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>

            {type === "shift" && (
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>Shift</Typography>
                  </Grid>
                  <Grid item md={7} xs={12}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      fullWidth
                      margin="dense"
                      value={shift}
                      onChange={handleChangeShift}
                      variant="outlined"
                    >
                      {shift_list.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                {/* ----*----- */}

                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Shift type
                    </Typography>
                  </Grid>
                  <Grid item md={7} xs={12}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      fullWidth
                      margin="dense"
                      value={shiftType}
                      onChange={handleChangeShiftType}
                      variant="outlined"
                    >
                      {shiftType_list.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
            )}

            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Time In</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
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
                  <Typography className={classes.heading}>Time Out</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      value={selectedDate1}
                      onChange={handleDateChange1}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
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
                    Work day per week
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-full-width"
                    type="number"
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
                    Average Weekly Hours
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-full-width"
                    type="number"
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
