<template>
  <div class="container">
    <h1>new subject</h1>

    <form @submit.prevent="addTodo()" class="form">
      <label for="subject">add your subject</label>
      <input
      id="subject"
      class="subject"
      v-model="newTodo">
      <input type="submit" class="submit btn" value="add">
    </form>

    <h2 class="subline">subjects List</h2>
    <ul class="todos">
      <li
      v-for="(todo, index) in todos"
      :key="index"
      class="todo-item">
        <span
        :class="{ done: todo.done }"
        @click="doneTodo(todo)"
        v-text="todo.content"
        ></span>
        <div class="todo-item-btn">
          <button
          @click="editTodo(index)"
          class="btn-remove btn">edit</button>
          <button
          @click="removeTodo(index)"
          class="btn-remove btn">Remove</button>
        </div>
      </li>
    </ul>

    <h4 v-if="todos.length === 0">Empty list.</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const newTodo = ref('');

const todosData = JSON.parse(localStorage.getItem('todos'));

const todos = ref(todosData);

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

function doneTodo (todo) {
  todo.done = !todo.done
  saveData();
}

function removeTodo (index) {
  todos.value.splice(index, 1);
  saveData();
}

function editTodo (index) {
  newTodo.value = todos.value[index].content;
  removeTodo(index);
  saveData();
}

function saveData () {
  const storageData = JSON.stringify(todos.value);
  localStorage.setItem('todos', storageData);
}
</script>

<style>
.container {
  width: min(90%,1000px);
  min-height: calc(100vh - 60px);
}
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  position: relative;
  font-family: inherit;
}
.form label {
  font-size: 14px;
  text-transform: capitalize;
  position: absolute;
  top: -22%;
  left: 0;
  transform: translateX(-505);
}
.form .subject {
  width: max(100% , 400px);
  padding: 10px 8px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #6C7072;
  color: white;
  font-family: inherit;
}
.form .submit {
  margin-top: 10px;
  font-size: 18px;
}
.subline {
  width: 100%;
  padding-bottom: 8px;
  position: relative;
  text-align: left;
  font-size: 20px;
}
.subline::after {
    content: "";
    width: 100%;
    border-top: 2px solid #A0A5D7;
    position: absolute;
    top: 100%;
    left: 0;
}
.todos {
  width: max(100% , 300px);
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
}
.todo-item {
  width: 90%;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #6C7072;
  text-align: left;
}
.todo-item-btn {
  display: flex;
  column-gap: 2px;
}
.form .submit:hover {
  background-color: #8389db;
}
.btn-remove {
  font-size: 12px;
  font-weight: bold;
}
</style>