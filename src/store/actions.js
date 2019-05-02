import {ADD_LIST, DEL_LIST, SELECTED_ALL, DEL_SEL_LIST} from "./mutation-types";

export default {
  // 添加
  addSingleTodo({commit}, todo){
    commit(ADD_LIST, {todo})
  },
  // 删除
  delSingleTodo({commit}, index){
    commit(DEL_LIST, {index})
  },
  // 选中所有
  selectedAll({commit}, value){
    commit(SELECTED_ALL, {value})
  },
  // 删除完成的任务
  delFinishedTodo({commit}){
    commit(DEL_SEL_LIST)
  }
}
