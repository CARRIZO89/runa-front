import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import store from '../store';

class MyRecords extends Component {
  constructor() {
    super();
    this.state = {
      my_records: [
      {in: '2019-01-27T01:05:00.000Z', out: '2019-02-27T07:05:00.000Z'},
      {in: '2019-01-28T02:05:00.000Z', out: '2019-02-27T05:05:00.000Z'},
      {in: '2019-01-29T03:05:00.000Z', out: ''}
      ]
    }
  }

  render(){
    return(
     <Table responsive>
       <thead>
         <tr>
           <th>In</th>
           <th>Out</th>
         </tr>
       </thead>
       <tbody>
         {this.state.my_records.map((er, index) =>
           <tr id="er" key={index}>
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

export default MyRecords;
