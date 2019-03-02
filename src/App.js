import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Login from './components/Login';
import NewEmployee from './components/NewEmployee'
import EmployeeRecords from './components/EmployeeRecords';
import MyRecords from './components/MyRecords';
import NewEmployeeRecord from './components/NewEmployeeRecord'

class App extends Component {
  render() {
    return (
      <div>
        <NewEmployeeRecord />
        <MyRecords />
      </div>
    );
  }
}

export default App;
