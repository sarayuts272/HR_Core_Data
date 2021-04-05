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
  const [strengthList, setStrengthList] = React.useState([
    "Enthusiasm",
    "Trustworthiness",
    "Creativity",
  ]);
  const [weaknessList, setWeaknessList] = React.useState([
    "Being too critical of yourself",
    "Attempting to please everyone",
    "Being unfamiliar with the latest software",
  ]);

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
                  {strengthList.map((value) => (
                    <CListGroupItem>{value}</CListGroupItem>
                  ))}
                </CListGroup>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader style={{ fontSize: 25 }}>Weakness</CCardHeader>
              <CCardBody>
                <CListGroup>
                  {weaknessList.map((value) => (
                    <CListGroupItem>{value}</CListGroupItem>
                  ))}
                </CListGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </React.Fragment>
  );
}
