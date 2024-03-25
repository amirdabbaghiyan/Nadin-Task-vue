<template>
  <h1>{{currentTime}}</h1>
  <h2>good {{time}} {user}</h2>
</template>

<script setup>
import { ref } from "vue";

const hours = ref(new Date().getHours());
const minutes = ref(new Date().getMinutes());
const time = ref();

hours.value < 10 ? hours.value = `0${hours.value}` : false;
minutes.value < 10 ? minutes.value = `0${minutes.value}` : false;

let currentTime = ref(`${hours.value}:${minutes.value}`);

const updateCurrentTime = () => {
  hours.value = new Date().getHours();
  minutes.value = new Date().getMinutes();

  hours.value < 10 ? hours.value = `0${hours.value}` : false;
  minutes.value < 10 ? minutes.value = `0${minutes.value}` : false;

 currentTime.value = `${hours.value}:${minutes.value}`;
};

setInterval(updateCurrentTime, 1000);

if ( hours.value < 12 ){
  time.value = 'morning';
} else if ( hours.value < 13 ){
  time.value = 'noon';
} else if ( hours.value < 18 ){
  time.value = 'afternoon';
} else if ( hours.value < 21 ){
  time.value = 'evening';
} else if ( hours.value > 21 ){
  time.value = 'night';
}
</script>

<style>

</style>