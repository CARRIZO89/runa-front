import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Login from './components/Login';
import Employees from './components/Employees'
import NewEmployee from './components/NewEmployee'
import EditEmployee from './components/EditEmployee'
import EmployeeRecords from './components/EmployeeRecords';
import MyRecords from './components/MyRecords';
import NewEmployeeRecord from './components/NewEmployeeRecord';
import PanelAdmin from './components/PanelAdmin';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminRoute from './components/AdminRoute';
import EmployeeRoute from './components/EmployeeRoute';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path="/" render={() => <Link to="/login">Login</Link> } />
              <Route exact path="/login" component={Login}/>
              <AdminRoute path="/admin" component={PanelAdmin}/>
              <EmployeeRoute path="/my_records" component={MyRecords}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    current_user: state.current_user,
    type_user: state.type_user
  };
};

export default connect(mapStateToProps)(App);
