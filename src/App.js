// App.js
import React, { Component } from 'react';
import ComponentA from './Home/ComponentA';
import ComponentB from './SecondHome/ComponentB';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <ComponentA />
        <ComponentB />
      
      </div>
    );
  }
}

export default App;
