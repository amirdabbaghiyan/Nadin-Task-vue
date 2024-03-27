<template>
  <div class="container">
    <h1>new subject</h1>
    <form @submit.prevent="addTodo()" class="form">
        <label>add your subject</label>
        <input
        v-model="newTodo"
        name="newTodo"
        autocomplete="off">
        <button>Add</button>
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
            >{{ todo.content }}</span>
            <button @click="removeTodo(index)" class="btn-remove">Remove</button>
        </li>
    </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const newTodo = ref('');

const defaultData = [{
    done: false,
    content: 'Write a blog post'
}];

const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
const todos = ref(todosData);
function addTodo () {
    if (newTodo.value) {
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
function saveData () {
    const storageData = JSON.stringify(todos.value);
    localStorage.setItem('todos', storageData);
}
// return (
//     todos,
//     newTodo,
//     addTodo,
//     doneTodo,
//     removeTodo,
//     saveData
// )
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  padding: 50px 100px !important;
  background-color: #26292B;
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
.form input {
  width: max(100% , 400px);
  padding: 10px 8px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #6C7072;
  color: white;
  font-family: inherit;
}
.form button {
  padding: 6px 4px;
  margin-top: 10px;
  border: 1px solid #000;
  background-color: #A0A5D7;
  font-size: 18px;
  border-radius: 5px;
  font-family: inherit;
  transition-duration: 0.3s;
}
.form button:hover {
  background-color: transparent;
  color: white;
  border: 1px solid #6C7072;
}
.subline {
  padding-bottom: 8px;
  position: relative;
  align-self: flex-start;
  font-size: 20px;
}
.subline::after {
    content: "";
    width: max(100% , 400px);
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
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #6C7072;
}
.btn-remove {
  padding: 1px 5px;
  border: 1px solid #6C7072;
  border-radius: 5px;
  background-color: #A0A5D7;
  color: black;
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
}
</style>