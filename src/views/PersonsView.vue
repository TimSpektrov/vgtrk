<template>
  <section>
    <the-preloader v-show="store.isLoading" />
    <person-gallery v-if="store.persons" :persons="store.persons"></person-gallery>
    <persons-window v-if="store.currentPerson" />
  </section>
</template>

<script setup lang="ts">

import {usePersonsStore} from "@/stores/persons";
import ThePreloader from "@/components/ThePreloader.vue";
import PersonGallery from "@/components/PersonGallery.vue";
import PersonsWindow from "@/components/PersonsWindow.vue";

const store = usePersonsStore()

store.fetchData()

</script>