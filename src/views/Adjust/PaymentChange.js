import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CInput,
  CCardFooter,
  CButton,
  CForm,
  CSelect,
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
    backgroundColor: "#ff3c19",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "50%",
    width: "50%",
    marginTop: 15,
  },
  rootSearch: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(1),
    display: "flex",
    flexBasis: 420,
    width: "70%",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  Search: {
    width: "90%",
  },
  heading2: {
    fontSize: theme.typography.pxToRem(23),
    flexBasis: "50%",
    width: "80%",
    marginTop: 15,
  },
  padding1: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 40,
  },
  padding2: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 10,
  },
  text: {
    fontSize: theme.typography.pxToRem(20),
    // flexBasis: "50%",
    // marginTop: 15,
  },
  topcontent: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  checkBox: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function PaymentChange() {
  const classes = useStyles();


  //   test
  const [count, setCount] = React.useState(1);
  const [edit, setEdit] = React.useState([count]);
  function addBox() {
    setCount(count + 1);
    setEdit([...edit, count + 1]);
  }

  const [adjust, setAdjust] = React.useState(0);

  const handleAdjust = (event) => {
    setAdjust(event.target.value);
  };

  return (
    <CCard>
      <CCardHeader style={{ fontSize: 25 }}>
        <CForm inline>
          <CCol>Payment Change </CCol>
          <CRow style={{ paddingRight: 30, color: "grey" }}>
            <Typography>Date: 12/02/2022</Typography>
            <Typography style={{ marginLeft: 15 }}>
              {" "}
              Admin: Sarayut Test
            </Typography>
          </CRow>
        </CForm>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12" xl="12">
            <CFormGroup row>
              <Container>
                <div className={classes.root}>
                  <Grid container spacing={3} className={classes.padding1}>
                    <Grid item xs={4} lg={4}>
                      <Typography className={classes.text}>
                        Effective Date
                      </Typography>
                    </Grid>
                    <Grid item xs={8} lg={8}>
                      <CSelect
                        custom
                        name="select"
                        id="select"
                        onChange={handleAdjust}
                      >
                        <option value="0">Please select</option>
                        <option value="1">Transfer In</option>
                        <option value="2">Transfer Out</option>
                        <option value="3">Probation **** ยังไม่มี</option>
                        <option value="4">Promotion</option>
                        <option value="5">Secondment **** ยังไม่มี</option>
                        <option value="6">Payment Change</option>
                        <option value="7">Terminate</option>
                      </CSelect>
                    </Grid>
                  </Grid>

                  {/* test */}
                  {edit.map((name) => (
                    <Grid container spacing={3} className={classes.padding1}>
                      <Grid item xs={4} lg={4}>
                        <Typography className={classes.text}>
                          Adjust item {name}
                        </Typography>
                      </Grid>
                      <Grid item xs={8} lg={8}>
                        <CSelect
                          custom
                          name="select"
                          id="select"
                          onChange={handleAdjust}
                        >
                          <option value="0">Please select</option>
                          <option value="1">Transfer In</option>
                          <option value="2">Transfer Out</option>
                          <option value="3">Probation **** ยังไม่มี</option>
                          <option value="4">Promotion</option>
                          <option value="5">Secondment **** ยังไม่มี</option>
                          <option value="6">Payment Change</option>
                          <option value="7">Terminate</option>
                        </CSelect>
                      </Grid>
                      <Grid item xs={4} lg={4}>
                        <Typography className={classes.text}>Amount</Typography>
                      </Grid>
                      <Grid item xs={8} lg={8}>
                        <CInput
                          id="text-input"
                          name="text-input"
                          placeholder="Fill in amount..."
                        />
                      </Grid>
                    </Grid>
                  ))}

                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    className={classes.padding1}
                  >
                    <AddCircleOutlineIcon
                      onClick={() => addBox()}
                      style={{ fontSize: 50 }}
                      color="action"
                    ></AddCircleOutlineIcon>
                  </Grid>
                </div>
              </Container>
            </CFormGroup>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="primary">
          <AdjustOutlinedIcon /> Submit
        </CButton>{" "}
        <CButton type="reset" size="sm" color="danger">
          <BlockOutlinedIcon /> Reset
        </CButton>
      </CCardFooter>
    </CCard>
  );
}
