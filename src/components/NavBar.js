import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { destroySession } from '../actionCreators';

class NavBar extends Component {
  destroySession(current_user){
    this.props.destroySession(current_user)
  }

  renderEmployeeLinks() {
    return (
      <div>
        <Nav.Item>
          <Link to="/my_records">My Records</Link>
        </Nav.Item>
      </div>
    )
  }

  renderAdminLinks() {
    return (
      <div>
        <Nav.Item>
          <Link to="/employees">Employees</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/employee_records">Employee Records</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/new_employee">New Employee</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/employee/{current_user.id}/new_employee_record">New Employee Record</Link>
        </Nav.Item>
      </div>
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
        <Nav.Item>
          <Nav.Link type="submit" onClick={() => this.destroySession(this.props.current_user)}>
            Sing Out
          </Nav.Link>
        </Nav.Item>
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
