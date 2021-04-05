import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  Button,
  Grid,
} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MyTeam from "./MyTeam.css"

export default function Career(props) {

  const dataTeam = [
    {
      name: "Sarayut AAAAA",
      department: "HR",
      tip: "3/8",
      picUrl: "/images/avatars/avatar_1.png",
    },
    {
      name: "Sarayut BBBBB",
      department: "HR",
      tip: "3/8",
      picUrl: "/images/avatars/avatar_2.png",
    },
    {
      name: "Sarayut CCCCC",
      department: "HR",
      tip: "3/8",
      picUrl: "/images/avatars/avatar_3.png",
    },
    {
      name: "sarayut DDDDD",
      department: "HR",
      tip: "3/8",
      picUrl: "/images/avatars/avatar_4.png",
    },
    {
      name: "sarayut EEEEE",
      department: "HR",
      tip: "3/8",
      picUrl: "/images/avatars/avatar_5.png",
    },
    {
      name: "sarayut FFFFF",
      department: "HR",
      tip: "3/8",
      picUrl: "/images/avatars/avatar_6.png",
    },
  ]

  const showTeam = () => {
    return dataTeam.map((value) => (
      <Grid item lg={4}>
        <div className="container">
          <center>
            <div className="wrapper">
              <a href="# ">
                {/* <img src={`${process.env.PUBLIC_URL}/images/avatars/avatar_2.png`} /> */}
                <img  alt=" " src={value.picUrl} />
              </a>
              <div className="title">{value.name}</div>
              <div className="place">HR Officer</div>
            </div>
            <div className="content">
              <p>
                TIP {value.tip} <br />
                RSF 10/2
              </p>
              <div style={{ justifyContent: "center" }}>
                <Button
                  size="large"
                  style={{ background: "white", color: "#404040" }}
                  onClick={() =>
                    props.history.push("/listposition")
                  }
                >
                  Career Dialogue{" "}<FiberManualRecordIcon style={{color : "green", fontSize: 15}} />
                </Button>
              </div>
            </div>
          </center>
        </div>
      </Grid>
    ));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingBottom: 50 }}>
        <Typography align="center" variant="h3" style={{ paddingBottom: 30 }}>
          My Team
        </Typography>

        <center>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {showTeam()}
          </Grid>
        </center>
      </Container>
    </React.Fragment>
  );
}
