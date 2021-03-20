import React from "react";
import { Container } from "@material-ui/core";
import Header from "./containers/Header";
import Menu from "./containers/Menu";
import { makeStyles } from "@material-ui/core/styles";
import "@coreui/coreui-pro/scss/coreui.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import AddEmployee from "./views/AddEmployee/AddEmployee";
import EmployeeProfile from "./views/EmployeeProfile/EmployeeProfile";
import KeyAddition from "./views/Adjust/KeyAddition";
import Application from "./views/Hiring/Application";
import Recruit from "./views/Hiring/Recruit";
import Career from "./views/Career/Career";

// Career
import CareerVisualize from "./views/Career/CareerVisualize";
import CareerMonitor from "./views/Career/CareerMonitor";
import Dialogue from "./views/Career/Dialogue";
import BossSuggestCareer from "./views/Career/BossSuggestCareer";
import CareerMove from "./views/Career/CareerMove";
import SummaryDialogue from "./views/Career/SummaryDialogue";
import NextCareerSuggestion from "./views/Career/NextCareerSuggestion";
import MyTeam from "./views/Career/MyTeam";
import ListPosition from "./views/Career/ListPosition";
import CareerRoadmap from "./views/Career/CareerRoadmap";

// EmployeeData
import EmployeeUpdate from "./views/EmployeeData/EmployeeUpdate";
import EmployeeList from "./views/EmployeeData/EmployeeList";

// Hiring
import JobDetails from "./views/Hiring/JobDetails";
import CandidateDetails from "./views/Hiring/CandidateDetails";
import JobVacancyCreate from "./views/Hiring/JobVacancyCreate";
import JobVacancyLists from "./views/Hiring/JobVacancyLists";
import JobVacancySave from "./views/Hiring/JobVacancySave";
import JobVacancyApply from "./views/Hiring/JobVacancyApply";
import JobVacancyListsAdmin from "./views/Hiring/JobVacancyListsAdmin";
import JobVacancyApplyAdmin from "./views/Hiring/JobVacancyApplyAdmin";

// Directory
import Directory from "./views/Directory/Directory";

// ShowData
import ShowData from "./views/ShowData/ShowData";

// import Export from "./components/pages/Export";
// import ExportManagement from "./components/pages/ExportManagement";

import clsx from "clsx";
import Login from "./views/Login";
import Register from "./views/Register";

const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function App() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const loginReducer = useSelector(({ loginReducer }) => loginReducer);

  return (
    <Router>
      {/* {loginReducer.result && (
        <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      )}
      {loginReducer.result && (
        <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      )} */}

      <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />

      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />

      <div className={classes.drawerHeader} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openDrawer,
        })}
      >
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Switch>
            {/* authen */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              exact={true}
              path="/"
              component={() => <Redirect to="/login" />}
            />

            {/* AddEmployee */}
            <Route path="/addemployee" component={AddEmployee} />

            {/* EmployeeProfile */}
            <Route path="/profile/:id" component={EmployeeProfile} />

            {/* Adjust */}
            <Route path="/keyaddition" component={KeyAddition} />

            {/* career */}
            <Route path="/career" component={Career} />
            <Route path="/careervisualize" component={CareerVisualize} />
            <Route path="/careermonitor" component={CareerMonitor} />
            <Route path="/dialogue" component={Dialogue} />
            <Route path="/bosssuggestcareer" component={BossSuggestCareer} />
            <Route path="/careermove" component={CareerMove} />
            <Route path="/summarydialogue" component={SummaryDialogue} />
            <Route
              path="/nextcareersuggestion"
              component={NextCareerSuggestion}
            />
            <Route path="/listposition" component={ListPosition} />
            <Route path="/myteam" component={MyTeam} />
            <Route path="/careerroadmap" component={CareerRoadmap} />

            {/* EmployeeData */}
            <Route path="/employeeupdate" component={EmployeeUpdate} />
            <Route path="/employeelist" component={EmployeeList} />

            {/* Hiring */}
            <Route path="/recruit" component={Recruit} />
            <Route path="/application" component={Application} />
            <Route path="/jobdetails" component={JobDetails} />
            <Route path="/candidatedetails" component={CandidateDetails} />
            <Route path="/jobvacancycreate" component={JobVacancyCreate} />
            <Route path="/jobvacancylists" component={JobVacancyLists} />
            <Route path="/jobvacancysave" component={JobVacancySave} />
            <Route path="/jobvacancyapply" component={JobVacancyApply} />
            <Route
              path="/jobvacancylistsadmin"
              component={JobVacancyListsAdmin}
            />
            <Route
              path="/jobvacancyapplyadmin"
              component={JobVacancyApplyAdmin}
            />

            {/* Directory */}
            <Route path="/directory" component={Directory} />

            {/* ShowData */}
            <Route path="/showdata" component={ShowData} />
            
            
            {/* 
           ของเก่า 
            <Route path="/export" component={Export} />
            <Route path="/exportmanagement" component={ExportManagement}/>
            
          */}
          </Switch>
        </Container>
      </main>
    </Router>
  );
}
