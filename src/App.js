import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Login from './components/Login';
import Employees from './components/Employees'
import NewEmployee from './components/NewEmployee'
import EditEmployee from './components/EditEmployee'
import EmployeeRecords from './components/EmployeeRecords';
import MyRecords from './components/MyRecords';
import NewEmployeeRecord from './components/NewEmployeeRecord'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminRoute from './components/AdminRoute';
import EmployeeRoute from './components/EmployeeRoute';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <div>

        <BrowserRouter>
          <React.Fragment>
            { this.props.current_user ?
              <NavBar />
               :
              null }
            <Route path="/login" component={Login}/>
            <AdminRoute path="/employees" component={Employees}/>
            <AdminRoute path="/employee_records" component={EmployeeRecords}/>
            <AdminRoute path="/new_employee" component={NewEmployee}/>
            <AdminRoute path="/employee/:id/edit_employee" component={EditEmployee}/>
            <AdminRoute path="/employee/:id/new_employee_record" component={NewEmployeeRecord}/>
            <EmployeeRoute path="/my_records" component={MyRecords}/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    current_user: state.current_user
  };
};

export default connect(mapStateToProps)(App);
