<template>
  
  <div class="box">
    <div class="wrapper">
        <HeaderItem />
        <div class="main-cont-top">
    <h1 class="text">Гидроциклы</h1>
    <div class="main-cont-top_box">
      <div class="left-btns">
        <button class="btn1">Полноприводные</button>
        <button class="btn2">от 5000</button>
        <button class="btn3">BRP</button>
        <button class="btn4">еще</button>
      </div>
      <div class="right-section">
        <select class="choise-select">
          <option>По популярности</option>
          <option>По цене</option>
          <option>По марке</option>
        </select>
        <div class="right-img-box">
          <img src="../src/assets/cub.svg" />
          <img src="../src/assets/burgerMenu.svg" />
        </div>
      </div>
    </div>
  </div>
  <div class="main-cont">
    <div class="main-left-parametrs">
      <div class="parametrs-top">
        <div class="param-text-block">
          <p class="param-text">Параметры</p>
        </div>
        <p style="color: #c4c4c4c4" class="mark">По марке</p>
      </div>
      <div class="checkbox-block">
        <div class="checkbox-top">
          <img src="../src/assets/arrowDown.svg" class="arrow-Down" />
          <p>Наличие</p>
        </div>
        <div class="checkboxes for-flex">
          <div class="check-left">
            <input type="checkbox" />
            <p>В наличие</p>
          </div>
          <div class="check-right">
            <input type="checkbox" />
            <p>Под заказ</p>
          </div>
        </div>
      </div>
      <div class="checkbox-block">
        <div class="checkbox-top">
          <img src="../src/assets/arrowDown.svg" class="arrow-Down" />
          <p>Новинки</p>
        </div>
        <div class="checkboxes2">
          <div class="check-left">
            <input type="checkbox" checked />
            <p>Все</p>
          </div>
          <div class="check-right">
            <input type="checkbox" />
            <p>Новинки</p>
          </div>
          <div class="check-right">
            <input type="checkbox" class="for-sale" />
            <p>Акции</p>
          </div>
        </div>
      </div>
      <div class="checkbox-block">
        <div class="checkbox-top">
          <img src="../src/assets/arrowDown.svg" class="arrow-Down" />
          <p>Цена</p>
        </div>
        <div class="checkbox-slider">
          <input type="range" />
        </div>
        <div class="from-to">
          <div class="from">
            <span>От</span>
            <p>100 000</p>
          </div>
          <div class="to">
            <span>До</span>
            <p>500 000</p>
          </div>
        </div>
      </div>
      <div class="power-info-block">
        <div class="info">
          <p>Мощность, л.с.</p>
          <select>
            <option>90</option>
            <option>130</option>
            <option>154</option>
            <option>230</option>
            <option>300</option>
          </select>
        </div>
        <hr class="line" />
      </div>
      <div class="power-info-block">
        <div class="info">
          <p>Мощность двигателя, л.с.</p>
          <select>
            <option>90</option>
            <option selected>130</option>
            <option>154</option>
            <option>230</option>
            <option>300</option>
          </select>
        </div>
        <hr class="line" />
      </div>
      <div class="power-info-block">
        <div class="info">
          <p>Макс. скорость</p>
          <select>
            <option>90</option>
            <option>130</option>
            <option selected>154</option>
            <option>230</option>
            <option>300</option>
          </select>
        </div>
        <hr class="line" />
      </div>
      <div class="checkbox-block checkbox-block__2">
        <div class="checkbox-top">
          <img src="../src/assets/arrowDown.svg" class="arrow-Down" />
          <p>Бренд</p>
        </div>
        <div class="checkboxes2">
          <div class="check-left">
            <input type="checkbox" checked />
            <p>BRP</p>
          </div>
          <div class="check-right">
            <input type="checkbox" checked />
            <p>Spark 2</p>
          </div>
        </div>
        <div class="check-right check-right__changed">
          <input type="checkbox" />
          <p>Spark 3</p>
        </div>
      </div>
      <div class="show-link">
        <a href="#" class="active"><p>Показать еще</p></a>
      </div>
      <div class="checkbox-block">
        <div class="checkbox-top">
          <img src="../src/assets/arrowDown.svg" class="arrow-Down" />
          <p>Модель</p>
        </div>
        <div class="search-input">
          <input type="search" placeholder="Введите модель" />
        </div>
        <div class="checkboxes2">
          <div class="check-left">
            <input type="checkbox" checked />
            <p>Sea-doo Spark 2</p>
          </div>
          <div class="check-right">
            <input type="checkbox" />
            <p>SeaDoo Spark 90</p>
          </div>
          <div class="check-right">
            <input type="checkbox" />
            <p>SeaDoo Spark 90</p>
          </div>
          <div class="check-right">
            <input type="checkbox" />
            <p>SeaDoo GTR 230</p>
          </div>
        </div>
      </div>
      <div class="show-link">
        <a href="#" class="active active2"><p>Показать еще</p></a>
      </div>
      <div class="checkbox-block">
        <div class="checkbox-top">
          <img src="../src/assets/arrowDown.svg" class="arrow-Down" />
          <p>Акции</p>
        </div>
        <div class="btns">
          <button class="sale-btn">SALE</button>
          <button class="new-btn">NEW</button>
          <button class="hit-btn">HIT</button>
          <button class="dealer-btn">ДИЛЕР</button>
        </div>
      </div>
      <div class="checkbox-block">
        <div class="checkbox-top">
          <img src="../src/assets/arrowDown.svg" class="arrow-Down" />
          <p>Страны</p>
        </div>
        <div class="checkboxes2">
          <div class="check-left check2">
            <input type="checkbox" checked />
            <p>Россия</p>
          </div>
          <div class="check-right">
            <input type="checkbox" />
            <p>Германия</p>
          </div>
          <div class="check-right check2">
            <input type="checkbox" />
            <p>Китай</p>
          </div>
          <div class="check-right">
            <input type="checkbox" />
            <p>США</p>
          </div>
        </div>
      </div>
      <div class="show-link">
        <a href="#" class="active active2"><p>Показать еще</p></a>
      </div>
      <div class="last-big-btn">
        <button>ВЫБРАТЬ</button>
      </div>
      <div class="last-big-btn">
        <div class="left-last-p">
          <p>Дополнительные параметры</p>
        </div>
        <div class="right-last-img">
          <img src="../src/assets/arrowDown.svg" />
        </div>
      </div>
      <div class="last-big-btn">
        <p class="reset">Сбросить фильтр</p>
      </div>
    </div>
    <div class="main-right">
      <GridItem :msg="message" />
    </div>
  </div>
    </div>
  <FooterComp />
    </div>
</template>
<script>
import GridItem from "../src/components/GridItem.vue";
import FooterComp from "../src/components/FooterComp.vue";
import HeaderItem from "../src/components/HeaderforContainerItem.vue"
export default {
  name: "ContainerItem",
  components: {
    GridItem,
    FooterComp,
    HeaderItem
  },
  data() {
    return {
      message: "SALE",
    };
  },
};
</script>

<style scoped>
:root {
  --greyscale-color: #c4c4c4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
a {
  color: black;
}

.box{
    width: 100%;
    /* background-color: blue; */
  }
  
  .wrapper {
    width: 70%;
    margin: auto;
    margin-bottom: 100px;
    position: relative;
  }
/* ВЕРХНЯЯ ЧАСТЬ(ТЕКСТ,КНОПКИ И Т.Д) */

.main-cont-top {
  margin-bottom: 25px;
}

.text {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 26px;
}

.main-cont-top_box,
.right-section,
.right-img-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-section {
  gap: 30px;
}

.right-img-box {
  gap: 10px;
}

.left-btns {
  display: flex;
  align-items: center;
  gap: 10px;
}

.left-btns button {
  height: 25px;
  background-color: #f0f0f4;
  border-radius: 3px;
  border: none;
  color: #2f3035;
  font-size: 14px;
}

.btn1 {
  width: 159px !important;
}
.btn2 {
  width: 96px;
}
.btn3 {
  width: 88px;
}
.btn4 {
  width: 71px;
}

.choise-select {
  width: 178px;
  height: 33px;
  border: 1px solid #d7d9df;
  outline: none;
}

/* ПАРАМЕТРЫ */

.main-left-parametrs {
  width: 30%;
  padding-right: 10px;
  /* background-color: rgba(222, 0, 0, 0.2); */
}

.parametrs-top {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 25px;
}

.main-right {
  width: 70%;
}

.param-text-block {
  position: relative;
  width: fit-content;
  font-size: 16px;
  font-weight: 700;
}

.main-cont {
  width: 100%;
  display: flex;
}

.param-text-block::after {
  content: "";
  width: 100%;
  height: 3px;
  border: none;
  background-color: #1c62cd;
  position: absolute;
  bottom: -5px;
}

.arrow-Down {
  transform: rotate(360deg);
}

.checkbox-top {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  gap: 14px;
  margin-bottom: 15px;
}

.check-left,
.check-right {
  display: flex;
  align-items: center;
  gap: 5px;
}

.checkboxes,
.checkboxes2 {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.checkboxes2 {
  gap: 18px;
}

.checkbox-slider input {
  width: 100%;
  height: 5px;
  margin-bottom: 20px;
}

.from-to {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}

.from,
.to {
  display: flex;
  align-items: center;
  gap: 10px;
}

.from span,
.to span {
  color: #c4c4c4;
}

.from p,
.to p {
  color: #2f3035;
  text-decoration: underline;
}

.info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
}

.info select {
  border: none;
  background: none;
  outline: none;
  margin-bottom: 14px;
  margin-top: 10px;
}

.line {
  width: 100%;
  border: 2px solid #c4c4c4;
  border-radius: 3px;
}

.check-right__changed {
  margin-top: -28px;
}

.checkbox-block__2 {
  margin-top: 35px;
}

.active p {
  color: #1c62cd;
  text-decoration: underline;
  margin-top: 15px;
  margin-bottom: 25px;
}

.dealer-btn,
.sale-btn,
.new-btn,
.hit-btn {
  border: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  height: 25px;
}

.sale-btn {
  width: 63px;
  color: white;
  background-color: #1c62cd;
}

.new-btn {
  width: 60px;
  color: #c4c4c4;
  background-color: #f0f0f4;
}

.hit-btn {
  width: 52px;
  color: #c4c4c4;
  background-color: #f0f0f4;
}

.dealer-btn {
  width: 86px;
  color: white;
  background-color: #2f3035;
}

.btns {
  width: 100%;
  padding: 0px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.search-input {
  width: 100%;
  padding: 0px 10px 0px 0px;
}

.search-input input {
  width: 100%;
  height: 30px;
  padding-left: 15px;
  border: 1px solid #e0e0e0;
  background-color: transparent;
  margin-bottom: 15px;
}

.active2 p {
  margin-top: -20px;
}

.check2 {
  width: 50%;
}

.last-big-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  gap: 15px;
}

.last-big-btn button {
  width: 85%;
  height: 50px;
  border: none;
  color: #bdbec2;
  cursor: pointer;
}

.reset {
  color: #c4c4c4;
  text-decoration: underline;
  cursor: pointer;
}

/* МЕДИА ЗАПРОСЫ */
@media (max-width: 1354px) {
  .dealer-btn {
    margin-top: 10px;
  }
}
@media (max-width: 1164px) {
  .param-text {
    font-size: 14px;
  }
  .mark {
    font-size: 14px;
  }
}
@media (max-width: 1115px) {
  .for-flex {
    display: block;
  }
}
@media (max-width: 1045px) {
  .main-left-parametrs {
    display: none;
  }

  .main-cont-top_box {
    display: block;
  }

  .left-btns {
    position: absolute;
    top: 120px;
  }
}
@media (max-width: 650px) {
  .left-btns {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    gap: 10px;
  }
  .main-cont-top_box {
    margin-top: -50px;
  }
}
@media (max-width: 394px) {
  .left-btns {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    top: 140px;
    gap: 10px;
  }
  .main-cont-top_box {
    margin-top: -100px;
  }
}
</style>
