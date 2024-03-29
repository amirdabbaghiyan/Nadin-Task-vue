<template>
  <div class="container">
    <h1 class="title-lg">weather</h1>
    <!-- panel search city -->
    <div class="form-group">
      <label for="city-name">enter city</label>
      <input
      v-model.lazy.trim="city"
      placeholder="city name"
      spellcheck="false"
      autofocus
      id="city-name"
      class="search-panel"/>
    </div>

    <!-- error -->
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <!-- weather info -->
    <div v-if="!error && data.city" class="weather">
      <img class="icon" :src="data.icon" alt="weather-icon" />

      <h1 class="temperature">{{ data.temperature }}°C</h1>

      <h2 class="city">{{ data.city }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

function getIconUrl(icon) {
  return `https://murphyslaw.github.io/hosted-assets/weather/${icon.toLowerCase()}.png`;
}

async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=16a38d83af836c90ee6837bcc746a9d6`;
  let data = {};

  try {
    const response = await fetch(url);
    data = await response.json();
  console.log(data)

    if (!response.ok || data.cod !== 200) {
      throw new Error(data.message || "Network response was not OK");
    }
  } catch (err) {
    throw new Error("Unable to fetch weather data", { cause: err });
  }

  return data;
}

const error = ref();
const city = ref();
const data = ref({
  city: null,
  temperature: null,
  humidity: null,
  wind: null,
  icon: null
});

watch(city, async () => {
  try {
    const weatherData = await getWeatherData(city.value);

    data.value.city = weatherData.name;
    data.value.temperature = Math.round(weatherData.main.temp);
    data.value.icon = getIconUrl(weatherData.weather[0].main);
  } catch (err) {
    error.value = err.message;
  }
});
</script>

<style scoped>
.container {
  row-gap: 20px;
}
.search-panel {
  width: 100%;
}
.weather .icon {
  width: 170px;
}
.weather .temperature {
  font-size: 5rem;
  font-weight: 500;
  font-family: serif;
}
.weather .city {
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: -1rem;
}
.error {
  text-align: left;
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 0.875rem;
}
</style>