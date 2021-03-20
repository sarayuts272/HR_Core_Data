import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

// coreui
import {
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CRow,
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

export default function ApplicationPosition(props) {
  const classes = useStyles();
  const {
    gender,
    handleGenderChange,
    empCount,
    handleDecrement,
    handleIncrement,
  } = props;
  return (
    <div style={{margin: "0 50px"}}>
      <Typography className={classes.heading}>Position Information</Typography>
      <Container>
        <CFormGroup col>
          <CRow>
            <CCol lg={6}>
              <CLabel className={classes.heading2} htmlFor="name">
                ตำแหน่ง
              </CLabel>
              <CInput id="position" placeholder="กรอกตำแหน่ง" required />
            </CCol>
            <CCol lg={6}>
              <CCol>
                <CLabel className={classes.heading2}>จำนวน</CLabel>
              </CCol>
              <CCol>
                <Box display="flex" flexDirection="center">
                  <Box>
                    <ButtonGroup
                      aria-label="small outlined button group"
                      size="medium"
                    >
                      <Button onClick={handleDecrement}>-</Button>
                      <Button disabled>{empCount}</Button>
                      <Button onClick={handleIncrement}>+</Button>
                    </ButtonGroup>
                  </Box>
                  <Box alignSelf="center">
                    <CLabel className={classes.heading3} style={{marginLeft: 5}}>คน</CLabel>
                  </Box>
                </Box>
              </CCol>
            </CCol>
          </CRow>

          <CRow>
            <CCol lg={12}>
              <CLabel className={classes.heading2}>เพศ</CLabel>
            </CCol>
            <CCol
              value={gender}
              onChange={handleGenderChange}
              className={classes.heading3}
            >
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio1"
                  name="inline-radios"
                  value="option1"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                  ชาย
                </CLabel>
              </CFormGroup>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio2"
                  name="inline-radios"
                  value="option2"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                  หญิง
                </CLabel>
              </CFormGroup>
            </CCol>
          </CRow>
        </CFormGroup>

        <CFormGroup col>
          <CRow>
            <CCol lg={6}>
              <CLabel className={classes.heading2} htmlFor="name">
                หน่วยงาน
              </CLabel>
              <CInput id="position" placeholder="กรอกหน่วยงาน" required />
            </CCol>
            <CCol lg={6}>
              <CLabel className={classes.heading2} htmlFor="name">
                บริษัท
              </CLabel>
              <CInput id="position" placeholder="กรอกบริษัท" required />
            </CCol>
          </CRow>
        </CFormGroup>
      </Container>
    </div>
  );
}
