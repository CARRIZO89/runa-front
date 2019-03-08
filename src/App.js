import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Login from './components/Login';
import MyRecords from './components/MyRecords';
import PanelAdmin from './components/PanelAdmin';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminRoute from './components/AdminRoute';
import EmployeeRoute from './components/EmployeeRoute';
import './assets/styles/App.css';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path="/" render={() => (
                <div className="main-container">
                  <h1 className="logo"></h1>
                  <Link to="/login" className="btn btn-primary">Login</Link>
                </div>)} />
              <Route exact path="/login" component={Login}/>
              <AdminRoute path="/admin" component={PanelAdmin}/>
              <EmployeeRoute path="/my_records" component={MyRecords}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    current_user: state.current_user,
    type_user: state.type_user
  };
};

export default connect(mapStateToProps)(App);
