<template>
   <div class="general-wrapper">
    <div class="main">
    <HeaderComponent />
  </div>
  <div class="swiper">
    <SwiperComponent />
  </div>
  <Search />
  <Categories />
  <ContainerComponent />
  <div class="add-block">
    <div class="block_Cont">
      <div class="left none2">
        <img class="none2" src="../src/assets/car1.svg" alt="" />
        <img class="none" src="../src/assets/car2.svg" alt="" />
      </div>
      <div class="flex">
        <div class="center">
          <p>CКИДКИ на все запчасти до 70%</p>
        </div>
        <div class="right">
          <button class="btn">ПОСМОТЕТЬ ВСЕ</button>
        </div>
      </div>
    </div>
  </div>
  <ContainerComponent />
   </div>
   <div class="footer">
    <FooterComponent />
  </div>
  <router-view></router-view>
</template>

<script>
import HeaderComponent from "../src/components/HeaderComponent.vue";
import SwiperComponent from "../src/components/SwiperComponent.vue";
import ContainerComponent from "../src/components/ContainerComponent.vue";
import Search from "../src/components/Search.vue";
import Categories from "../src/components/Categories.vue";
import FooterComponent from "../src/components/FooterComp.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    SwiperComponent,
    Search,
    ContainerComponent,
    Categories,
    FooterComponent,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");

.general-wrapper{
  width: 80%;
  margin: auto;
}

.add-block {
  width: 70%;
  max-width: 1920px;
  height: fit-content;
  margin: 40px auto;
  background-color: #1c62cd;
}

.block_Cont {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}

.center {
  width: 308px;
  height: fit-content;
  margin-bottom: 30px;
  color: white;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  line-height: 36px;
  font-size: 36px;
}

.btn {
  font-family: Roboto;
  width: 200px;
  height: 57px;
  background-color: white;
}

.flex {
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 1450px) {
  .none {
    display: none;
  }
}

@media (max-width: 1087px) {
  .center {
    line-height: calc(20px + (36 - 20) * ((100vw - 320px) / (1087 - 320)));
    font-size: calc(20px + (36 - 20) * ((100vw - 320px) / (1087 - 320)));
  }
}

@media (max-width: 991.98px) {
  .flex {
    flex-direction: column;
  }
}

@media (max-width: 767.98px) {
  .none2 {
    display: none;
  }
  .flex {
    width: 100%;
  }
  .btn {
    width: 143px;
    height: 43px;
    font-size: 12px;
  }
  .center {
    width: 200px;
    /* font-size: 25px; */
  }
}
</style>
