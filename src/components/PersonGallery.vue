<template>
  <section class="section gallery">
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="5"
      :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
      :modules="[Navigation]"
    >
      <swiper-slide v-for="(slide) in persons" :key="slide.id">
        <person-slide :item="slide" />
      </swiper-slide>
      <div class="swiper-button-next" tabindex="0" role="button"></div>
      <div class="swiper-button-prev" tabindex="0" role="button"></div>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type {IPerson} from "@/assets/helpers/person-types";
import PersonSlide from "@/components/PersonSlide.vue";
import { Navigation } from 'swiper/modules';

defineProps({
  persons: {
    type: Array<IPerson>,
  }
})
</script>

<style lang="scss">
@import 'swiper/css';
.section.gallery {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: auto;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 25%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ffffff;
  background-image: url(/images/icons/sliderArrow.svg);
  background-position: center;
  background-repeat: no-repeat;
  z-index: 3;
  transition: opacity .3s ease-in-out;
  &.swiper-button-disabled {
    opacity: 0;
  }
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev {
  left: 0;
  scale: -1 1;

}

</style>