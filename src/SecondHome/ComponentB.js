import React, { Component } from 'react';

class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.Name}</h2>
        <p>This is Component B.</p>
      </div>
    );
  }
}

export default ComponentB;
