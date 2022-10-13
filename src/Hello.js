import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

class Hello extends React.Component {
  render() {
    console.log(this.props);
      return ( 
      <h1 style={{color:this.props.isLight ? "#293241" : "#f8f9fa"}}>
         {this.props.title}
      </h1>
)
}
}
export default Hello;