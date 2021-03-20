import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  Card,
  CardMedia,
  Grid,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingBottom: 50,
    //   backgroundColor: theme.palette.background.paper,
    // backgroundColor: "white",
    // paddingTop: 30,
  },
  media: {
    height: 300,
  },
  rootcard: {
    flexGrow: 1,
    width: "70%",
  },
  heading: {
    color: "gray",
  },
}));

export default function Career(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <center>
        <Container fixed style={{ paddingBottom: 50 }}>
          <Typography align="center" gutterBottom variant="h2" component="h2">
            Career Part
          </Typography>

          <div className={classes.root}>
            <Grid
              container
              direction="row"
              // justify="space-around"
              alignItems="center"
            >
              <Grid item xs={12} lg={4}>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h4"
                  component="h1"
                  // style={{size}}
                  className={classes.heading}
                >
                  Visual Career
                </Typography>
                <center>
                  <Card className={classes.rootcard}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="350"
                        image={`${process.env.PUBLIC_URL}/images/visualcareer.jpg`}
                        title="Contemplative Reptile"
                        onClick={() => props.history.push("/CareerVisualize")}
                      />
                    </CardActionArea>
                  </Card>
                </center>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h4"
                  component="h2"
                  className={classes.heading}
                >
                  Career Aspire
                </Typography>
                <center>
                  <Card className={classes.rootcard}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="350"
                        image={`${process.env.PUBLIC_URL}/images/careeraspire.jpg`}
                        title="Contemplative Reptile"
                        onClick={() => props.history.push("/dialogue")}
                      />
                    </CardActionArea>
                  </Card>
                </center>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h4"
                  component="h2"
                  className={classes.heading}
                >
                  Monitor Career
                </Typography>
                <center>
                  <Card className={classes.rootcard}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="350"
                        image={`${process.env.PUBLIC_URL}/images/monitorcareer.jpg`}
                        title="Contemplative Reptile"
                        onClick={() => props.history.push("/careermonitor")}
                      />
                    </CardActionArea>
                  </Card>
                </center>
              </Grid>
            </Grid>
          </div>
        </Container>
      </center>

    </React.Fragment>
  );
}
