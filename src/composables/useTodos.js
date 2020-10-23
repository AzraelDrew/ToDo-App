/*
 * @Author       : yznaisy
 * @Date         : 2020-10-23 23:12:35
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-10-23 23:59:47
 */
import {
  onMounted,
  ref
} from "vue"
export default function useTodos() {
  const todos = ref([]); //用于存放todo列表中的数据
  const addTodo = (todo) => todos.value.push(todo);


  const fetchTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const rwaTodos = await response.json();
    todos.value = rwaTodos.map((todo) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed
    }))
  }
  onMounted(() => {
    fetchTodos();
  })
  return {
    todos,
    addTodo,
  }
}