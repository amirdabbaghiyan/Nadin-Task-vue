<template>
  <main>
    <div class="card">
      <div class="search">
        <input
          v-model.lazy.trim="city"
          placeholder="city name"
          spellcheck="false"
          autofocus
        />
      </div>

      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>

      <div v-if="!error && data.city" class="weather">
        <img class="icon" :src="data.icon" alt="" />

        <h1 class="temperature">{{ data.temperature }}°C</h1>

        <h2 class="city">{{ data.city }}</h2>

        <div class="details">
          <div class="detail">
            <img
              src="https://murphyslaw.github.io/hosted-assets/weather/humidity.png"
              alt=""
            />

            <div class="description">
              <p class="value">{{ data.humidity }}%</p>

              <p>Humidity</p>
            </div>
          </div>

          <div class="detail">
            <img
              src="https://murphyslaw.github.io/hosted-assets/weather/wind.png"
              alt=""
            />

            <div class="description">
              <p class="value">{{ data.wind }} km/h</p>

              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, watch } from "vue";

const api_key = "16a38d83af836c90ee6837bcc746a9d6";

function getIconUrl(icon) {
  return `https://murphyslaw.github.io/hosted-assets/weather/${icon.toLowerCase()}.png`;
}

async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
  let data = {};

  try {
    const response = await fetch(url);
    data = await response.json();

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
    data.value.humidity = weatherData.main.humidity;
    data.value.wind = Math.round(weatherData.wind.speed);
    data.value.icon = getIconUrl(weatherData.weather[0].main);
  } catch (err) {
    error.value = err.message;
  }
});
</script>

<style>
:root {
  font-family: Poppins, sans-serif;
  text-align: center;
  background: #222222;
  color: #2c3e50;
}

main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 90%;
  max-width: 470px;
  color: #ffffff;
  background: linear-gradient(135deg, #00feba, #5b548a);

  padding-top: 2rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;

  border-radius: 1rem;
  text-align: center;
}

.search input {
  border: 0;
  border-radius: 1rem;
  outline: 0;
  color: #555555;
  background: #ebfffc;

  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;

  width: 100%;

  font-size: 1rem;
}

.weather .icon {
  width: 170px;
  margin-top: 2rem;
}

.weather .temperature {
  font-size: 5rem;
  font-weight: 500;
}

.weather .city {
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: -1rem;
}

.details {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3rem;

  padding-top: 0;
  padding-right: 1rem;
  padding-bottom: 0;
  padding-left: 1rem;
}

.details img {
  width: 40px;
}

.details .detail {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  text-align: left;
}

.details .detail .description {
  display: flex;
  flex-direction: column;
}

.details .detail .value {
  font-size: 1.5rem;
}

.error {
  text-align: left;
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 0.875rem;
}
</style>