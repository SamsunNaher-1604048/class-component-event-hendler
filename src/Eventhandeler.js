import React, { Component } from 'react'


export default class Eventhandeler extends Component {
    constructor(props){
        super(props)
      
        this.state = {
           name:' ',
        }
      }
      change=(text)=>{
          this.setState({
              name:text.target.value
          })
      }

  render() {
      
    return (
      <div>
          <input type='text' onChange={this.change}></input>
          <p>{this.state.name}</p>


      </div>
    )
  }
}
