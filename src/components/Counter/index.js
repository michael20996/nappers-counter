import React, {Component, useState } from 'react';
import OutlinedButtons from '../AwakeBtn';

export default class Counter extends Component {
  
  
  
  render() {
      return (
          <div className="Play">
              <div className="count">
                Awake mode count: {this.props.testCount}
              </div>
          </div>
      );
  }
}



