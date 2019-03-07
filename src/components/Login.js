import React, { Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { newSession } from '../actionCreators';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      employee: {
        email:'',
        password:''
      },
      redirectToReferrer: false
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

  handleSubmint = event => {
    event.preventDefault();
    const user = {
      email: this.state.employee.email,
      password: this.state.employee.password
    }

    this.hasEmptyFields(user);
  }

  hasEmptyFields(user) {
    const { email, password } = user;

    if (email === '' || password === '') {
      alert('There are empty fields!');
    }else{
      this.props.newSession(user)
      this.setState({employee:{email: '', password: ''}});
    }
  }

  render(){
    let { from } = this.props.location.state || { from: { pathName: "/new_employee" } }
    const { email, password } = this.state.employee
    const { redirectToReferrer } = this.props

    return(
      redirectToReferrer ? 
        <Redirect to={from} /> : 
        <Form onSubmit={this.handleSubmint}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={this.handleChange} required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={this.handleChange} required/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
  }
}
const mapStateToProps = state => {
  return{
    redirectToReferrer: state.redirectToReferrer
  };
};

const mapDispatchToProps = dispatch => {
  return{
    newSession(user){
      dispatch(newSession(user));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
