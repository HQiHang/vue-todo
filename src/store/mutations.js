import { ADD_LIST, DEL_LIST, SELECTED_ALL, DEL_SEL_LIST } from "./mutation-types";

export default {
  // 添加
  [ADD_LIST](state, {todo}){
    state.todos.unshift(todo);
  },
  // 删除
  [DEL_LIST](state, {index}){
    state.todos.splice(index, 1);
  },
  // 选中所有
  [SELECTED_ALL](state, {value}){
    state.todos.forEach(todo => {
      todo.finished = value;
    });
  },
  // 删除完成的任务
  [DEL_SEL_LIST](state){
    state.todos = state.todos.filter(todo => !todo.finished);
  }
}
