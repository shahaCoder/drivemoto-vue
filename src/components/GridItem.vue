<template>
  <div class="right-part">
    <div class="item" v-for="i of arr" v-bind:key="i">
      <div class="sale-block" v-if="i.bySale">
        <button class="sale-btn">{{ msg }}</button>
      </div>
      <div class="reaction-heart">
        <img src="../assets/heart.svg" class="heart" />
      </div>
      <div class="gydrocycle-img">
        <img v-bind:src="i.img" class="size-moto" />
      </div>
      <div class="information">
        <p class="product-name">{{ i.name }}</p>
      </div>
      <div class="price">
        <p class="price-txt" v-if="i.Availability">{{ i.price }}&#8381;</p>
        <p v-else class="notAbility">Нет в наличии</p>
      </div>
      <div class="cart-block" v-if="i.Availability">
        <img src="../assets/white-cart.svg" />
      </div>
      <a href="#" v-else class="report"><p>Сообщить о поступлении</p></a>

      <router-link to="/info">
        <button class="hover-show-product-block">Посмотреть товар</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridItem",
  data() {
    return {
      arr: [
        {
          name: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
          img: require("../assets/gidrotsikl-brp-seadoo.svg"),
          price: "1 049 500",
          Availability: true,
          bySale: false
        },
        {
          name: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
          img: require("../assets/blue-gydro.svg"),
          price: "1 100 475",
          Availability: true,
          bySale: true
        },
        {
          name: "Гидроцикл BRP SeaDoo GTR 230hp X California green ",
          img: require("../assets/s-l2251.svg"),
          price: "1 323 700",
          Availability: true,
          bySale: false
        },
        {
          name: "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",
          img: require("../assets/blue-new-gydro.svg"),
          price: "857 866",
          Availability: false,
          bySale: true
        },
        {
          name: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",
          img: require("../assets/brown-gydro.svg"),
          price: "1 543 000",
          Availability: true,
          bySale: false
        },
        {
          name: "Гидроцикл BRP SeaDoo Spark 60hp 2 up",
          img: require("../assets/orange-gydro.svg"),
          price: "732 345",
          Availability: true,
          bySale: false
        },
        {
          name: "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",
          img: require("../assets/img-gydro.svg"),
          price: "857 666",
          Availability: true,
          bySale: false
        },
        {
          name: "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue",
          img: require("../assets/mix-gydro.png"),
          price: "1 229 711",
          Availability: true,
          bySale: true
        },
        {
          name: "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",
          img: require("../assets/red-gydro.svg"),
          price: "587 440",
          Availability: true,
          bySale: false
        },
        {
          name: "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple",
          img: require("../assets/yellow-gydro.svg"),
          price: "587 440",
          Availability: true,
          bySale: false
        },
        {
          name: "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla",
          img: require("../assets/white-gydro.svg"),
          price: "857 866",
          Availability: false,
          bySale: true
        },
        {
          name: "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",
          img: require("../assets/mix-img.svg"),
          price: "857 866",
          Availability: false,
          bySale: false
        },
      ],
    };
  },
  props: ['msg']
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
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

.right-part {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 330px;
  gap: 20px;
}

.item {
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  position: relative;
  transition: 0.3 ease;
}

.gydrocycle-img{
  display: flex;
  align-items: center;
  justify-content: center;
}

.reaction-heart {
  position: absolute;
  top: 10px;
  right: 10px;
}

.size-moto {
  width: 180px;
  margin-top: 30px;
}

.information p {
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
}

.price-txt {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #2f3035;
  cursor: pointer;
}

.cart-block {
  width: 60px;
  height: 40px;
  background: #1c62cd;
  border-radius: 10px 0px 0px 0px;
  padding: 7.84px 14px;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
}

.notAbility {
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
}

.report {
  text-align: center;
  color: #1c62cd;
  text-decoration: underline;
}

.hover-show-product-block {
  width: 85%;
  height: 60px;
  border-radius: 3px;
  opacity: 90%;
  border: none;
  background-color: #ffffff;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: none;
}

.item:hover .hover-show-product-block {
  display: block;
}

.item:hover .information {
  color: #1c62cd;
}

.item:hover .price-txt {
  color: #1c62cd;
}

.item:hover {
  box-shadow: 0 0 10px rgb(202, 196, 196);
}

.heart {
  cursor: pointer;
}

.sale-block{
  position: absolute;
  top: 0;
  left: 0;
}

.sale-btn{
  width: 63px;
  height: 25px;
  background: #1C62CD;
  border: none;
  color: white;
}

@media (max-width: 1215px){
  .size-moto{
    width: 145px;
  }
}

@media (max-width: 1100px) {
  .right-part {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 330px;
  }

  .size-moto{
    width: 205px !important;
  }

  .price-txt {
    font-size: 25px;
  }
}

@media (max-width: 1045px) {
  .right-part {
    margin-top: 35px;
    width: 143%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 330px;
  }
}

@media (max-width: 960px){
  .size-moto{
    width: 195px !important;
  }
}

@media (max-width: 915px){
  .size-moto{
    width: 175px !important;
  }
}

@media (max-width: 830px){
  .size-moto{
    width: 155px !important;
  }
}

@media (max-width: 770px) {
  .right-part {
    margin-top: 35px;
    width: 143%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 330px;
  }

  .size-moto{
    width: 195px !important;
  }
}

@media (max-width: 650px) {
  .right-part {
    margin-top: 85px;
    width: 143%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 330px;
  }
}

@media (max-width: 610px){
  .size-moto{
    width: 155px !important;
    margin-bottom: 20px;
  }
}


@media (max-width: 540px) {
  .product-name {
    font-size: 14px;
  }
}

@media (max-width: 500px){
  .size-moto{
    width: 140px !important;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .right-part {
    margin-top: 85px;
    width: 143%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 330px;
  }

  .size-moto {
    width: 200px !important;
  }
  .product-name {
    font-size: 16px;
  }
}

@media (max-width: 394px) {
  .right-part {
    margin-top: 100px;
  }
}
</style>
