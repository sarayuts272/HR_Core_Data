import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

// coreui
import {
  CCol,
  CFormGroup,
  CLabel,
  CInputRadio,
} from "@coreui/react";
import "./TextEditors.scss";

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
    // background: "#F9C449",
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

export default function ApplicationType(props) {
  const classes = useStyles();
  const {
    empType,
    handleEmpType,
    handleMonthDecrement,
    month,
    handleMonthIncrement,
  } = props;
  return (
    <div style={{margin: "0 50px"}}>
      <Typography className={classes.heading}>Employee Type</Typography>

      <CFormGroup col>
        <CCol>
          <CLabel className={classes.heading2}>ประเภทพนักงาน</CLabel>
        </CCol>
        <CCol
          name="emptype"
          value={empType}
          onChange={handleEmpType}
          className={classes.heading3}
        >
          <CFormGroup variant="custom-radio">
            <CInputRadio
              custom
              id="permanent"
              name="emptype"
              value="permanent"
            />
            <CLabel variant="custom-checkbox" htmlFor="permanent">
              บรรจุเป็นพนักงานประจำ
            </CLabel>
          </CFormGroup>

          <CFormGroup variant="custom-radio">
            <CInputRadio
              custom
              id="temporary"
              name="emptype"
              value="temporary"
            />
            <CLabel variant="custom-checkbox" htmlFor="temporary">
              บรรจุชั่วคราว
            </CLabel>
            {empType === "temporary" && (
              <Box display="flex" flexDirection="center">
                <Box m={1}>
                  <ButtonGroup aria-label="small outlined button group">
                    <Button onClick={handleMonthDecrement}>-</Button>
                    <Button disabled>{month}</Button>
                    <Button onClick={handleMonthIncrement}>+</Button>
                  </ButtonGroup>
                </Box>
                <Box alignSelf="center">
                  <Typography className={classes.heading3}>เดือน</Typography>
                </Box>
              </Box>
            )}
          </CFormGroup>
          <CFormGroup variant="custom-radio">
            <CInputRadio custom id="special" name="emptype" value="special" />
            <CLabel variant="custom-checkbox" htmlFor="special">
              สัญญาจ้างพิเศษ
            </CLabel>
          </CFormGroup>
        </CCol>
      </CFormGroup>
    </div>
  );
}
