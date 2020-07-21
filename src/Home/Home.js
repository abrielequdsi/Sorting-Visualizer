import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import BubbleSort from "../BubbleSort/BubbleSort.js";
import SelectionSort from "../SelectionSort/SelectionSort.js";
import InsertionSort from "../InsertionSort/InsertionSort.js";

import MergeSort from "../MergeSort/MergeSort.js";
import QuickSort from "../QuickSort/QuickSort.js";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ justifyContent: "center" }}>
          <AllInclusiveIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Sorting Visualizer
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ backgroundColor: "rgb(36, 36, 36)" }}>
        <Container
          className={classes.cardGrid}
          maxWidth="lg"
          style={{ backgroundColor: "rgb(36, 36, 36)" }}
        >
          {/* End hero unit */}
          <Grid
            container
            spacing={4}
            justify="center"
            style={{ backgroundColor: "rgb(36, 36, 36)" }}
          >
            <BubbleSort />
            <SelectionSort />
            <InsertionSort />
            <MergeSort />
            <QuickSort />
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          abrielequdsi
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
