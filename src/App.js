import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age:28},
      { name: 'Manu', age:29},
      { name: 'Stephanie', age:26}
    ],
    otherState: 'some other value'
  }

  changeDataHandler = () => {
    this.setState( {
      persons: [
        { name: 'Maximillian', age:28 },
        { name: 'Manu', age:29 },
        { name: 'Stephanie', age:27 }
      ] 
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={this.changeDataHandler}>ChangeData</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Coding</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    );
    // The above code is equivalent to the below commented code. The above is JSX, and the below is React JS.

    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react App'));
  }
}

export default App;
