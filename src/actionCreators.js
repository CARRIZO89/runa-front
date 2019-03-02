const addToListRecords = employee_record => {
  return{
    type: "ADD_TO_LIST_RECORDS",
    employee_record
  }
};

export { addToListRecords };
