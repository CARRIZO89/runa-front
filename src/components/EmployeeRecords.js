import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import store from '../store';

class EmployeeRecords extends Component {
  constructor() {
    super();
    this.state = {
      employee_records: [
      {id: 1, first_name: "Miguel", last_name: "Carrizo", in: '2019-02-27T01:05:00.000Z', out: ''},
      {id: 2, first_name: "Maria", last_name: "Lopez", in: '2019-02-27T02:05:00.000Z', out: '2019-02-27T05:05:00.000Z'},
      {id: 3, first_name: "Lucas", last_name: "Garcia", in: '2019-02-27T03:05:00.000Z', out: ''}
      ]
    }
  }

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
         {this.state.employee_records.map((er, index) =>
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

export default EmployeeRecords;
