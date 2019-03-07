import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import store from '../store';
import { connect } from 'react-redux';
import { loadEmployees, setCurrentEmployee } from '../actionCreators';
import { withRouter, Link } from 'react-router-dom';

class Employees extends Component {
  componentDidMount() {
    this.props.loadEmployees();
  }

  currentEmployee(employee) {
    this.props.setCurrentEmployee(employee);
  }

  render(){
    return(
     <Table responsive>
       <thead>
         <tr>
           <th>Legajo</th>
           <th>First Name</th>
           <th>Last Name</th>
         </tr>
       </thead>
       <tbody>
         {this.props.employees.map((employee, index) =>
           <tr id="employee" key={index}>
             <td>
               {employee.legajo}
             </td>
             <td>
               {employee.first_name}
             </td>
             <td>
               {employee.last_name}
             </td>
             <td>
              <Link to={`/employee/${employee.id}/edit_employee`} onClick={() => this.currentEmployee(employee)}>Edit Employee</Link>
              </td>
             <td>
              <Link to={`/employee/${employee.id}/new_employee_record`} onClick={() => this.currentEmployee(employee)}>New Record</Link>
              </td>
           </tr>
         )}
       </tbody>
     </Table>
    );
  }
}

const mapStateToProps = state => {
  return{
    employees: state.employees
  }
}

const mapDispatchToProps = dispatch => {
  return{
    loadEmployees(){
      dispatch(loadEmployees());
    },
    setCurrentEmployee(current_employee){
      dispatch(setCurrentEmployee(current_employee));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Employees));
