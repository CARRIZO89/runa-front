import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Employees from './Employees'
import NewEmployee from './NewEmployee'
import EditEmployee from './EditEmployee'
import EmployeeRecords from './EmployeeRecords';
import NewEmployeeRecord from './NewEmployeeRecord'
import { BrowserRouter } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import NavBar from './NavBar';

class PanelAdmin  extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <React.Fragment>
            <NavBar />
            <AdminRoute path="/employees" component={Employees}/>
            <AdminRoute exact path="/employee_records" component={EmployeeRecords}/>
            <AdminRoute path="/new_employee" component={NewEmployee}/>
            <AdminRoute path="/employee/:id/edit_employee" component={EditEmployee}/>
            <AdminRoute path="/employee/:id/new_employee_record" component={NewEmployeeRecord}/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default PanelAdmin;
