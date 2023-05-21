<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  film: {
    type: Object,
    required: true,
  },
});

const film = computed(() => props.film);

const emits = defineEmits(["image-click"]);

const handleImageClick = (filmId) => {
  emits("image-click", filmId);
};
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img
        @click="handleImageClick(film.id)"
        class="card__picture"
        :src="film.image"
        alt="Картинка фильма"
      />
    </div>
    <div class="card__details">
      <p class="card__title">{{ film.title }}</p>
      <p class="card__genre">{{ film.genre }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  &__image {
    margin-bottom: 10px;
    cursor: pointer;
  }

  &__picture {
    width: 300px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transition: 0.3s ease all;

    &:hover {
      transform: scale(1.01);
      box-shadow: rgba(0, 0, 0, 0.2) 0 6px 16px;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
}
</style>
