<template>
  <div>
    <the-header />
    <router-view />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<style lang="scss">
@import "@/assets/scss/index";
</style>
