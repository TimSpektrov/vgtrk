<template>
  <div v-if="item"
    class="person-slide"
    @click="store.fetchPerson(item.id)"
  >
    <img class="person-slide__avatar" :src="`${API_URL}${PICTURE}${item.picId}/${PICTURE2}`" :alt="item.title">
    <p class="person-slide__name">
      {{item.name}}
      <br>
      {{item.surname}}
    </p>
  </div>
</template>

<script setup lang="ts">
import {API_URL, PICTURE, PICTURE2} from "@/assets/helpers/personApi";
import {usePersonsStore} from "@/stores/persons";

defineProps({
    item: {
      type: Object
    }
  })
const store = usePersonsStore()

</script>

<style scoped lang="scss">
@import "/fonts/style.css";
  .person-slide {
    width: 160px;
    height: 210px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    &__avatar {
      background-color: black;
      width: 144px;
      height: 144px;
      border-radius: 50%;
      object-fit: cover;
    }
    &__name {
      text-align: center;
      color: #000;
      font-size: 14px;
      font-family: 'RF Dewi',sans-serif;
    }
  }
</style>