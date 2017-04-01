export default (state={count:0}, action) => {
  switch(action.type) {
    case "INC": {
      return {count: state.count+1};
      break;
    }
    case "DEC": {
      return {count: state.count-1};
      break;
    }
  }
  return state;
}
