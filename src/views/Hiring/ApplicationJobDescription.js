import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// coreui
import {
  CCardBody,
  CCol,
  CFormGroup,
  CLabel,
  CSelect,
} from "@coreui/react";
import ReactQuill from "react-quill";
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

export default function ApplicationJobDescription(props) {
  const classes = useStyles();
  const { text, modules, setText } = props;
  return (
    <div style={{margin: "0 50px"}}>
      <Typography className={classes.heading}>Job Description</Typography>

      <CFormGroup col>
        <CCol>
          <CLabel htmlFor="select" className={classes.heading2}>
            ลักษณะงาน
          </CLabel>
        </CCol>
        <CCol>
          <CCardBody>
            <ReactQuill style={{height: "200px"}} value={text} modules={modules} onChange={setText} />
          </CCardBody>
        </CCol>
      </CFormGroup>

      <CFormGroup row style={{paddingTop: 40}}>
        <CCol lg={6}>
          <CCol>
            <CLabel htmlFor="select" className={classes.heading2}>
              Location
            </CLabel>
          </CCol>
          <CCol>
            <CSelect custom name="select" id="select">
              <option value="0">Please select</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
            </CSelect>
          </CCol>
        </CCol>
        <CCol lg={6}>
          <CCol>
            <CLabel htmlFor="select" className={classes.heading2}>
              Country
            </CLabel>
          </CCol>
          <CCol>
            <CSelect custom name="select" id="select">
              <option value="0">Please select</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
            </CSelect>
          </CCol>
        </CCol>
      </CFormGroup>
    </div>
  );
}
