<template>
  <section>
    <div class="block-img">
      <SliderComponent />
      <BlockAction />
    </div>
  </section>
</template>

<script>
import BlockAction from "./BlockAction.vue";
import SliderComponent from "./SliderComponent.vue";

export default {
  name: "SwiperComponent",
  props: {},
  components: {
    BlockAction,
    SliderComponent,
  },
};
</script>

<style scoped>
.block-img {
  width: 100%;
  margin-top: 50px !important;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  gap: 50px;
  /* z-index: 20; */
}

.imgHed {
  width: 70%;
  height: 400px;
}

@media (max-width: 1087px) {
  .block-img {
  }
}

@media (max-width: 1487px) {
  .block-img {
    /* flex-direction: column; */
  }
}

@media (max-width: 991.98px) {
}

@media (max-width: 767.98px) {
}
</style>
