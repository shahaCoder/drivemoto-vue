<template>
  <section class="categories page-section">
    <div class="container">
      <div class="categories__inner">
        <a href="#" class="categories__item" v-for="item of data2" :key="item">
          <div class="categories__item-info">
            <h4 class="categories__item-title"> {{ item.title }} </h4>
            <router-link to="/info">
              <p class="categories__item-text"> {{ item.title2 }} </p>
            </router-link>
          </div>
          <div class="categories__item-img">
            <img :src= item.img   alt="" />
          </div>
        </a>
<!-- 
        <a href="#" class="categories__item">
          <div class="categories__item-info">
            <h4 class="categories__item-title">Гидроциклы</h4>
            <p class="categories__item-text">Подробнее</p>
          </div>
          <div class="categories__item-img">
            <img src="../assets/item-2.png" alt="" />
          </div>
        </a>

        <a href="#" class="categories__item">
          <div class="categories__item-info">
            <h4 class="categories__item-title">Катера</h4>
            <p class="categories__item-text">Подробнее</p>
          </div>
          <div class="categories__item-img">
            <img src="../assets/item-3.png" alt="" />
          </div>
        </a>

        <a href="#" class="categories__item">
          <div class="categories__item-info">
            <h4 class="categories__item-title">Снегоходы</h4>
            <p class="categories__item-text">Подробнее</p>
          </div>
          <div class="categories__item-img">
            <img src="../assets/item-4.png" alt="" />
          </div>
        </a>

        <a href="#" class="categories__item">
          <div class="categories__item-info">
            <h4 class="categories__item-title">Вездеходы</h4>
            <p class="categories__item-text">Подробнее</p>
          </div>
          <div class="categories__item-img">
            <img src="../assets/item-5.png" alt="" />
          </div>
        </a>

        <a href="#" class="categories__item">
          <div class="categories__item-info">
            <h4 class="categories__item-title">Двигатели</h4>
            <p class="categories__item-text">Подробнее</p>
          </div>
          <div class="categories__item-img">
            <img src="../assets/item-6.png" alt="" />
          </div>
        </a> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CategoriesComponent",
  data () {
    return {
      data2: [
        {title: 'Квадроциклы', title2: 'Подробнее', img: require('../assets/item-1.png')},
        {title: 'Гидроциклы', title2: 'Подробнее', img: require('../assets/item-2.png')},
        {title: 'Катера', title2: 'Подробнее', img: require('../assets/item-3.png')},
        {title: 'Снегоходы', title2: 'Подробнее', img: require('../assets/item-4.png')},
        {title: 'Вездеходы', title2: 'Подробнее', img: require('../assets/item-5.png')},
        {title: 'Двигатели', title2: 'Подробнее', img: require('../assets/item-6.png')},
      ]
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

:root {
  --color-white: #ffffff;
  --color-black: #2f3035;
  --color-black-f: #656464;
  --color-blue: #1c62cd;
  --color-gray: #f0f0f4;
  --color-light-gray: #c4c4c4;
  --color-light-gray-categ: #cdcdcd;
  --color-gray-footer-text: #48494d;
}
.categories .page-section {
  width: 100% !important;
  /* max-width: 1920px; */
  margin: 0 auto !important;
}
.categories__inner {
  width: 100%;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 161px;
  gap: 20px;
  margin: 40px auto;
}

@media (max-width: 1087px) {
  .categories__inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 991.98px) {
}

@media (max-width: 767.98px) {
  .categories__inner {
    grid-template-columns: repeat(1, 1fr);
  }

  .categories__item-img img {
    object-fit: contain;
  }

  h4 {
    font-size: 14px !important;
  }
}

.categories__item {
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  display: flex;
  padding: 20px 20px 16px;
  justify-content: space-between;
  transition: all 0.3s;
  color: black;
}

.categories__item-title {
  font-weight: bold;
  font-size: 23px;
  line-height: 28px;
}

.categories__item:hover {
  box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
}

.categories__item:hover .categories__item-title {
  color: #1c62cd;
}

.categories__item-info {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.categories__item-text {
  color: #c4c4c4;
  font-size: 14px;
  line-height: 17px;
}

.categories__item-text::after {
  content: url("../assets/link-arrows.svg");
  padding-left: 2px;
}

.categories__item-img {
  text-align: center;
  width: 50%;
}

.categories__item-img img {
  max-width: 100%;
}
</style>
