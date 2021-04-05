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
import { login } from "./actions/login.action";

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

  const loginReducer = useSelector(({ loginReducer }) => loginReducer);

  const PrivateRoute = ({ type, component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        loginReducer.userType ? (
          loginReducer.userType === type ||
          (loginReducer.userType === "1" && type === "1&2") ||
          (loginReducer.userType === "2" && type === "1&2") ? (
            <Component
              {...props}
              // loginAuth={loginAuth}
              // setMenuSelected={setMenuSelected}
            />
          ) : (
            // history.goBack()
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Router>
      {loginReducer.result && (
        <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      )}
      {loginReducer.result && (
        <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      )}

      {/* <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />

      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} /> */}

      <div className={classes.drawerHeader} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openDrawer && loginReducer.result,
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
            <PrivateRoute
              type="3"
              path="/addemployee"
              component={AddEmployee}
            />

            {/* EmployeeProfile */}
            <PrivateRoute
              type="3"
              path="/profile/:id"
              component={EmployeeProfile}
            />

            {/* Adjust */}
            <PrivateRoute
              type="3"
              path="/keyaddition"
              component={KeyAddition}
            />

            {/* career */}
            <PrivateRoute type="1&2" path="/career" component={Career} />
            <PrivateRoute
              type="1"
              path="/careervisualize"
              component={CareerVisualize}
            />
            <PrivateRoute
              type="2"
              path="/careermonitor"
              component={CareerMonitor}
            />
            <PrivateRoute type="1" path="/dialogue" component={Dialogue} />
            <PrivateRoute
              type="2"
              path="/bosssuggestcareer"
              component={BossSuggestCareer}
            />
            <PrivateRoute type="2" path="/careermove" component={CareerMove} />
            <PrivateRoute
              type="1"
              path="/summarydialogue"
              component={SummaryDialogue}
            />
            <PrivateRoute
              type="1"
              path="/nextcareersuggestion"
              component={NextCareerSuggestion}
            />
            <PrivateRoute
              type="2"
              path="/listposition"
              component={ListPosition}
            />
            <PrivateRoute type="2" path="/myteam" component={MyTeam} />
            <PrivateRoute
              type="1"
              path="/careerroadmap"
              component={CareerRoadmap}
            />

            {/* EmployeeData */}
            <PrivateRoute
              type="3"
              path="/employeeupdate"
              component={EmployeeUpdate}
            />
            <PrivateRoute
              type="3"
              path="/employeelist"
              component={EmployeeList}
            />

            {/* Hiring */}
            <PrivateRoute type="3" path="/recruit" component={Recruit} />
            <PrivateRoute
              type="2"
              path="/application"
              component={Application}
            />
            <PrivateRoute type="1" path="/jobdetails" component={JobDetails} />
            <PrivateRoute
              type="3"
              path="/candidatedetails"
              component={CandidateDetails}
            />
            <PrivateRoute
              type="3"
              path="/jobvacancycreate"
              component={JobVacancyCreate}
            />
            <PrivateRoute
              type="1"
              path="/jobvacancylists"
              component={JobVacancyLists}
            />
            <PrivateRoute
              type="1"
              path="/jobvacancysave"
              component={JobVacancySave}
            />
            <PrivateRoute
              type="1"
              path="/jobvacancyapply"
              component={JobVacancyApply}
            />
            <PrivateRoute
              type="3"
              path="/jobvacancylistsadmin"
              component={JobVacancyListsAdmin}
            />
            <PrivateRoute
              type="3"
              path="/jobvacancyapplyadmin"
              component={JobVacancyApplyAdmin}
            />

            {/* Directory */}
            <PrivateRoute type="1" path="/directory" component={Directory} />

            {/* ShowData */}
            <PrivateRoute type="3" path="/showdata" component={ShowData} />

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
