<template>
  <section class="card__tabs">
    <div class="container">
      <div class="tabs-wrapper tabs-wrapper--no-scroll">
        <div class="tabs card__tab-box">
          <a href="#product-card__tabs-1" class="card__tab tab">О товаре</a>
          <a href="#product-card__tabs-2" class="card__tab tab"
            >Характеристики</a
          >
          <a href="#product-card__tabs-3" class="card__tab tab">Отзывы</a>
          <a href="#product-card__tabs-4" class="card__tab tab tab--active"
            >Самовывоз</a
          >
          <a href="#product-card__tabs-5" class="card__tab tab">Доставка</a>
          <a href="#product-card__tabs-6" class="card__tab tab">Cервис</a>
          <a href="#product-card__tabs-7" class="card__tab tab">Гарантия</a>
        </div>
      </div>
      <div class="tabs-container">
        <div id="product-card__tabs-1" class="card__tab-content tabs-content">
          content-1
        </div>
        <div id="product-card__tabs-2" class="card__tab-content tabs-content">
          content-2
        </div>
        <div id="product-card__tabs-3" class="card__tab-content tabs-content">
          content-3
        </div>
        <div
          id="product-card__tabs-4"
          class="card__tab-content tabs-content tabs-content--active"
        >
          <form action="#">
            <div class="card__top-line">
              <label class="card__label-search">
                Магазин
                <input type="text" class="card__input-search" />
              </label>
              <label class="card__label-pickup line">
                <input type="radio" class="filter-style card__top-input" />
                Забрать сегодня
              </label>
              <label class="card__label-pickup line">
                <input
                  type="radio"
                  class="filter-style card__top-input"
                  checked
                />
                Забрать в течение недели
              </label>
            </div>

            <ul class="card__list">
              <li class="card__list-item card__list-item-title">
                <div
                  class="card__list-address card__list_list card__list-address-title"
                >
                  Адрес <span>Москва, ул. Науки 25</span>
                </div>
                <div
                  class="card__list-workhours card__list_list card__list-workhours-title"
                >
                  Режим работы
                  <div class="data">
                    <span>пн-сб:08:00-19:00</span>
                    <span>вс:09:00-17:00</span>
                  </div>
                </div>
                <div
                  class="card__list-avialable card__list_list card__list-avialable-title"
                >
                  Доступно <span>В наличие</span>
                </div>
                <div
                  class="card__list-num card__list_list card__list-num-title"
                >
                  Количество <span>1</span>
                </div>
                <div class="card__list-btn coloum_btn card__list-btn-title">
                  <button>купить</button>
                </div>
              </li>

              <li class="card__list-item none">
                <div class="card__list-address">Москва, ул. Науки 25</div>
                <div class="card__list-workhours">
                  <div class="workhours">
                    <span> пн-сб: </span>
                    <span> 08:00-19:00 </span>
                  </div>
                  <div class="workhours">
                    <span> вс: </span>
                    <span> 09:00-17:00 </span>
                  </div>
                </div>
                <div class="card__list-avialable">В наличии</div>
                <div class="card__list-num">1</div>
                <div class="card__list-btn">
                  <button type="submit">Купить</button>
                </div>
              </li>
              <li class="card__list-item none">
                <div class="card__list-address">Москва, ул. Южная 134</div>
                <div class="card__list-workhours">
                  <div class="workhours">
                    <span> пн-сб: </span>
                    <span> 08:00-19:00 </span>
                  </div>
                  <div class="workhours">
                    <span> вс: </span>
                    <span> 09:00-17:00 </span>
                  </div>
                </div>
                <div class="card__list-avialable">В наличии</div>
                <div class="card__list-num">2</div>
                <div class="card__list-btn">
                  <button type="submit">Купить</button>
                </div>
              </li>
              <li class="card__list-item none">
                <div class="card__list-address">
                  Санкт-Петербург, <br />
                  ул. Красная 19
                </div>
                <div class="card__list-workhours">
                  <div class="workhours">
                    <span> пн-сб: </span>
                    <span> 08:00-19:00 </span>
                  </div>
                  <div class="workhours">
                    <span> вс: </span>
                    <span> 09:00-17:00 </span>
                  </div>
                </div>
                <div class="card__list-avialable">Нет в наличии</div>
                <div class="card__list-num">0</div>
                <div class="card__list-btn">
                  <button type="submit">Купить</button>
                </div>
              </li>
              <li class="card__list-item none">
                <div class="card__list-address">Киев, ул Шевченко 167</div>
                <div class="card__list-workhours">
                  <div class="workhours">
                    <span> пн-сб: </span>
                    <span> 08:00-19:00 </span>
                  </div>
                  <div class="workhours">
                    <span> вс: </span>
                    <span> 09:00-17:00 </span>
                  </div>
                </div>
                <div class="card__list-avialable">Нет в наличии</div>
                <div class="card__list-num">0</div>
                <div class="card__list-btn">
                  <button type="submit">Купить</button>
                </div>
              </li>
            </ul>
          </form>
        </div>
        <div id="product-card__tabs-5" class="card__tab-content tabs-content">
          content-5
        </div>
        <div id="product-card__tabs-6" class="card__tab-content tabs-content">
          content-6
        </div>
        <div id="product-card__tabs-7" class="card__tab-content tabs-content">
          content-7
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Block2Mirsaid",
    components: {
        
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
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

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
}

body {
  color: var(--color-black);
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  overflow-x: hidden;
  min-width: 320px;
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}

p {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

.card__tabs {
  margin-bottom: 100px;
}

.card__tab-box {
  display: flex;
  justify-content: space-around;
  background-color: var(--color-gray);
  align-items: center;
  padding: 22px 0;
  margin-bottom: 50px;
}

.card__tab {
  font-size: 20px;
  line-height: 27px;
  color: var(--color-black);
  opacity: 0.6;
}

.card__tab.tab--active {
  opacity: 1;
  font-size: 20px;
  line-height: 27px;
  border-bottom: 1px solid var(--color-blue);
}

.card__top-line {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card__label-search {
  line-height: 20px;
  color: rgba(47, 48, 53, 0.7);
  font-size: 17px;
  display: flex;
  gap: 17px;
}

.card__input-search {
  background: var(--color-gray);
  padding: 9px 37px 9px 17px;
  border-radius: 3px;
  border: none;
}

.card__label-pickup {
  line-height: 20px;
  color: rgba(47, 48, 53, 0.7);
  font-size: 17px;
}

.card__list-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(47, 48, 53, 0.1);
  display: flex;
  font-size: 16px;
  line-height: 22px;
  color: rgba(47, 48, 53, 0.7);
}

.card__list-item-title {
  color: rgba(47, 48, 53);
  font-size: 20px;
  line-height: 24px;
}

.card__list-address {
  width: 220px;
  margin-right: 80px;
}

.card__list-workhours {
  width: 157px;
  margin-right: 96px;
}

.workhours {
  display: flex;
  justify-content: space-between;
}

.card__list-avialable {
  width: 140px;
  margin-right: 60px;
}

.card__list-num {
  width: 104px;
}

.card__list-btn {
  margin-left: auto;
}

.card__list-btn button {
  padding: 9px 40px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-blue);
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.tabs-content {
  display: none;
}

.tabs-content.tabs-content--active {
  display: block;
}

.search__content-form {
  display: flex;
}

.search__content-input {
  background-color: var(--color-gray);
  border-radius: 3px;
  padding: 5px 20px;
  border: none;
  font-size: 16px;
  line-height: 19px;
  width: 100%;
}

.search__content-input::placeholder {
  color: var(--color-black-f);
}

.card__top-input {
  width: 14px;
  height: 14px;
}

.card__list-item-title span {
  display: none;
}

.coloum_btn button {
  display: none;
}

@media (max-width: 1087px) {
  .container {
    width: 100% !important;
  }
  .card__top-line {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 991.98px) {
  .card__tab-box {
    height: 400px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .card__label-search {
    flex-direction: column;
    align-items: flex-start;
  }
  .none {
    display: none;
  }
  .card__list-item-title {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .card__list_list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card__list-item-title span {
    display: block;
  }
  .line {
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
  }
  .coloum_btn {
    width: 100%;
    align-items: flex-start;
  }

  .coloum_btn button {
    display: block;
    width: 100%;
    padding: 17px 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.12em;
  }
}

@media (max-width: 767.98px) {
    .card__list_list {
    font-size: 15px;
  }
}
</style>

<script></script>
