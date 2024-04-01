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
      <!-- city -->
      <!-- <div class="form-group">
        <label for="local">{{$t("select local")}}</label>
        <select
        id="local"
        v-model="cityName">
          <option value="Tehran" selected>{{$t("Tehran")}}</option>
          <option value="Gilan">{{$t("Gilan")}}</option>
          <option value="Khuzestan">{{$t("Khuzestan")}}</option>
          <option value="Fars">{{$t("Fars")}}</option>
          <option value="Isfahan">{{$t("Isfahan")}}</option>
          <option value="Mashhad">{{$t("Mashhad")}}</option>
          <option value="Qazvin">{{$t("Qazvin")}}</option>
          <option value="Semnan">{{$t("Semnan")}}</option>
          <option value="Qom">{{$t("Qom")}}</option>
          <option value="Markazi">{{$t("Markazi")}}</option>
          <option value="Zanjan">{{$t("Zanjan")}}</option>
          <option value="Mazandaran">{{$t("Mazandaran")}}</option>
          <option value="Golestan">{{$t("Golestan")}}</option>
          <option value="Ardebil">{{$t("Ardebil")}}</option>
          <option value="West Azerbaijan province">{{$t("West Azerbaijan Province")}}</option>
          <option value="ٍRazavi Khorasan Province">ٍ{{$t("Razavi Khorasan Province")}}</option>
          <option value="Hamadan">{{$t("Hamadan")}}</option>
          <option value="Kurdistan">{{$t("Kurdistan")}}</option>
          <option value="Kermanshah">{{$t("Kermanshah")}}</option>
          <option value="Lorestan">{{$t("Lorestan")}}</option>
          <option value="Bushehr">{{$t("Bushehr")}}</option>
          <option value="Kerman">{{$t("Kerman")}}</option>
          <option value="Hormozgan">{{$t("Hormozgan")}}</option>
          <option value="Yazd">{{$t("Yazd")}}</option>
          <option value="Zahedan">{{$t("Zahedan")}}</option>
          <option value="Ilam">{{$t("Ilam")}}</option>
          <option value="Yasuj">{{$t("Yasuj")}}</option>
          <option value="Karaj">{{$t("Karaj")}}</option>
        </select>
      </div> -->
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
// const cityName = ref(localStorage.getItem('cityName') || 'Tehran');
const selectedTheme = ref(localStorage.getItem('theme') || 'dark');
window.document.body.dataset.theme = localStorage.getItem('theme');

function updateProfile () {
  // edit username
  localStorage.setItem('userName', userName.value);
  // select city
  // localStorage.setItem('cityName', cityName.value);
  // chang theme
  localStorage.setItem('theme', selectedTheme.value);
  window.document.body.dataset.theme = selectedTheme.value;
}
</script>
