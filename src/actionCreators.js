import axios from 'axios';

const newSession = current_user => {
return dispatch => {
    axios({
      method: 'POST',
      headers: { 'Accept': 'application/json'},
      url: 'http://localhost:3000/api/v1/users/sign_in',
      data: {
        email: current_user.email,
        password: current_user.password
      }
    }).then(response => {
      dispatch({
        type: "NEW_SESSION",
        current_user: response.data.user,
        type_user: response.data.type_user,
        token: response.headers["access-token"],
        client: response.headers.client,
        uid: response.headers.uid
      })
    });
  }
};

const destroySession = current_user => {
return (dispatch, getState) => {
    axios({
      method: 'DELETE',
      headers: { 'access-token': getState().token,
                 'client': getState().client,
                 'uid': getState().uid },
      url: 'http://localhost:3000/api/v1/users/sign_out',
    }).then(response => {
      dispatch({
        type: "DELETE_SESSION"
      })
    });
  }
};

const loadEmployees = () => {
  return (dispatch, getState) => {
    axios({
      method: 'GET',
      headers: { 'access-token': getState().token,
                 'client': getState().client,
                 'uid': getState().uid },
      url: `http://localhost:3000/api/v1/employees`
    }).then(response => {
      dispatch({
        type: "LOAD_EMPLOYEES",
        employees: response.data.employees
      });
    });
  }
};

const loadEmployeeRecords = () => {
  return (dispatch, getState) => {
    axios({
      method: 'GET',
      headers: { 'access-token': getState().token,
                 'client': getState().client,
                 'uid': getState().uid },
      url: `http://localhost:3000/api/v1/employee_records`
    }).then(response => {
      dispatch({
        type: "LOAD_EMPLOYEE_RECORDS",
        employee_records: response.data.employee_records
      });
    });
  }
};

const loadMyRecords = (current_user_id) => {
  return (dispatch, getState) => {
    axios({
      method: 'GET',
      headers: { 'access-token': getState().token,
                 'client': getState().client,
                 'uid': getState().uid },
      url: `http://localhost:3000/api/v1/employees/${current_user_id}/employee_records`
    }).then(response => {
      dispatch({
        type: "LOAD_MY_RECORDS",
        my_records: response.data.employee_records
      });
    });
  }
};

const newEmployeeRecord = employee_record => {
  return (dispatch, getState) => {
    axios({
      method: 'POST',
      headers: { 'access-token': getState().token,
                 'client': getState().client,
                 'uid': getState().uid },
      url: `http://localhost:3000/api/v1/employees/${employee_record.user_id}/employee_records`,
    }).then(response => {
      dispatch({
        type: "NEW_EMPLOYEE_RECORD"
      })
    });
  }
};

const updateEmployeeRecord = employee_record => {
  return (dispatch, getState) => {
    axios({
      method: 'PUT',
      headers: { 'access-token': getState().token,
                 'client': getState().client,
                 'uid': getState().uid },
      url: `http://localhost:3000/api/v1/employees/${employee_record.user_id}/employee_records`,
    }).then(response => {
      dispatch({
        type: "UPDATE_EMPLOYEE_RECORD"
      })
    });
  }
};

const newEmployee = employee => {
  return (dispatch, getState) => {
    axios({
      method: 'POST',
      headers: { 'access-token': getState().token,
                 'client': getState().client,
                 'uid': getState().uid  },
      url: `http://localhost:3000/api/v1/employees`,
      data: {
        employee: {
          legajo: employee.legajo,
          first_name: employee.first_name,
          last_name: employee.last_name,
          email: employee.email,
          password: employee.password
        }
      }
    }).then(response => {
      dispatch({
        type: "NEW_EMPLOYEE",
        employee
      })
    });
  }
};

const editEmployee = employee => {
  return (dispatch, getState) => {
    axios({
      method: 'PUT',
      headers: { 'access-token': getState().token,
                 'client': getState().client,
                 'uid': getState().uid  },
      url: `http://localhost:3000/api/v1/employees/${employee.id}`,
      data: {
        employee: {
          legajo: employee.legajo,
          first_name: employee.first_name,
          last_name: employee.last_name,
          email: employee.email
        }
      }
    }).then(response => {
      dispatch({
        type: "NEW_EMPLOYEE",
        employee
      })
    });
  }
};

const setCurrentEmployee = current_employee => {
  return {
    type: "SET_CURRENT_EMPLOYEE",
    current_employee
  }
};

export { newSession, destroySession,
        loadEmployees, loadEmployeeRecords,
        loadMyRecords, newEmployee, editEmployee,
        newEmployeeRecord, updateEmployeeRecord,
        setCurrentEmployee };
