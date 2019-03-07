import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.group(action.type);
  console.info(action);
  let result = next(action);
  console.log('Next State', store.getState());
  console.groupEnd();
  return result
}

const reducer = (state, action) => {
  if (action.type === "NEW_SESSION") {
    return{
      ...state,
      current_user: action.current_user,
      type_user: action.type_user,
      token: action.token,
      client: action.client,
      uid: action.uid
    };
  }else if (action.type === "DESTROY_SESSION") {
    return{
      ...state,
      current_user: null,
      type_user: null,
      token: null,
      client: null,
      uid: null
    };
  }else if (action.type === "LOAD_EMPLOYEES") {
    return{
      ...state,
      employees: action.employees
    };
  }else if (action.type === "LOAD_EMPLOYEE_RECORDS") {
    return{
      ...state,
      employee_records: action.employee_records
    };
  }else if (action.type === "LOAD_MY_RECORDS") {
    return{
      ...state,
      my_records: state.my_records.concat(action.my_records),
      current_user: state.current_user
    };
  }else if (action.type === "NEW_EMPLOYEE_RECORD") {
    return{
      ...state,
      employee_records: state.employee_records.concat(action.employee_record)
    };
  } else if (action.type === "NEW_EMPLOYEE") {
    return{
      ...state,
      employees: [...state.employees, action.employee]
    };
  }else if (action.type === "SET_CURRENT_EMPLOYEE") {
    return{
      ...state,
      current_employee: action.current_employee
    };
  }

  return state
};

export default createStore(reducer, {current_user: null, my_records: [], 
                                     employees: [], employee_records: []},
                                     applyMiddleware(thunk, logger));
