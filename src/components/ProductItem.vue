<template>
  <div class="box" v-for="product of products" :key="product">
    <div class="modal-product"><p>Посмотреть товар</p></div>
    <img src="../assets/Likeheart.svg" class="heart" />
    <div class="box-cont">
      <img :src="require(`../assets/${product.img}`)" />
    </div>
    <p class="bag">
      {{ product.name }}
    </p>
    <div class="bottom">
      <h1 class="cost">{{ product.money }} &#8381;</h1>
      <div class="item-cart">
        <img src="../assets/box.svg" class="cart-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  data: function () {
    return {
      products: [
        {
          name: "Водонепроницаемый Рюкзак",
          money: 9800,
          img: "bag.svg",
          sale: false
        },
        {
          name: "Спасательный жилет BRP ",
          money: 6900,
          img: "jacket.svg",
          sale: true
        },
        {
          name: "Спасательный жилет BRP ",
          money: 9800,
          img: "binoculars.svg",
          sale: false
        },
        {
          name: "Водонепроницаемый Рюкзак",
          money: 9800,
          img: "saveEquipment.svg",
          sale: true
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

h1,
p {
  cursor: pointer;
}

.box {
  width: 100%;
  height: fit-content;
  border-radius: 3px;
  border: 1px solid #cdcdcd;
  position: relative;
  padding: 30px;
  transition: 0.5s ease;
}

.box-cont img {
  width: 100%;
  object-fit: contain;
}

.box:hover {
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
}

.box:hover .modal-product {
  display: block;
}

.heart {
  position: absolute;
  top: 15px;
  right: 15px;
}

.bag {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
}

.cost {
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  font-family: "Barlow";
}

.item-cart {
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 70px;
  height: 35px;
  background-color: #1c62cd;
  border-radius: 10px 0px 0px 0px;
}

.modal-product {
  width: 70%;
  opacity: 0.9;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 38px;
  font-size: 22px;
  display: none;
}

.cart-img {
  margin-top: 6px;
  margin-left: 20px;
}

.sale {
  /* width: 63px;
        height: 25px; */
  background-color: #1c62cd;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  padding: 5px 15px;
  text-transform: uppercase;
}
.link {
  text-align: center;
}
@media only screen and (max-width: 300px) {
  .box {
    width: 200px;
  }
}
</style>
