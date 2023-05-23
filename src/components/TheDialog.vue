<script setup>
import { defineEmits, defineProps } from "vue";
const emits = defineEmits(["hide-modal"]);
defineProps({
  active: {
    type: Boolean,
    required: true,
  },
  head: {
    type: String,
    required: true,
  },
  large: {
    type: Boolean,
  },
  xsLarge: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="dialog"
    :class="{ dialog_isActive: active }"
    @click.self="emits('hide-modal')"
  >
    <div
      :class="{
        'dialog__container--large': large,
        'dialog__container--xs-large': xsLarge,
      }"
      class="dialog__container"
    >
      <div class="dialog__head">
        <slot name="title">
          <h3 class="dialog__title">{{ head }}</h3>
        </slot>
        <div class="dialog__close" @click="emits('hide-modal')"></div>
      </div>
      <div class="dialog__content">
        <slot name="content" />
      </div>
      <div class="dialog__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog {
  display: block;
  position: fixed;
  z-index: -1;
  background-color: rgb(0 0 0 / 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &_over {
    z-index: 151;
  }

  &_isActive {
    padding: 0 10vw;
    z-index: 150;
    opacity: 1;
    overflow-x: hidden;
    overflow-y: auto;
    pointer-events: auto;
  }

  &__container {
    z-index: 160;
    position: relative;
    margin: 1.75rem auto;
    max-width: fit-content;
    max-height: 100%;
    background: #fff;
    border-radius: 6px;
    opacity: 0;
    transition: all 0.4s;

    &--large {
      min-width: 800px;
      max-width: 1200px;
    }

    &--xs-large {
      min-width: 600px;
      max-width: 900px;
    }

    .dialog_isActive & {
      opacity: 1;
    }
  }

  &__head {
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px 50px 16px 16px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ebedf2;
  }

  &__title {
    font-weight: 500;
    font-size: 1.3em;
    color: #48465b;
  }

  &__warning {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
    background-color: #eea200;
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }

  &__subtitle {
    &_aml {
      padding: 4px 10px;
      margin-left: 8px;
      background-color: #1dc9b7;
      border-radius: 4px;
      font-size: 0.85em;
      font-weight: 500;
      color: #fff;
    }
  }

  &__close {
    position: absolute;
    right: 16px;
    width: 18px;
    height: 18px;
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      width: 2px;
      height: 100%;
      background: #343a40;
      transition: all 0.4s;
    }

    &:before {
      left: 8px;
      transform: rotate(-45deg);
    }

    &:after {
      right: 8px;
      transform: rotate(45deg);
    }

    &:hover {
      &:before,
      &:after {
        background-color: #5867dd;
      }
    }
  }

  &__content {
    padding: 0 16px;
    background-color: #fff;
  }

  &__footer {
    border-radius: 0 0 6px 6px;
    padding: 16px 8px;
    background: inherit;
    &_small {
      padding: 8px;
    }
  }

  &__button {
    margin: 0 8px;
  }

  &__overflow {
    overflow: visible;
  }
}
</style>
