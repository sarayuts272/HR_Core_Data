import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

// icon
import NextWeekIcon from '@material-ui/icons/NextWeek';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import EditIcon from '@material-ui/icons/Edit';
import StarIcon from '@material-ui/icons/Star';
import MapIcon from '@material-ui/icons/Map';
import NotesIcon from '@material-ui/icons/Notes';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import DetailsIcon from '@material-ui/icons/Details';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import QueueIcon from '@material-ui/icons/Queue';
import InputIcon from '@material-ui/icons/Input';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

import {
  Layers as LayersIcon,
  BarChart as BarChartIcon,
  Person as PersonIcon,
} from "@material-ui/icons";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage:
      "url(" + `${process.env.PUBLIC_URL}/images/background_menu.jpg` + ")",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  isActive: {
    backgroundColor: "#e0f5fd",
    color: "#0080ff",
  },
  heading: {
    display: "flex",
    // justifyContent: "center",
    // color: "#0080ff",
    padding: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        {/* <img
          height={250}
          src={`${process.env.PUBLIC_URL}/images/dogdog.jpg`}
          
        /> */}
        <Divider />

        {/* Employee */}
        <Typography className={classes.heading}>EMPLOYEE</Typography>
        <List>
          <ListItem
            component={NavLink}
            to="/showdata"
            button
            key="showdata"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Employee List" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/addemployee"
            button
            key="addemployee"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Employee" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/import"
            button
            key="import"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Import / Export Management" />
          </ListItem>
        </List>

        {/* Key Adjust */}
        <Typography className={classes.heading}>KEY ADJUST</Typography>
        <List>
          {/* showdata */}
          <ListItem
            component={NavLink}
            to="/keyaddition"
            button
            key="keyaddition"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <Brightness5Icon />
            </ListItemIcon>
            <ListItemText primary="Key Addtion" />
          </ListItem>
        </List>

        {/* Career */}
        <Typography className={classes.heading}>CAREER</Typography>
        <List>
          <ListItem
            component={NavLink}
            to="/career"
            button
            key="career"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Career Part" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/careervisualize"
            button
            key="careervisualize"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Career Visualize" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/dialogue"
            button
            key="dialogue"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Career Inspiration" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/bosssuggestcareer"
            button
            key="bosssuggestcareer"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Boss Suggest Career" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/careermove"
            button
            key="careermove"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <NextWeekIcon />
            </ListItemIcon>
            <ListItemText primary="Career Next Move Suggestion" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/careerroadmap"
            button
            key="careerroadmap"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Career Roadmap" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/summarydialogue"
            button
            key="summarydialogue"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Summary of Dialogue" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/nextcareersuggestion"
            button
            key="nextcareersuggestion"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Next Career Suggestion" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/careermonitor"
            button
            key="careermonitor"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Career Monitor" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/myteam"
            button
            key="myteam"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="My Team" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/listposition"
            button
            key="listposition"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <NotesIcon />
            </ListItemIcon>
            <ListItemText primary="Inspired Position List" />
          </ListItem>
        </List>

        
        {/* Recruit */}
        <Typography className={classes.heading}>RECRUIT</Typography>
        <List>
        <ListItem
            component={NavLink}
            to="/recruit"
            button
            key="recruit"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <HowToVoteIcon />
            </ListItemIcon>
            <ListItemText primary="Hiring" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/application"
            button
            key="application"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <EmojiPeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Application" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/jobvacancycreate"
            button
            key="jobvacancycreate"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <QueueIcon />
            </ListItemIcon>
            <ListItemText primary="Job Vacancy Create" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/jobvacancylists"
            button
            key="jobvacancylists"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary="Job Vacancy List" />
          </ListItem>
          
          <ListItem
            component={NavLink}
            to="/jobdetails"
            button
            key="jobdetails"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <DetailsIcon />
            </ListItemIcon>
            <ListItemText primary="Job Vacancy Detail" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/jobvacancyapply"
            button
            key="jobvacancyapply"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary="Job Apply" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/jobvacancysave"
            button
            key="jobvacancysave"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Job Save" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/jobvacancylistsadmin"
            button
            key="jobvacancylistsadmin"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary="Job Vacancy List Admin" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/jobvacancyapplyadmin"
            button
            key="jobvacancyapplyadmin"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary="Job Vacancy Apply Admin" />
          </ListItem>

          <ListItem
            component={NavLink}
            to="/candidatedetails"
            button
            key="candidatedetails"
            activeClassName={classes.isActive}
          >
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Candidate Detail" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
