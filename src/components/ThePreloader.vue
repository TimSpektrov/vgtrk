<template>
  <div class="preloader-bg">
    <VueSpinner size="70" color="#bbffbb" />
  </div>
</template>

<style scoped lang="scss">
  .preloader-bg {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(#fff, .5);
  }
</style>