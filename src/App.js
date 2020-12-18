import React from "react";
import "./style.css";
import ReactDOM from "react-dom";



export default class App extends React.Component{
  
  constructor(props){super(props);
  this.state={dateVisible:true}}

  onButtonClick()
  {this.setState(state=>({dateVisible:!state.dateVisible}))}
  
  
  render(){return(<div><button onClick={this.onButtonClick.bind(this)}>Elo</button>{this.state.dateVisible && <Data/>}</div>
  )
  }}
  

class Data extends React.Component{
  constructor(props){super(props);
  this.state={czesc:0}}


  render(){const dane=0;
  return dane;}
}