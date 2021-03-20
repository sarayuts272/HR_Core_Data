import React, { useState } from "react";

//import modules
import mockData from "./data";
import mockData2 from "./data2";
import DataTable from "./DataTable";

//import material
import Grid from "@material-ui/core/Grid";

//import styles
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
    width: "95%",
  },
  content: {
    marginTop: theme.spacing(0),
  },
}));

export default function Directory() {
  const classes = useStyles();
  const [users] = useState(mockData);
  const [users2] = useState(mockData2);


  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          {/* <UsersToolbar /> */}
          <div className={classes.content}>
            <DataTable users={users} users2={users2} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}