<template>
  <div class="container">
    <h1 class="title-lg">{{$t("to do")}}</h1>

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

    <h2 class="title-md subline">{{$t("to do list")}}</h2>

    <ul class="todos" v-if="todos.length != 0">
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

    <h4 v-if="todos.length === 0">{{$t("empty list")}}</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DeleteOutlined } from '@ant-design/icons-vue';
import { EditOutlined } from '@ant-design/icons-vue';
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
  border-top: 2px solid #A0A5D7;
  position: absolute;
  top: 100%;
  left: 0;
}
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
.todos::-webkit-scrollbar {
  width: 6px;
  background-color: var(--primary-color);
}
.todos::-webkit-scrollbar-thumb {
  background-color: #6C7072;
}
.todo-item {
  width: 90%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #6C7072;
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
</style>