import React, { Component } from 'react';
import { Form, FormControl, Button, Col } from 'react-bootstrap';
import { newEmployeeRecord, updateEmployeeRecord } from '../actionCreators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import './CommonStyles.css';

class NewEmployeeRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_record: {
        employee_id: this.props.match.params.id,
        in_employee: null,
        out_employee: null
      },
      employee_id: this.props.match.params.id,
      saved: false
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      headers: { 'access-token': this.props.headers.token,
                 'client': this.props.headers.client,
                 'uid': this.props.headers.uid },
      url: `http://localhost:3000/api/v1/employees/${this.state.employee_id}/employee_records/last`
    }).then(response => {
      this.setState({
        employee_record: response.data.employee_record
      })
    });
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    let employee_record = this.state.employee_record;
    employee_record[name] = value
    this.setState({
      employee_record
    })
  }

  isOutEmployeePresent() {
    return this.state.employee_record.out_employee !== null
  }

  isIn() {
    return this.state.employee_record.in_employee === null &&
      !this.isOutEmployeePresent()
  }

  isOut() {
    return this.state.employee_record.in_employee !== null &&
      !this.isOutEmployeePresent()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const employee_record = {
      user_id: this.state.employee_id,
      in_employee: this.state.employee_record.in_employee,
      out_employee: this.state.employee_record.out_employee
    }
    this.hasEmptyFields(employee_record);
  }

  hasEmptyFields(employee_record) {
    const { user_id, in_employee, out_employee } = employee_record

    if (user_id === '' || in_employee === '' || out_employee === '') {
      alert('There are empty fields!')
    }else{
      this.isIn() 
        ? this.props.newEmployeeRecord(employee_record)
        : this.props.updateEmployeeRecord(employee_record)

      alert('The operation was successful');
      this.setState({saved: true});
    }
  }

  render(){
    const { employee_id, in_employee, out_employee } = this.state.employee_record
    const { saved } = this.state

    return(
        saved 
        ? <Redirect to={{ pathname: "/employees", state: { from: this.props.location } }} />
        : <Form className="common-styles" onSubmit={this.handleSubmit}>
        <h1>New Employee Record</h1>
        <Col>
          <FormControl type="text" placeholder="Employee ID" name='employee_id' value={employee_id} readonly/>
        </Col>
        <Col>
          <FormControl type="text" placeholder="In" name='in_employee' value={in_employee} readonly/>
        </Col>
        <Col>
          <FormControl  type="text" placeholder="Out" name='out_employee' value={out_employee} readonly/>
        </Col>
        <Button variant="primary" type="submit">
          { this.isIn() ? 'Save In' : 'Update Out' }
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_employee: state.current_employee,
    headers: {
      token: state.token,
      client: state.client,
      uid: state.uid 
    }
  }
}

const mapDispatchToProps = dispatch => {
  return{
    newEmployeeRecord(employee_record){
      dispatch(newEmployeeRecord(employee_record));
    },
    updateEmployeeRecord(employee_record){
      dispatch(updateEmployeeRecord(employee_record));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEmployeeRecord);
