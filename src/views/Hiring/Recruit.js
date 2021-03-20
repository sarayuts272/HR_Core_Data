import React from "react";
import mockData from "./data";
import mockData2 from "./data2";
import Candidates from "./Candidate";
import Jobs from "./Jobs";
import Button from "@material-ui/core/Button";
import AddAlertIcon from "@material-ui/icons/AddAlert";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";


export default function Recruit() {

  const [users] = React.useState(mockData);
  const [users2] = React.useState(mockData2);

  const [recruit, setRecruit] = React.useState([
    { navActive: true },
    { navActive: false },
  ]);

  const handleRecruit = (index) => {
    let newArr = [...recruit];
    newArr.map((value, index) => {
      newArr[index].navActive = false;
    });
    newArr[index].navActive = !newArr[index].navActive;
    setRecruit(newArr);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container fixed style={{ paddingBottom: 50 }}>
        <CCol xs="12">
          <Button
            style={{ color: "white", background: "#ff4c4c", fontSize: "30px" }}
            disabled
            size="large"
          >
            <div>
              {" "}
              <AddAlertIcon fontSize="large" /> HIRING
            </div>
          </Button>
          <CNav variant="tabs" style={{ paddingTop: "15px" }}>
            <CNavItem onClick={() => handleRecruit(0)}>
              {recruit[0].navActive ? (
                <CNavLink active style={{ color: "black" }}>
                  JOB OPENINGS
                </CNavLink>
              ) : (
                <CNavLink>JOB OPENINGS</CNavLink>
              )}
            </CNavItem>
            <CNavItem onClick={() => handleRecruit(1)}>
              {recruit[1].navActive ? (
                <CNavLink active style={{ color: "black" }}>
                  CANDIDATES
                </CNavLink>
              ) : (
                <CNavLink>CANDIDATES</CNavLink>
              )}
            </CNavItem>
          </CNav>

          {recruit[0].navActive === true && (
            <Jobs users={users} users2={users2} />
          )}
          {recruit[1].navActive === true && (
            <Candidates users={users} users2={users2} />
          )}
        </CCol>
      </Container>
    </React.Fragment>
  );
}
