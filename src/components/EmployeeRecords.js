import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadEmployeeRecords } from '../actionCreators';
import { withRouter, Link } from 'react-router-dom';

class EmployeeRecords extends Component {
  componentDidMount(){
    this.props.loadEmployeeRecords();
  }

  render(){
    return(
     <Table responsive>
       <thead>
         <tr>
           <th>Employee ID</th>
           <th>In</th>
           <th>Out</th>
         </tr>
       </thead>
       <tbody>
         {this.props.employee_records.map((employee_record, index) =>
           <tr id="employee_record" key={index}>
             <td>
               {employee_record.user_id}
             </td>
             <td>
               {employee_record.in_employee}
             </td>
             <td>
               {employee_record.out_employee}
             </td>
             <td>
                <Link to={`/employee/${employee_record.user_id}/new_employee_record`}>Update Record</Link>
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
  }
}

const mapDispatchToProps = dispatch => {
  return{
    loadEmployeeRecords(){
      dispatch(loadEmployeeRecords());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeeRecords));
