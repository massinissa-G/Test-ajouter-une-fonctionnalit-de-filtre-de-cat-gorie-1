import React, { Component } from 'react'

import ToggleButton from './ToggleButton'
import DeleteBtn from './Button'

class Card extends Component {
  constructor (props) {
    super(props)

    this.state = {
      likes: props.likes,
      dislikes: props.dislikes
    }
  }

  clickHandler (value) {
    if (!value) {
      this.setState(prev=>{
        return {
          likes: prev.likes + 1,

        }
      })
    } else {
      this.setState(prev=>{
        return {
          likes: prev.likes - 1,
        }
      })
    }
  }

  render () {
    return (
      <div className='card'>
        <h1 className='card__title'>{this.props.title}</h1>
        <p className="card__subtitle" >
          {this.props.category}
        </p>

        <div className='card__footer'>
          <div> {this.state.likes} Likes </div>
          <div> {this.state.dislikes} Dislikes </div>
        </div>

        <ToggleButton click={this.clickHandler.bind(this)} />
        
        <DeleteBtn class="btn btn--delete" click={this.props.onDelete.bind(this,this.props.id)}>✗</DeleteBtn>

      </div>
    )
  }
}

export default Card
