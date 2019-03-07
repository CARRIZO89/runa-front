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

  newRecord(em) {
    this.props.setCurrentEmployee(em);
  }

  render(){
    return(
     <Table responsive>
       <thead>
         <tr>
           <th>#</th>
           <th>Legajo</th>
           <th>First Name</th>
           <th>Last Name</th>
         </tr>
       </thead>
       <tbody>
         {this.props.employees.map((em, index) =>
           <tr id="em" key={index}>
             <td>
               {em.id}
             </td>
             <td>
               {em.legajo}
             </td>
             <td>
               {em.first_name}
             </td>
             <td>
               {em.last_name}
             </td>
             <td>
              <Link to={`/employee/${em.id}/new_employee_record`} onClick={() => this.newRecord(em)}>Record</Link>
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
      dispatch(setCurrentEmployee(current_employee))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Employees));
