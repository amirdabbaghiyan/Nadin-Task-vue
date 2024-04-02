<template>
  <div class="container container-sm">
    <!-- title -->
    <h1 class="title-lg">{{$t("profile")}}</h1>
    <!-- profile form -->
    <form
    @submit.prevent="updateProfile()">
      <div class="form-group">
        <!-- username input -->
        <label for="name">{{$t("enter name")}}</label>
        <input
        id="name"
        placeholder="name"
        spellcheck="false"
        autofocus
        v-model.trim="userName"
        required/>
      </div>
      <!-- theme select -->
      <div class="form-group">
        <label for="theme">{{$t("select theme")}}</label>
        <select
        id="theme"
        v-model="selectedTheme">
          <option value="dark" selected>{{$t("dark")}}</option>
          <option value="light">{{$t("light")}}</option>
        </select>
      </div>  
      <!-- locale select -->
      <div class="form-group">
        <label for="locale">{{$t("select locale")}}</label>
        <select
        id="locale"
        v-model="$i18n.locale">
          <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale">{{$t(locale)}}</option>
        </select>
      </div> 
      <!-- save btn -->
      <input
      type="submit"
      class="btn"
      value="save">
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useTabTitle from "@/hooks/UseTabTitle";

// tab title 
useTabTitle('Profile');

const userName = ref(localStorage.getItem('userName') || '');
const selectedTheme = ref(localStorage.getItem('theme') || 'dark');
window.document.body.dataset.theme = localStorage.getItem('theme');

function updateProfile () {
  // edit username
  localStorage.setItem('userName', userName.value);
  // chang theme
  localStorage.setItem('theme', selectedTheme.value);
  window.document.body.dataset.theme = selectedTheme.value;
}
</script>