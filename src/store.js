import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === "ADD_TO_LIST_RECORDS") {
    return{
      ...state,
      employee_records: state.employee_records.concat(action.employee_record)
    };
  }

  return state
};

export default createStore(reducer, {employee_records: []});
