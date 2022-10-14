import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

class Hello extends React.Component {
  render() {
    console.log(this.props);
      return ( 
      <h1 className='hello'>
         {this.props.title}
      </h1>
)
}
}
export default Hello;