import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import TimeList from "./TimeList";
import { TestContext } from "./testContext";
var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }

  static contextType = TestContext;

  StartInterval = () => {
    if (this.state.isStart == false) {
      this.setState({
        isStart: true,
      });
      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second == 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }
        if (this.state.minute == 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };

  StopInterval = () => {
    this.setState({
      isStart: false,
    });
    clearInterval(interval);
  };

  ResetInterval = () => {
    this.StopInterval();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
  };

  handelSaveTime = () => {
    let hour = this.state.hour;
    let minute = this.state.minute;
    let second = this.state.second;
    let NewTime = `${hour > 9 ? hour : "0" + hour} : ${
      minute > 9 ? minute : "0" + minute
    } : ${second > 9 ? second : "0" + second}`;
    this.context.setTimeArr([...this.context.timeArr, NewTime]);
  };

  render() {
    console.log("render");
    let hour = this.state.hour;
    let minute = this.state.minute;
    let second = this.state.second;
    return (
      <>
        <h2 className="timer" onClick={this.handelSaveTime}>
          Time it is{" "}
          {`${hour > 9 ? hour : "0" + hour} : ${
            minute > 9 ? minute : "0" + minute
          } : ${second > 9 ? second : "0" + second}`}
        </h2>
        <div>
          <button
            className="btn btnChange"
            onClick={this.props.handleSetTitle}
            style={{ color: this.props.isLight ? "White" : "Black" }}
          >
            Change Text
          </button>
          <button
            className="btn btnStart"
            onClick={this.StartInterval}
            style={{ color: this.props.isLight ? "White" : "Black" }}
          >
            Start
          </button>
          <button
            className="btn btnStop"
            onClick={this.StopInterval}
            style={{ color: this.props.isLight ? "White" : "Black" }}
          >
            Stop
          </button>
          <button
            className="btn btnReset"
            onClick={this.ResetInterval}
            style={{ color: this.props.isLight ? "White" : "Black" }}
          >
            Reset
          </button>
          <button
            className="btn btnTheme"
            onClick={this.props.handleSetIsLight}
            style={{
              background: this.props.isLight ? "Black" : "White",
              color: this.props.isLight ? "White" : "Black",
            }}
          >
            {this.props.isLight ? "Dark" : "Light"}
          </button>
        </div>
        <TimeList>{this.context.timeArr}</TimeList>
      </>
    );
  }
}

export default Timer;
