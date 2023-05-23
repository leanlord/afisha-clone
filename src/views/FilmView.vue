<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { getFilmById } from "@/api/films";
import { userStore } from "@/store/userStore";
import { storeToRefs } from "pinia";
import TheDialog from "@/components/TheDialog.vue";

const store = userStore();
const { isUserAuth } = storeToRefs(store);
const isBuyModalActive = ref(false);
const route = useRoute();
const filmId = route.params.id;
const film = ref({});

const handleBuyTicket = () => {
  if (isUserAuth.value) {
    isBuyModalActive.value = true;
    return;
  }
  alert("Авторизуйтесь перед покупкой!");
};

const buyTicket = () => {
  alert("Билет успешно куплен!");
};

const handleHideModal = () => {
  isBuyModalActive.value = false;
};

onMounted(async () => {
  await getFilmById(filmId).then((res) => {
    film.value = res.data;
  });
});
</script>

<template>
  <div class="film">
    <div class="film__header">
      <div class="film__details">
        <div>
          <div class="film__type">ФИЛЬМ</div>
          <h1 class="film__title">{{ film.title }}</h1>
          <span class="film__country">
            {{ film.country }}, {{ film.year }}
          </span>
        </div>
        <div>
          <button @click="handleBuyTicket()" class="button film__button">
            <img
              width="30"
              src="@/assets/static/icons/ticket.svg"
              alt="Иконка билета"
            />
            <span>Купить билеты</span>
          </button>
        </div>
      </div>
      <div class="film__poster">
        <img height="170" :src="film.poster" alt="Постер фильма" />
      </div>
    </div>
    <div class="film__information">
      <span class="film__subtitle">Описание прокатчика</span>
      <p class="film__description">
        {{ film.description }}
      </p>
      <div class="film__labels">
        <div class="film__label">
          <span class="film__label-title">Страна</span>
          <span class="film__label-value">{{ film.country }}</span>
        </div>
        <div class="film__label">
          <span class="film__label-title">Год</span>
          <span class="film__label-value">{{ film.year }}</span>
        </div>
        <div class="film__label">
          <span class="film__label-title">Жанр</span>
          <span class="film__label-value">{{ film.genre }}</span>
        </div>
        <div class="film__label">
          <span class="film__label-title">Режиссер</span>
          <span class="film__label-value">{{ film.director }}</span>
        </div>
      </div>
    </div>
    <teleport to="body">
      <the-dialog
        v-if="isBuyModalActive"
        :head="`Покупка билета на: ${film.title}`"
        :active="isBuyModalActive"
        @hide-modal="handleHideModal()"
      >
        <template #content>
          <div class="film__buy">
            <form>
              <label class="input">
                <span class="input__head">Укажите ряд</span>
                <input type="text" />
              </label>
              <label class="input">
                <span class="input__head">Укажите место</span>
                <input type="text" />
              </label>
            </form>
            <button
              @click="buyTicket()"
              class="button film__button film__button_modal"
            >
              Купить
            </button>
          </div>
        </template>
      </the-dialog>
    </teleport>
  </div>
</template>

<style scoped></style>
