<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck" v-show="totalCount > 0" />
    </label>
    <span>
      <span v-if="totalCount === 0">当前无任务</span>
      <span v-else>已完成{{finishedCount}}件 / 总计{{totalCount}}件</span>
    </span>
    <button class="btn btn-warning" @click="$store.dispatch('delFinishedTodo')">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "Footer",
    computed: {
      ...mapGetters(['finishedCount', 'totalCount']),
      isCheck: {
        get(){
          return this.$store.getters.isCheckedAll
        },
        set(value){
          this.$store.dispatch("selectedAll", value);
        }
      }
    }
  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
  }
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
