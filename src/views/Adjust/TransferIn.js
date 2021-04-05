import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CTextarea,
  CRow,
  CFormGroup,
  CInput,
  CCardFooter,
  CButton,
  CForm,
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
    fontSize: theme.typography.pxToRem(20),
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
    fontSize: theme.typography.pxToRem(23),
    // flexBasis: "50%",
    // marginTop: 15,
  },
  topcontent: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
}));

export default function TransferIn() {
  const classes = useStyles();

  //   test
  const [count, setCount] = React.useState(1);
  const [edit, setEdit] = React.useState([count]);
  function addBox() {
    if (count < 3) {
      setCount(count + 1);
      setEdit([...edit, count + 1]);
    }
  }

  return (
    <CCard>
      <CCardHeader style={{ fontSize: 25 }}>
        <CForm inline>
          <CCol>Transfer In </CCol>
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
                      <Grid item xs={12} lg={4}>
                        <Typography className={classes.text}>
                        <div style={{ fontWeight: "bold", color: "GrayText" }}>Position</div>
                         
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={8}>
                        <CInput
                          id="text-input"
                          name="text-input"
                          placeholder="Fill in the position..."
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={3} className={classes.padding1}>
                      <Grid item xs={12} lg={4}>
                        <Typography className={classes.text}>
                        <div style={{ fontWeight: "bold", color: "GrayText" }}>Department</div>
                         
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={8}>
                        <CInput
                          id="text-input"
                          name="text-input"
                          placeholder="Fill in the department..."
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={3} className={classes.padding1}>
                      <Grid item xs={12} lg={4}>
                        <Typography className={classes.text}>
                        <div style={{ fontWeight: "bold", color: "GrayText" }}>Section</div>
                        
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={8}>
                        <CInput
                          id="text-input"
                          name="text-input"
                          placeholder="Fill in the section..."
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={3} className={classes.padding1}>
                      <Grid item xs={12} lg={4}>
                        <Typography className={classes.text}>
                        <div style={{ fontWeight: "bold", color: "GrayText" }}>Report to</div>
                         
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={8}>
                        <CInput
                          id="text-input"
                          name="text-input"
                          placeholder="Fill in the report to..."
                        />
                      </Grid>
                    </Grid>

                    {/* Run Code */}
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                      className={classes.padding2}
                    >
                      <CButton variant="outline" color="dark">Run code</CButton>
                    </Grid>

                    <Grid container spacing={3} className={classes.padding1}>
                      <Grid item xs={12} lg={4}>
                        <Typography className={classes.text}>
                        <div style={{ fontWeight: "bold", color: "GrayText" }}>Effective Date</div>
                        
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={8}>
                        <CInput
                          id="text-input"
                          name="text-input"
                          placeholder="Fill in the effective date..."
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={3} className={classes.padding1}>
                      <Grid item xs={12} lg={4}>
                        <Typography className={classes.text}>
                        <div style={{ fontWeight: "bold", color: "GrayText" }}>Reason</div></Typography>
                      </Grid>
                      <Grid item xs={12} lg={8}>
                        <CInput
                          id="text-input"
                          name="text-input"
                          placeholder="Fill in the reason..."
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <CTextarea
                          name="textarea-input"
                          id="textarea-input"
                          rows="4"
                          placeholder="Content..."
                          style={{resize: "none"}}
                        />
                      </Grid>
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
