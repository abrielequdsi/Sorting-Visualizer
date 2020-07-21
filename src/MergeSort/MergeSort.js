import React from "react";
import { getMergeSortAnimations } from "./Algorithm.js";
import "./MergeSort.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ANIMATION_SPEED_MS = 25;
const NUMBER_OF_ARRAY_BARS = 25;
const PRIMARY_COLOR = "#90caf9";
const SECONDARY_COLOR = "red";

export default class Sortingmsizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(2, 100));
    }
    this.setState({ array });
  }

  mergeSort() {
    console.log("merge sort");
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("ms__bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card
          className={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingBottom: 0,
          }}
        >
          {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
          <CardContent>
            <Typography variant="h6" align="center" gutterBottom>
              Merge Sort
            </Typography>
            <Box pt={1}> </Box>
            <Paper>
              <div className="ms">
                <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={12}>
                    <div className="ms__container">
                      {array.map((value, idx) => (
                        <div className="ms__pair">
                          <div
                            className="ms__bar"
                            key={idx}
                            style={{
                              backgroundColor: PRIMARY_COLOR,
                              height: `${value}px`,
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
            <Box pt={3}> </Box>

            <Box align="left">
              <Typography variant="p">Summary: </Typography>
            </Box>
            <Box align="left">
              <Typography variant="p">
                Divides input array in two halves, calls itself for the two
                halves and then merges the two sorted halves
              </Typography>
            </Box>

            <Box pt={2} align="left">
              <Typography variant="small">Worst case: O(nlogn)</Typography>
            </Box>
            <Box pt={0} align="left">
              <Typography variant="small">Average case: O(nlogn)</Typography>
            </Box>
            <Box pt={0} align="left">
              <Typography variant="small">Best case: O(nlogn)</Typography>
            </Box>
          </CardContent>
          <Divider />
          <CardActions>
            {/* <Box pr={0}></Box> */}
            <Button
              size="small"
              color="primary"
              onClick={() => this.mergeSort()}
            >
              Run
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => this.resetArray()}
            >
              Reset Array
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
