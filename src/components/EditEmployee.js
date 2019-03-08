import React, { Component } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { editEmployee } from '../actionCreators';
import { connect } from 'react-redux';
import './CommonStyles.css';

class EditEmployee extends Component {
  constructor(props){
    super(props);
    this.state = {
      employee: {
        id: props.current_employee.id,
        legajo: props.current_employee.legajo,
        first_name: props.current_employee.first_name,
        last_name: props.current_employee.last_name,
        email: props.current_employee.email
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
      id: this.state.employee.id,
      legajo: this.state.employee.legajo,
      first_name: this.state.employee.first_name,
      last_name: this.state.employee.last_name,
      email: this.state.employee.email
    };
    this.hasEmptyFields(employee);
  }

  hasEmptyFields(employee){
    const { legajo, first_name, last_name, email } = employee;

    if (legajo === '' || first_name === '' || last_name === '' || email === '' ) {
      alert('There are empty fields!');
    }else{
      this.props.editEmployee(employee);
      alert('The operation was successful');
      this.setState({employee:{legajo: '', first_name: '', last_name: '', email: ''}});
    }
  }

  render(){
    const { legajo, first_name, last_name, email } = this.state.employee

    return(
      <div>
        <Row>
          <Form className="common-styles" onSubmit={this.handleSubmit}>
            <h1>Employee</h1>
              <FormControl type="text" placeholder="Legajo" name='legajo' value={legajo} onChange={this.handleChange} required/>
              <FormControl type="text" placeholder="First name" name='first_name' value={first_name} onChange={this.handleChange} required/>
              <FormControl type="text" placeholder="Last name" name='last_name' value={last_name} onChange={this.handleChange} required/>
              <FormControl type="text" placeholder="Email" name='email' value={email} onChange={this.handleChange} required/>
              <Button type="submit">Aceptar</Button>
            </Form>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    current_employee: state.current_employee
  }
};

const mapDispatchToProps = dispatch => {
  return{
    editEmployee(employee){
      dispatch(editEmployee(employee));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
