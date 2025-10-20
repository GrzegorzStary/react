import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'
import MethodsAsPropsParent from './MethodsAsPropsChild'
import MethodsAsPropsChild from './MethodsAsPropsParent'

export class NestingComponents extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoaded: false,
     isLoggedIn: true,
     isLoggedOut: false
  }
}
  render() {
    return (
      <div>
        <MethodsAsPropsParent isLoaded={this.state.isLoaded} />
        <MethodsAsPropsChild isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

export default NestingComponents