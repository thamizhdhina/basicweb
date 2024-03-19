import React, { Component } from 'react';
import ComponentB from '../SecondHome/ComponentB';
class ComponentA extends Component {
  render() {
    return (
      <div>
        <ComponentB Name='ComponentB from Component A' />
        <h2>Component A</h2>
        <p>This is Component A.</p>
      </div>
    );
  }
}

export default ComponentA;
