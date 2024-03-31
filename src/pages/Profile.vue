<template>
  <div class="container container-sm">
    <h1 class="title-lg">profile</h1>
    <!-- name -->
    <form
    @submit.prevent="updateProfile()">
      <div class="form-group">
        <label for="name">enter name</label>
        <input
        id="name"
        placeholder="name"
        spellcheck="false"
        autofocus
        v-model.trim="userName"
        required/>
      </div>
      <!-- theme -->
      <div class="form-group">
        <label for="theme">select theme</label>
        <select
        id="theme"
        @click="setTheme"
        v-model="selectedTheme">
          <option selected>dark</option>
          <option>light</option>
        </select>
      </div>  
      <!-- local -->
      <div class="form-group">
        <label for="local">select local</label>
        <select
        id="local"
        v-model="cityName">
          <option value="Tehran" selected>Tehran</option>
          <option value="Gilan">Gilan</option>
          <option value="Khuzestan">Khuzestan</option>
          <option value="Fars">Fars</option>
          <option value="Isfahan">Isfahan</option>
          <option value="Mashhad">Mashhad</option>
          <option value="Qazvin">Qazvin</option>
          <option value="Semnan">Semnan</option>
          <option value="Qom">Qom</option>
          <option value="Markazi">Markazi</option>
          <option value="Zanjan">Zanjan</option>
          <option value="Mazandaran">Mazandaran</option>
          <option value="Golestan">Golestan</option>
          <option value="Ardebil">Ardebil</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Hamadan">Hamadan</option>
          <option value="Kurdistan">Kurdistan</option>
          <option value="Kermanshah">Kermanshah</option>
          <option value="Lorestan">Lorestan</option>
          <option value="Bushehr">Bushehr</option>
          <option value="Kerman">Kerman</option>
          <option value="Hormozgan">Hormozgan</option>
          <option value="Yazd">Yazd</option>
          <option value="Zahedan">Zahedan</option>
          <option value="Ilam">Ilam</option>
          <option value="Yasuj">Yasuj</option>
          <option value="Karaj">Karaj</option>
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

const userName = ref(localStorage.getItem('userName') || '');
const cityName = ref(localStorage.getItem('cityName') || 'Tehran');
const selectedTheme = ref(localStorage.getItem('theme') || 'dark');
window.document.body.dataset.theme = localStorage.getItem('theme');

function updateProfile () {
  // edit profile
  localStorage.setItem('userName', userName.value);
  localStorage.setItem('cityName', cityName.value);
  localStorage.setItem('theme',selectedTheme.value);
  // chang theme
  window.document.body.dataset.theme = selectedTheme.value;
}
</script>

<style>

</style>