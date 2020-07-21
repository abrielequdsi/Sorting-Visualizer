import React from "react";
import { getBubbleSortAnimations } from "./Algorithm.js";
import "./BubbleSort.css";
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

export default class SortingVisualizer extends React.Component {
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

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      const arrayBars = document.getElementsByClassName("bs__bar");
      if (isColorChange === true) {
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
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
              Bubble Sort
            </Typography>
            <Box pt={1}> </Box>
            <Paper>
              <div className="bs">
                <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={12}>
                    <div className="bs__container">
                      {array.map((value, idx) => (
                        <div className="bs__pair">
                          <div
                            className="bs__bar"
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
                Repeatedly swapping the adjacent elements if they are in wrong
                order.
              </Typography>
            </Box>

            <Box pt={2} align="left">
              <Typography variant="small">Worst case: O(n²)</Typography>
            </Box>
            <Box pt={0} align="left">
              <Typography variant="small">Average case: O(n²)</Typography>
            </Box>
            <Box pt={0} align="left">
              <Typography variant="small">Best case: O(n)</Typography>
            </Box>
          </CardContent>
          <Divider />
          <CardActions>
            {/* <Box pr={0}></Box> */}
            <Button
              size="small"
              color="primary"
              onClick={() => this.bubbleSort()}
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
