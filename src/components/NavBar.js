import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { destroySession } from '../actionCreators';

class NavBar extends Component {
  destroySession(current_user){
    this.props.destroySession(current_user)
  }

  renderEmployeeLinks() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand><Link to="/my_records">My Records</Link></Navbar.Brand>
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
    return(
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
