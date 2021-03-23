import React,{ Component } from "react";
import Button from "./Button";

class ToggleButton extends Component{

  constructor(props)
  {
    super(props);

    this.state = {
      liked: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
   
    this.setState((prev)=>{
      
      this.props.click(this.state.liked)

      return {
        liked: !prev.liked
      }
    })

  }

  render(){

    let style = !this.state.liked ? { color: 'white' } : {color : 'black'};

    return <Button class="btn btn--togglelike" style={style} click={this.clickHandler}>❤</Button> 

  }

}

export default ToggleButton;