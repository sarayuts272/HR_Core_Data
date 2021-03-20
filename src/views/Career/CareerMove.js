import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";

// coreui
import {
  CCardBody,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CRow,
  CInputRadio,
  CCardFooter,
  CCardHeader,
  CCard,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";


export default function CareerMove(props) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        {/* <Typography align="center" variant="h3" style={{paddingBottom: 30}}>
          Career Roadmap
        </Typography> */}
        <CRow>
          <CCol xs="12" md="12" style={{ fontSize: 20 }}>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                Career Next Move Suggestion
              </CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">1.</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Suggestion..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">2.</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Suggestion..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">3.</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Suggestion..."
                    />
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                Key Emprove Area
              </CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">1.</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Key..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">2.</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Key..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">3.</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Key..."
                    />
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>
                Ready to move within?
              </CCardHeader>
              <CCardBody>
                <center>
                  <CFormGroup row>
                    <CCol md="12">
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio1"
                          name="inline-radios"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio1"
                        >
                          Suddenly
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio2"
                          name="inline-radios"
                          value="option2"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio2"
                        >
                          A year
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio3"
                          name="inline-radios"
                          value="option3"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio3"
                        >
                          2 years
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio4"
                          name="inline-radios"
                          value="option4"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio4"
                        >
                          3 years
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio5"
                          name="inline-radios"
                          value="option5"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio5"
                        >
                          No
                        </CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>
                </center>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">
                  <AdjustOutlinedIcon /> Submit
                </CButton>{" "}
                <CButton type="reset" size="sm" color="danger">
                  <CIcon name="cil-ban" /> Reset
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
