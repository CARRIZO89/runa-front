import React, { Component } from 'react';
import { Form, FormControl, Button, Col } from 'react-bootstrap';
import { addToListRecords } from '../actionCreators';
import { connect } from 'react-redux';

class NewEmployeeRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_record: {
        employee_id: '',
        in_employee: '',
        out_employee: ''
      }
    }
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    let employee_record = this.state.employee_record;
    employee_record[name] = value
    this.setState({
      employee_record
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const employee_record = {
      employee_id: this.state.employee_record.employee_id,
      in_employee: this.state.employee_record.in_employee,
      out_employee: this.state.employee_record.out_employee
    }

    this.props.addToListRecords(employee_record);
    this.setState({employee_record: {employee_id: '', in_employee: '', out_employee: ''}})
  }

  render(){
    const { employee_id, in_employee, out_employee } = this.state.employee_record

    return(
      <Form onSubmit={this.handleSubmit}>
        <h1>New Employee Record</h1>
        <Col>
          <FormControl type="text" placeholder="Employee ID" name='employee_id' value={employee_id} onChange={this.handleChange}/>
        </Col>
        <Col>
          <FormControl type="text" placeholder="In" name='in_employee' value={in_employee} onChange={this.handleChange}/>
        </Col>
        <Col>
          <FormControl  type="text" placeholder="Out" name='out_employee' value={out_employee} onChange={this.handleChange}/>
        </Col>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addToListRecords(employee_record){
      dispatch(addToListRecords(employee_record));
    }
  }
}

export default connect(null, mapDispatchToProps)(NewEmployeeRecord);
