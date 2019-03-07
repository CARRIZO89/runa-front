import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import store from '../store';
import { connect } from 'react-redux';
import { loadEmployeeRecords } from '../actionCreators';

store.dispatch(loadEmployeeRecords());

class EmployeeRecords extends Component {

  render(){
    return(
     <Table responsive>
       <thead>
         <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>In</th>
           <th>Out</th>
         </tr>
       </thead>
       <tbody>
         {this.props.employee_records.map((er, index) =>
           <tr id="er" key={index}>
             <td>
               {er.first_name}
             </td>
             <td>
               {er.last_name}
             </td>
             <td>
               {er.in}
             </td>
             <td>
               {er.out}
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
    employee_records: state.employee_records
  };
};

export default connect(mapStateToProps)(EmployeeRecords);
