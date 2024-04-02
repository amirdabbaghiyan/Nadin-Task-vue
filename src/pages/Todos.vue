<template>
  <div class="container">
    <!-- title -->
    <h1 class="title-lg">{{$t("to do")}}</h1>

    <!-- form todo -->
    <form @submit.prevent="addTodo()">
      <div class="form-group">
        <label for="new-todo">{{$t("enter to do")}}</label>
        <input
        id="new-todo"
        v-model="newTodo"
        autocomplete="off"
        placeholder="new to do">
      </div>
      <input type="submit" class="btn" value="add">
    </form>

    <!-- list title -->
    <h2 class="title-md subline">{{$t("to do list")}}</h2>

    <!-- todos -->
    <ul class="todos" v-if="todos.length != 0">
      <li
      v-for="(todo, index) in todos"
      :key="index"
      class="todo-item">
        <!-- todo item text  -->
        <span
        :class="{ done: todo.done }"
        @click="doneTodo(todo)"
        v-text="todo.content"
        ></span>
        <!-- todo item btn -->
        <div class="todo-item-btn">
          <button
          @click="editTodo(index)"
          class="btn">
            <EditOutlined />
          </button>
            
          <button
          @click="removeTodo(index)"
          class="btn">
            <DeleteOutlined />
          </button>
        </div>
      </li>
    </ul>
    <!-- title empty list -->
    <h4 v-if="todos.length === 0">{{$t("empty list")}}</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DeleteOutlined } from '@ant-design/icons-vue';
import { EditOutlined } from '@ant-design/icons-vue';
import useTabTitle from '@/hooks/UseTabTitle';

// tab title
useTabTitle('Todos');

const newTodo = ref('');
const defaultData = [{
  done: false,
  content: 'Write a blog post'
}]
const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
const todos = ref(todosData);

// add todo
function addTodo () {
  if (newTodo.value.trim()) {
    todos.value.push({
      done: false,
      content: newTodo.value
    });
    newTodo.value = '';
  }
  saveData();
}
// done todo
const doneTodo = (todo) => {
  todo.done = !todo.done
  saveData();
}
// remove todo
const removeTodo = (index) => {
  todos.value.splice(index, 1);
  saveData();
}
// edit todo
const editTodo = (index) => {
  newTodo.value = todos.value[index].content;
  removeTodo(index);
  saveData();
}
// save data
const saveData = () => {
  const storageData = JSON.stringify(todos.value);
  localStorage.setItem('todos', storageData);
}
</script>

<style>
/* subline for todo list title */
.subline {
  width: 100%;
  margin-top: 15px;
  padding-bottom: 8px;
  text-align: left;
  position: relative;
}
.subline::after {
  content: "";
  width: 100%;
  border-top: 2px solid var(--text-color);
  position: absolute;
  top: 100%;
  left: 0;
}
/* todos */
.todos {
  width: 100%;
  height: 210px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  overflow-y: scroll;
}
/* todos scroll */
.todos::-webkit-scrollbar {
  width: 6px;
  background-color: var(--primary-color);
}
.todos::-webkit-scrollbar-thumb {
  background-color: #6C7072;
}
/* todo item */
.todo-item {
  width: 90%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 2px solid var(--text-dark-color);
  background-color: #c7c3c3c0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}
.todo-item-btn {
  align-self: start;
  display: flex;
  column-gap: 3px;
}
/* responsive */
@media(max-width:425px) {
  /* todo item */
  .todo-item {
    padding: 6px 10px;
  }
  .todo-item-btn .btn {
    padding: 3px 5px;
    font-size: 16px;
  }
}
</style>