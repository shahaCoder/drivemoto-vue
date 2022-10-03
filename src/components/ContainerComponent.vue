<template>
  <div class="contener">
    <h1>Популярные товары</h1>
    <div class="btns">
      <p>запчасти</p>
      <p>моторы</p>
      <p>шины</p>
      <p>электроника</p>
      <p>инструменты</p>
      <p>аксессуары</p>
    </div>
    <div class="block_of_shoxrux">
      <!-- <img src="../assets/to_left_icon.svg" alt=""> -->
      <div class="grid-cont">
        <ProductItem />
      </div>
      <!-- <img src="../assets/to_right_icon.svg" alt=""> -->
    </div>
    <button class="end_btn">Показать еще</button>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "ContainerComponent",
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Barlow";
}
.contener {
  width: 100%;
  margin-bottom: 25px;
}

.contener h1 {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #2f3035;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-bottom: 10px;
}
.btns {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 25px;
}

.btns p {
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #2f3035;
  position: relative;
  cursor: pointer;
}

.btns p::after {
  content: "";
  position: absolute;
  width: 0;
  right: 0;
  left: auto;
  bottom: -10px;
  background-color: #1c62cd;
  height: 3px;
  transition: all 0.5s;
}

.btns p:hover::after {
  width: 100%;
  right: auto;
  left: 0;
}

.block_of_shoxrux {
  /* display: flex; */
  /* align-items: center; */
  margin-bottom: 35px;
}

.grid-cont {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: space-between;
}

.end_btn {
  display: block;
  width: 252px;
  height: 50px;
  background: #f0f0f4 !important;
  border: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 0 auto;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2f3035;
  transition: 300ms ease;
}

.end_btn:active{
  background-color: #6b6969 !important;
  transform: scale(.9);
}

.end_btn:hover {
  background-color: #e6e6e8;
}

@media (max-width: 1150px){
  .grid-cont{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 815px){
  .grid-cont{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 650px){
  .grid-cont{
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
