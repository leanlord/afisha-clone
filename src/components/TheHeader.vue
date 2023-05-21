<script setup>
import AppInputSearch from "@/components/AppInputSearch.vue";

const handleSearch = (searchText) => {
  console.log(searchText);
};
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__city">
        <button class="header__head">
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
