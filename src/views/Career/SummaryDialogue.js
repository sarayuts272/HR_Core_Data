import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
} from "@coreui/react";


export default function SummaryDialogue(props) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        {/* <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          Summary of Dialogue
        </Typography> */}

        <CRow>
          <CCol sm="12" xl="12" style={{ fontSize: 20 }}>
            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>Strength</CCardHeader>
              <CCardBody>
                <CListGroup>
                  <CListGroupItem>Enthusiasm</CListGroupItem>
                  <CListGroupItem>Trustworthiness</CListGroupItem>
                  <CListGroupItem>Creativity</CListGroupItem>
                </CListGroup>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>Weakness</CCardHeader>
              <CCardBody>
                <CListGroup>
                  <CListGroupItem>
                    Being too critical of yourself
                  </CListGroupItem>
                  <CListGroupItem>Attempting to please everyone</CListGroupItem>
                  <CListGroupItem>
                    Being unfamiliar with the latest software
                  </CListGroupItem>
                </CListGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
