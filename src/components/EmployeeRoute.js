import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

function EmployeeRoute({ component: Component, type_user, ...rest }) {
 return (
   <Route
     {...rest}
     render={ props =>
       type_user === 'Employee'
        ? <Component {...props} /> 
        : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
     }
   />
 );
}

const mapStateToProps = state => {
  return{
    current_user: state.current_user,
    type_user: state.type_user,
  }
};

export default withRouter(connect(mapStateToProps)(EmployeeRoute));
