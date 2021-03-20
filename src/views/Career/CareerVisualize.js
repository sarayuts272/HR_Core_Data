import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  Button,
  Grid,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    overflow: "scroll",
    height: 600,
    width: "100%",
    display: "block"
  },
  media: {
    height: 200,
  },
  rootcard: {
    flexGrow: 1,
    width: "100%",
  },
  text: {
    fontSize: theme.typography.pxToRem(30),
    justifyContent: "center",
  },
  box: {
    width: 200,
    height: 200,
  },
}));

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    console.log("key is"+key)
    const collection = map.get(key);
    console.log("collection is"+key)
    
    console.log(!collection)
    if (!collection) {
      map.set(key, [item]);
      console.log([item])
    } else {
      collection.push(item);
      console.log("zzzzzzzzzzzzz")
    }
  });
  return map;
}

export default function CareerVisualize(props) {
  const classes = useStyles();
  const colorSub = ["#2979ff", "#4caf50", "#ffeb3b", "#ff5722", "#757575", "#d50000"]

  const [dataList, setDataList] = React.useState([
    {
      career: "Admin Office Support", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7", "sub 8", "sub 9", "sub 10"]
    },
    {
      career: "Business Development Planning", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4"]
    },
    {
      career: "Corporate Affairs", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6"]
    },
    {
      career: "Digital IT", selected: false, subcareer: ["sub 1", "sub 2"]
    },
    {
      career: "Engineering", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5"]
    },
    {
      career: "Finance Accouting", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Human Resources", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Lab Testing", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Maintenance", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Marketing", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Process Technology", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Production", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Product Development", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Research Development", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Sales", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Sales Support", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "Safety Health and Environment", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
    {
      career: "SupplyChain", selected: false, subcareer: ["sub 1", "sub 2", "sub 3", "sub 4", "sub 5", "sub 6", "sub 7"]
    },
  ]);

  const handleChangeSelected = (index) => {
    let newArr = [...dataList];
    newArr[index].selected = !newArr[index].selected;
    setDataList(newArr);
  }

  const showDatalistSelected = () => {
    const grouped = groupBy(dataList, data => data.selected);
    var dataFilter = null;

    if (grouped.get(true)) {
      dataFilter = grouped.get(true)
    } else {
      dataFilter = grouped.get(false)
    }

    return (
      dataFilter.map((value, index) => (
        <div style={{ margin: 5 }}>
          <Button
            style={{ backgroundColor: "black", color: "white", width: 250, height: 60 }}
            disabled
          >{value.career}</Button>
          <div style={{ marginTop: 5, display: "flex", flexDirection: "column" }}>
            {
              value.subcareer.map((item) => (
                <Button
                  style={{ backgroundColor: index < 6 ? colorSub[index] : "gray", color: "white", width: 250, height: 60, margin: "5px 0px" }}
                  disabled
                >{item}</Button>
              ))
            }

          </div>

        </div>
      ))
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{paddingBottom: "100px"}}>
        <Grid container spacing={3}>
          <Grid item lg={3} style={{ background: "black" }}>
            <center>
              <HomeIcon onClick={()=>props.history.push("/career")} style={{ fontSize: 70, color: "white" }} />
              {/* <corporateAffairsBox />      */}
            </center>
            <MenuList>
              {
                dataList.map((value, index) => (
                  <MenuItem
                    style={{ color: value.selected ? "grey" : "white" }}
                    name={"itemCareer" + index}
                    onClick={() => handleChangeSelected(index)}
                  >
                    {value.career}
                  </MenuItem>
                ))
              }
            </MenuList>
            <CssBaseline />
          </Grid>
          <Grid item lg={9} style={{ backgroundColor: "white" }}>
            <div >
              <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                <Typography align="center" className={classes.text}> Career Pathways </Typography>
                <Typography align="center" className={classes.text}> Chemical Business </Typography>
              </div>
              <div className={classes.root}>
                <div style={{ display: "flex" }}>
                  {showDatalistSelected()}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
