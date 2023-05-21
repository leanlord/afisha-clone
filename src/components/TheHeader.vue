<script setup>
import AppInputSearch from "@/components/AppInputSearch.vue";
import router from "@/router";

const handleSearch = (searchText) => {
  console.log(searchText);
};

const handleHeaderClick = () => {
  router.push("/");
};
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
      <button class="button header__button">Войти</button>
    </div>
    <div class="line"></div>
  </header>
</template>

<style scoped></style>
