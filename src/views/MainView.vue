<script setup>
import { onMounted, ref } from "vue";
import { getAllFilms } from "@/api/films";

let films = ref(null);

onMounted(async () => {
  await getAllFilms().then((res) => {
    films.value = res.data;
  });
});
</script>

<template>
  <div class="container">
    <h2>Films list</h2>
    <ul>
      <li v-for="film in films" :key="film.id">
        {{ film }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
