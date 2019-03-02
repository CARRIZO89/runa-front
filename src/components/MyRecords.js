import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

export const MyRecords = (props) => {
  return(
   <Table responsive>
     <thead>
       <tr>
         <th>In</th>
         <th>Out</th>
       </tr>
     </thead>
     <tbody>
       {props.employee_records.map((er, index) =>
         <tr id="er" key={index}>
           <td>
             {er.in_employee}
           </td>
           <td>
             {er.out_employee}
           </td>
         </tr>
       )}
     </tbody>
   </Table>
  );
}

const mapStateToProps = state => {
  return{
    employee_records: state.employee_records
  }
}

export default connect(mapStateToProps)(MyRecords);
