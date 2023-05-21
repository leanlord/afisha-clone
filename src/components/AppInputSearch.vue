<script setup>
import { ref, defineEmits } from "vue";

const emits = defineEmits(["search"]);

const searchQuery = ref("");

const handleSearch = () => {
  emits("search", searchQuery.value);
};
</script>

<template>
  <div class="search">
    <img
      src="@/assets/static/icons/search.svg"
      alt="Иконка поиска"
      class="search__icon"
    />
    <input
      type="text"
      class="search__input"
      placeholder="Поиск..."
      v-model="searchQuery"
      @keydown.enter="handleSearch"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  width: 400px;
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;

  &__icon {
    width: 16px;
    height: 16px;
    margin: 8px;
  }

  &__input {
    flex-grow: 1;
    height: 30px;
    padding: 8px;
    border: none;
    outline: none;
    background: transparent;
  }
}
</style>
