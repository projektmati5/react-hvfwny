import React from "react";
import "./style.css";
import ReactDOM from "react-dom";



export default class App extends React.Component{
  
  constructor(props){super(props);
  this.state={dateVisible:true}}

  onButtonClick()
  {this.setState(state=>({dateVisible:!state.dateVisible}))}
  
  
  render(){return(<div><button onClick={this.onButtonClick.bind(this)}>Elo</button>{
    //if(this.state.dateVisible==true){},
    
     this.state.dateVisible&&<Data/>}</div>
  )
  }}
  

class Data extends React.Component{
  constructor(props){super(props);
  this.state={czesc:0, date:new Date()}}


componentDidMount() {
    this.timerId = window.setInterval(this.updateDate.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

updateDate() {
    this.setState({
      date: new Date()
    });
  }


  render(){const dane=0;

  const dateStr = this.state.date.toString();

  return <button>{dateStr}</button>;}
}