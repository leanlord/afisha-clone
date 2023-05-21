<script setup>
import { onMounted, ref } from "vue";
import { getAllFilms } from "@/api/films";
import FilmCard from "@/components/FilmCard.vue";
import router from "@/router";

const films = ref(null);

const handleImageClick = async (filmId) => {
  await router.push({ name: "film", params: { id: filmId } });
};
onMounted(async () => {
  await getAllFilms().then((res) => {
    films.value = res.data;
  });
});
</script>

<template>
  <div class="films">
    <h1 class="films__header">Вся афиша Краснодара</h1>
    <ul class="films__list">
      <li v-for="film in films" :key="film.id">
        <film-card
          @image-click="(filmId) => handleImageClick(filmId)"
          :film="film"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
