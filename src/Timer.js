import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

var interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour:0,
      minute:0,
      second:0,
      isStart:false
    }
  }
  StartInterval=()=>{
      if(this.state.isStart == false){
        this.setState({
          isStart:true 
        })
        interval = setInterval(() => {
          this.setState({
              second:this.state.second+1
            })
            if(this.state.second == 60){
              this.setState({
                second:0,
                minute:this.state.minute+1
              })
            }
            if(this.state.minute == 60){
              this.setState({
                minute:0,
                hour:this.state.hour+1
              })
            }
          }, 1000)
      }
    }
  
  StopInterval=()=>{
    this.setState({
      isStart:false 
    })
    clearInterval(interval)
  }

  ResetInterval=()=>{
    this.StopInterval();
    this.setState({
      hour:0,
      minute:0,
      second:0,
    })
  }

  render() {
   console.log("render");
   let hour=this.state.hour;
   let minute=this.state.minute;
   let second=this.state.second;
    return ( 
      <>
        <h2 className = 'timer' >
          Time it is {`${hour > 9 ? hour : "0" + hour} : ${minute > 9 ? minute : "0" + minute} : ${second > 9 ? second : "0" + second}`} 
        </h2>
        <div>
          <button className='btn btnChange' onClick={this.props.handleSetTitle} style={{color:this.props.isLight ? "#f8f9fa" : "#293241"}}>
            Change Text
          </button>
          <button className='btn btnStart' onClick={this.StartInterval} style={{color:this.props.isLight ? "#f8f9fa" : "#293241"}}>
            Start
          </button>
          <button className='btn btnStop' onClick={this.StopInterval} style={{color:this.props.isLight ? "#f8f9fa" : "#293241"}}>
            Stop
          </button>
          <button className='btn btnReset' onClick={this.ResetInterval} style={{color:this.props.isLight ? "#f8f9fa" : "#293241"}}>
            Reset
          </button>
          <button className='btn btnisLight' onClick={this.props.handleSetisLight}
            style={{background:this.props.isLight ? "#293241" : "#f8f9fa" , 
            color:this.props.isLight ? "#f8f9fa" : "#293241"
          }}
          >
            {this.props.isLight ? "black" : "white"}
          </button>
        </div>
      </>
    )
  }
}
export default Timer;