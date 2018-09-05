import React, { Component } from 'react';

import classes from './App.css';
import Todo from './Containers/Todo/Todo';


class App extends Component {
  render() {
    return (
      <div>
          <h1 className={classes.hello}> (( React Todo )) </h1>
          <Todo />
     </div>

    );
  }
}

export default App;
