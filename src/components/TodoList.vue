<!--
 * @Author       : yznaisy
 * @Date         : 2020-10-10 22:18:51
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-10-23 23:01:32
-->
<template>
  <div class="todo-list">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    ></todo-list-item>
  </div>
</template>
 
<script>
import TodoListItem from "./TodoListItem"
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props: ["todos"],
};
</script>
 
<style scoped>
 .todo-list{
	display: grid;
	row-gap: 14px;
}
</style>