import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import ApplicationPosition from "./ApplicationPosition";
import EmployeeType from "./ApplicationType";
import ApplicationJobDescription from "./ApplicationJobDescription";
import ApplicationReason from "./ApplicationReason";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    marginTop: 45,
  },
  details: {
    display: "flex",
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    flexBasis: "50%",
    marginTop: 15,
    background: "#F9C449",
  },
  input: {
    paddingLeft: 5,
    paddingTop: 5,
  },
  section: {
    paddingLeft: 70,
    paddingRight: 70,
  },
  heading2: {
    fontSize: theme.typography.pxToRem(23),
    flexBasis: "50%",
    marginTop: 10,
  },
  heading3: {
    fontSize: theme.typography.pxToRem(17),
  },
}));

const initialText = "";

// stepper
function getSteps() {
  return ["Position Information", "Employee Type", "Job Description", "Reason"];
}

export default function Application(props) {
  const classes = useStyles();

  const [gender, setGender] = React.useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [empCount, setEmpCount] = React.useState(0);
  const handleIncrement = () => {
    setEmpCount(empCount + 1);
  };
  const handleDecrement = () => {
    if (empCount > 0) {
      setEmpCount(empCount - 1);
    }
  };

  const [empType, setEmpType] = React.useState("");
  const handleEmpType = (event) => {
    setEmpType(event.target.value);
  };

  const [month, setMonth] = React.useState(0);
  const handleMonthIncrement = () => {
    setMonth(month + 1);
  };
  const handleMonthDecrement = () => {
    if (month > 0) {
      setMonth(month - 1);
    }
  };

  const [acceptable, setAcceptable] = React.useState("");
  const handleAcceptable = (event) => {
    setAcceptable(event.target.value);
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"], // remove formatting button
    ],
  };

  const [text, setText] = React.useState(initialText);

  // stepper
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <ApplicationPosition
            gender={gender}
            handleGenderChange={handleGenderChange}
            empCount={empCount}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        );
      case 1:
        return (
          <EmployeeType
            empType={empType}
            handleEmpType={handleEmpType}
            handleMonthDecrement={handleMonthDecrement}
            month={month}
            handleMonthIncrement={handleMonthIncrement}
          />
        );
      case 2:
        return (
          <ApplicationJobDescription
            text={text}
            modules={modules}
            setText={setText}
          />
        );
      case 3:
        return (
          <ApplicationReason
            acceptable={acceptable}
            handleAcceptable={handleAcceptable}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 100, backgroundColor: "white" }}>
        <img
         alt=" "
          height={80}
          weight={80}
          src={`${process.env.PUBLIC_URL}/images/scg-logo.png`}
        />
        <Divider />

        {/* stepper */}
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div >
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div style={{textAlign: "end"}}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
      </Container>
    </React.Fragment>
  );
}
