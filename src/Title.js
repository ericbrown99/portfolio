import React, { Component } from 'react';
import { CSSTransitionGroup} from 'react-transition-group';

class Title extends Component {
  constructor(props){
    super(props)
    this.state={
      titleState: this.props.titleState, // passing down title state from App, changes upon clicking title bar
    }
  }


  displayLine1 = () => {
    if(this.props.titleState == 0){
      return(
        <div>
           <span className="bold"> Eric Brown </span>
           <span>is an </span>
           <span className="italics"> emerging technology</span>
        </div>
      )
    }
    if(this.props.titleState == 1){
      return(
        <div>
          <span className="bold"> Writing </span>
          <span> & storytelling </span>
          <span> provide an outlet </span>
        </div>
      )
    }
    if(this.props.titleState == 2) {
      return(
        <div>
          <span className="bold">The gift of exploration</span>
          <span>: to travel is </span>
        </div>
      )
    }
  }

  displayLine2 = () => {
    if(this.props.titleState == 0){
      return(
           "consultant & developer specialized"
      )
    }
    if(this.props.titleState == 1){
      return(
        <div>
          <span> to </span>
          <span className="italics"> explore </span>
          <span>complex ideas, particularly </span>
        </div>
      )
    }
    if(this.props.titleState == 2) {
      return(
        <div>
          <span>to seek </span>
          <span className="italics">perspective, growth,</span>
          <span>& </span>
          <span className="italics">life.</span>
        </div>
      )
    }
  }

  displayLine3 = () => {
    if(this.props.titleState == 0){
      return(
        <div>
           <span>in </span>
           <span className="italics"> healthcare</span>
           <span>, based out of</span>
           <span className="italics"> NYC. </span>
        </div>
      )
    }
    if(this.props.titleState == 1){
      return(
        <div>
          <span className="italics"> life, technology,</span>
          <span> & </span>
          <span className="italics">the future. </span>
        </div>
      )
    }
    if(this.props.titleState == 2) {
      return(
           "There is no greater gift."
      )
    }
  }

  setClass = () =>{

  }

  render() {
    this.setClass()
    return(
      <div className="title-container">
        <div id="span-1">
          {this.displayLine1()}
        </div>
        <div id="span-2">
          {this.displayLine2()}
        </div>
        <div id="span-3">
          {this.displayLine3()}
        </div>
      </div>
    )
  }
}

export default Title;
