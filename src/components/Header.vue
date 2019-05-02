<template>
  <div id="header">
    <div class="todo-header">
      <input v-model="title" @keyup.enter="addList" type="text" placeholder="请输入今天的任务清单，按回车键确认"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        title: ""
      }
    },
    methods: {
      addList(){
        const title = this.title.trim();
        if(!title){
          alert("输入的内容不能为空！");
          return;
        }
        const todo = { title, finished: false };
        this.$store.dispatch("addSingleTodo", todo);
        this.title = "";
      }
    }
  }
</script>

<style scoped>
  /*头部*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    outline: none;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(255, 0, 0, 0.8);
    box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
  }
</style>
