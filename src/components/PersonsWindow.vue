<template>
  <div class="persons-popup">
    <div class="persons-popup__info">
      <button class="persons-popup__close" @click="() => store.currentPerson = null" ></button>
      <div class="persons-popup__content-container">
        <div class="persons-popup__header">
          <img class="persons-popup__img" :src="store.currentPerson?.pictures[0].sizes[0].url" :alt="store.currentPerson.anons">
          <h3 class="persons-popup__heading">
            {{ store.currentPerson?.name || '' }}
            <br>
            {{ store.currentPerson?.surname || ''}}
          </h3>
        </div>
        <div class="persons-popup__content" v-html="store.currentPerson?.body || ''">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {usePersonsStore} from "@/stores/persons";

  const store = usePersonsStore()

  console.log(store.currentPerson)

</script>

<style lang="scss">
@import "/fonts/style.css";
  .persons-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    z-index: 30;

    &__info {
      position: relative;
      width: 605px;
      max-width: calc(100% - 20px);
      height: 700px;
      max-height: calc(100% - 20px);
      background-color: #fff;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, .2);
      border-radius: 10px;
      padding: 50px 15px 30px;
    }
    &__close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      border: none;
      background-image: url(/images/icons/close.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-color: transparent;
    }
    &__content-container {
      width: 100%;
      height: 100%;
      overflow: auto;
    }
    &__header {
      display: flex;
      gap: 32px;
      align-items: center;
      & > * {
        flex-grow: 1;
      }
      margin-bottom: 40px;

      @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
      }
    }
    &__img {
      max-width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 6px;
    }
    &__heading {
      font-size: 40px;
      line-height: 1.2;
    }
    &__content {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.2;
      & > *:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
</style>