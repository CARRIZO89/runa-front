import React, { Component } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { newEmployee } from '../actionCreators';
import { connect } from 'react-redux';
import Employees from './Employees';

class NewEmployee extends Component {
  constructor(props){
    super(props);
    this.state = {
      employee: {
        legajo: '',
        first_name:'',
        last_name:'',
        email:'',
        password:''
      }
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    let employee = this.state.employee;
    employee[name] = value
    this.setState({
      employee
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const employee = {
      legajo: this.state.employee.legajo,
      first_name: this.state.employee.first_name,
      last_name: this.state.employee.last_name,
      email: this.state.employee.email,
      password: this.state.employee.password
    };
    this.hasEmptyFields(employee);
  }

  hasEmptyFields(employee){
    const { legajo, first_name, last_name, email, password } = employee;

    if (legajo === '' || first_name === '' || last_name === '' || email === '' || password === '') {
      alert('There are empty fields!');
    }else{
      this.props.newEmployee(employee);
      alert('The operation was successful');
      this.setState({employee:{legajo: '', first_name: '', last_name: '', email: '', password: ''}});
    }
  }

  render(){
    const { legajo, first_name, last_name, email, password } = this.state.employee

    return(
      <div>
        <Row>
          <Col md={6}>
            <Form onSubmit={this.handleSubmit}>
            <h1>Employee</h1>
              <FormControl type="text" placeholder="Legajo" name='legajo' value={legajo} onChange={this.handleChange} required/>
              <FormControl type="text" placeholder="First name" name='first_name' value={first_name} onChange={this.handleChange} required/>
              <FormControl type="text" placeholder="Last name" name='last_name' value={last_name} onChange={this.handleChange} required/>
              <FormControl type="text" placeholder="Email" name='email' value={email} onChange={this.handleChange} required/>
              <FormControl type="text" placeholder="Password" name='password' value={password} onChange={this.handleChange} required/>
              <Button type="submit">Aceptar</Button>
            </Form>
          </Col>
          <Col md={6}>
            <Employees />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    newEmployee(employee){
      dispatch(newEmployee(employee));
    }
  }
};

export default connect(null, mapDispatchToProps)(NewEmployee);
