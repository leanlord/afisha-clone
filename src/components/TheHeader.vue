<script setup>
import AppInputSearch from "@/components/AppInputSearch.vue";
import router from "@/router";
import { onMounted, ref } from "vue";
import TheDialog from "@/components/TheDialog.vue";
import { userStore } from "@/store/userStore";
import { storeToRefs } from "pinia";

const store = userStore();
let { isUserAuth } = storeToRefs(store);

let isAuthModalActive = ref(false);

const handleSearch = (searchText) => {
  console.log(searchText);
};

const handleHeaderClick = () => {
  router.push("/");
};

const authUserClick = (value) => {
  if (value) {
    toggleAuthUser(false);
    return;
  }
  isAuthModalActive.value = true;
};

const authUser = () => {
  handleHideModal();
  toggleAuthUser(true);
};

const toggleAuthUser = (value) => {
  isUserAuth.value = value;
  localStorage.setItem("isLogin", value);
};
const handleHideModal = () => {
  isAuthModalActive.value = false;
};

const showLocalStorageContent = () => {
  isUserAuth.value = JSON.parse(localStorage.getItem("isLogin")) || false;
};

onMounted(() => {
  showLocalStorageContent();
});
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__city">
        <button @click="handleHeaderClick()" class="header__head">
          <img src="@/assets/static/icons/afisha.svg" alt="Иконка афиши" />
        </button>
        <div>Краснодар</div>
      </div>
      <app-input-search @search="(text) => handleSearch(text)" />
      <button
        v-if="isUserAuth"
        @click="authUserClick(true)"
        class="button header__button"
      >
        Выйти
      </button>
      <button
        v-else
        @click="authUserClick(false)"
        class="button header__button"
      >
        Войти
      </button>
    </div>
    <div class="line"></div>
    <teleport to="body">
      <the-dialog
        @hide-modal="handleHideModal()"
        v-if="isAuthModalActive"
        head="Вход"
        :active="isAuthModalActive"
      >
        <template #content>
          <form @submit.prevent="authUser()" class="auth__form">
            <label class="input">
              <span class="input__head">Email</span>
              <input type="text" />
            </label>
            <label class="input">
              <span class="input__head">Пароль</span>
              <input type="password" />
            </label>
            <button class="button" type="submit">Войти</button>
          </form>
        </template>
      </the-dialog>
    </teleport>
  </header>
</template>

<style scoped lang="scss">
.auth {
  &__form {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
