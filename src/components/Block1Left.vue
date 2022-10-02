<template>
  <div class="gidrotsikly">
    <button>SALE</button>
    <img src="../assets/gidrotsikl-brp-seedoo.svg" alt="" />
    <p class="crost_price">1 200 475 ₽</p>
    <h2>1 100 475 ₽</h2>
    <a href="#">Нашли дешевле? Снизим цену!</a>
  </div>
</template>

<script>
  export default {
    name: "Block1Left",
    components: {
        
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Barlow";
}
.gidrotsikly {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.gidrotsikly button {
  width: 94px;
  height: 44px;
  background-color: #1c62cd;
  border-radius: 3px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.12em;
  color: #ffffff;
}

.gidrotsikly p {
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  opacity: 0.6;
  text-decoration: line-through;
  text-align: center;
}
.gidrotsikly h2 {
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #2f3035;
  text-align: center;
}
.gidrotsikly a {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #1c62cd;
  margin: 0 auto;
}

@media (max-width: 1087px) {
  
}

@media (max-width: 991.98px) {
    .gidrotsikly button {
        display: none;
    }
}

@media (max-width: 767.98px) {
}
</style>
