import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { destroySession } from '../actionCreators';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sing_out: false
    }
  }

  destroySession(current_user){
    this.props.destroySession(current_user);
    this.setState({sing_out: true});
  }

  renderEmployeeLinks() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
          <Nav.Link type="submit" onClick={() => this.destroySession(this.props.current_user)}>
            Sing Out
          </Nav.Link>
        </Navbar.Brand>
      </Navbar>
    )
  }

  renderAdminLinks() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand><Link to="/employees">Employees</Link></Navbar.Brand>
        <Navbar.Brand><Link to="/employee_records">Employee Records</Link></Navbar.Brand>
        <Navbar.Brand><Link to="/new_employee">New Employee</Link></Navbar.Brand>
        <Navbar.Brand>
          <Nav.Link type="submit" onClick={() => this.destroySession(this.props.current_user)}>
            Sing Out
          </Nav.Link>
        </Navbar.Brand>
      </Navbar>
    )
  }

render() {
    const { sing_out } = this.state

    return(
      sing_out ? 
        <Redirect to={{ pathname: "/", state: { from: this.props.location } }} /> 
      : 
        <Nav activeKey="/home">
          { 
            this.props.type_user === 'Employee' 
            ? this.renderEmployeeLinks() 
            : this.renderAdminLinks() 
          }
        </Nav>
    )
  }
}

const mapStateToProps = state => {
  return{
    current_user: state.current_user,
    type_user: state.type_user
  };
};

const mapDispatchToProps = dispatch => {
  return{
    destroySession(current_user){
      dispatch(destroySession(current_user));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
