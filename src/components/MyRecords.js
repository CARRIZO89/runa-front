import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadMyRecords } from '../actionCreators';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';

class MyRecords extends Component {
  componentDidMount() {
    this.props.loadMyRecords(this.props.current_user.id);
  }

  render(){
    return(
      <div>
         <NavBar />
         <Table responsive>
           <thead>
             <tr>
               <th>In</th>
               <th>Out</th>
             </tr>
           </thead>
           <tbody>
             {this.props.my_records.map((my_record, index) =>
               <tr id="my_record" key={index}>
                 <td>
                   {my_record.in_employee}
                 </td>
                 <td>
                   {my_record.out_employee}
                 </td>
               </tr>
             )}
           </tbody>
         </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    my_records: state.my_records,
    current_user: state.current_user,
    access_token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return{
    loadMyRecords(current_user_id){
      dispatch(loadMyRecords(current_user_id));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyRecords));
