<template>
    <!-- site loader -->
    <div class="site-loader" :class="{'hide-loader' : load}">
        <!-- loader -->
        <div class="loader"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let load = ref(false);

document.onreadystatechange = ()=>{
  if (document.readyState == "complete") {
    load.value = true;
  }
};
</script>

<style>
/* animation */
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
/* loader */
.site-loader {
  background-color: var(--btn-hover-color);
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 1s;
}
.hide-loader {
  visibility: hidden;
  opacity: 0;
}
/* loader */
.loader {
  padding: 40px;
  border: 6px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Responsive */
@media (max-width: 600px) {
  .loader {
    padding: 25px;
    border-width: 4px;
  }
}
</style>