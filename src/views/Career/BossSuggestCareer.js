import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CCardFooter,
  CButton,
} from "@coreui/react";

export default function Career(props) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        {/* <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          Boss Suggest Career
        </Typography> */}
        <CRow>
          <CCol sm="12" xl="12" style={{ fontSize: 20 }}>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>Strength Top 3</CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">1</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">2</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">3</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>Weakness Top 3</CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">1</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">2</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">3</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Fill in..."
                    />
                  </CCol>
                </CFormGroup>
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
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
