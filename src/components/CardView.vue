<template>
  <section class="section card-image">
    <div
      class="card-image__container"
      :class="`card-image__container-${store.focusInput}`"
    >
      <div
        class="card-image__move-container"
        :class="{
          'card-image__move-container-name': store.focusInput === 'name',
          'card-image__move-container-surname': store.focusInput === 'surname',
          'card-image__move-container-card-number': store.focusInput === 'cardNumber',
          'card-image__move-container-expiry': store.focusInput === 'expiry',
          'card-image__move-container-cvv': store.focusInput === 'cvv',
        }"
      >
        <img
            class="card-image__img"
            src="/images/card-image.webp"
            alt="image card"
        >
        <div :class="{'card-image__move-opacity': store.focusInput === 'name'}" class="card-image__move-input card-image__move-name"></div>
        <div :class="{'card-image__move-opacity': store.focusInput === 'surname'}" class="card-image__move-input card-image__move-surname"></div>
        <div :class="{'card-image__move-opacity': store.focusInput === 'cardNumber'}" class="card-image__move-input card-image__move-cardNumber"></div>
        <div :class="{'card-image__move-opacity': store.focusInput === 'expiry'}" class="card-image__move-input card-image__move-expiry"></div>
        <div :class="{'card-image__move-opacity': store.focusInput === 'cvv'}" class="card-image__move-input card-image__move-cvv"></div>
      </div>
      <div class="card-image__container-shadow"></div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {useFocusedStore} from "@/stores/focuses";

const store = useFocusedStore()
</script>

<style scoped lang="scss">
  .card-image {
    max-width: 1200px;
    margin-inline: auto;
    background-color: #fff;
    &__container {
      position: relative;
      margin-inline: auto;
      width: 600px;
      overflow: hidden;
      aspect-ratio: 1.6;
    }
    &__container-shadow {
      position: absolute;
      box-shadow: inset 0 0 20px 20px #fff;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    &__move-container {
      position: absolute;
      top: -6%;
      left: -17%;
      transition-duration: .4s;
      transition-timing-function: ease-in-out;
      transition-property: scale, left, top;
      &-name {
        scale: 1.7;
        left: 10%;
      }
      &-surname {
        scale: 1.7;
        left: -13%;
      }
      &-card-number {
        scale: 1.1;
        left: -16%;
      }
      &-expiry {
        scale: 1.7;
        left: -13%;
      }
      &-expiry {
        scale: 1.7;
        left: -13%;
      }
      &-cvv {
        scale: 1.2;
        left: -23%;
        top: -107%;
      }
    }
    &__move-input {
      position: absolute;
      border: 3px solid red;
      opacity: 0;
      transition: opacity .4s .3s ease-in;
    }
    &__move-opacity {
      opacity: 1;
    }
    &__move-name {
      top: 39%;
      left: 21%;
      width: 24%;
      height: 5%;
    }
    &__move-surname {
      top: 39%;
      left: 44%;
      width: 12%;
      height: 5%;
    }
    &__move-cardNumber {
      top: 29.2%;
      left: 21%;
      width: 57%;
      height: 6%;
    }
    &__move-expiry {
      top: 35%;
      left: 44%;
      width: 12%;
      height: 4%;
    }
    &__move-cvv {
      top: 69.2%;
      left: 73.7%;
      width: 7%;
      height: 4%;
    }
  }
</style>