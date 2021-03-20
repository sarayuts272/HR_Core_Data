import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// coreui
import {
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
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

export default function ApplicationReason(props) {
  const classes = useStyles();
  const {
    acceptable,
    handleAcceptable,
  } = props;
  return (
    <div style={{margin: "0 50px"}}>

      <Typography className={classes.heading}>Reason</Typography>

      <CFormGroup col>
        <CCol>
          <CLabel className={classes.heading2}>เหตุผลการรับ</CLabel>
        </CCol>
        <CCol
          name="emptype"
          value={acceptable}
          onChange={handleAcceptable}
          className={classes.heading3}
        >
          <CFormGroup variant="custom-radio">
            <CInputRadio
              custom
              id="replacement"
              name="reason"
              value="replacement"
            />
            <CLabel variant="custom-checkbox" htmlFor="replacement">
              ทดแทน
            </CLabel>
            {acceptable === "replacement" && (
              <CInput placeholder="ทดแทนคุณ..." required />
            )}
          </CFormGroup>

          <CFormGroup variant="custom-radio" inline>
            <CInputRadio custom id="new" name="reason" value="new" />
            <CLabel variant="custom-checkbox" htmlFor="new">
              รับใหม่
            </CLabel>
          </CFormGroup>
        </CCol>
      </CFormGroup>

      <CFormGroup col>
        <CCol>
          <CLabel htmlFor="textarea-input" className={classes.heading2}>
            ความต้องการพิเศษ
          </CLabel>
        </CCol>
        <CCol>
          <CTextarea
            name="textarea-input"
            id="textarea-input"
            rows="9"
            placeholder="Content..."
          />
        </CCol>
      </CFormGroup>
    </div>
  );
}
