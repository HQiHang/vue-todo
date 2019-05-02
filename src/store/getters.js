export default {
  finishedCount(state){
    return state.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0);
  },
  totalCount(state){
    return state.todos.length;
  },
  isCheckedAll(state, getter){
    return getter.finishedCount === state.todos.length;
  }
}
