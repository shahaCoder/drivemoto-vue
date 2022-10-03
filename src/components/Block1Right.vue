<template>
  <div class="block1_right">
    <h1>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h1>
    <span>Код товара: 366666-2</span>
    <div class="block2_icons">
      <div class="block2_icons-left">
        <img src="../assets/heart.svg" alt="">
        <img src="../assets/status.svg" alt="">
      </div>
      <img src="../assets/Stars_icon.png" />
      <img src="../assets/Stars_icon.png" />
      <img src="../assets/Stars_icon.png" />
      <img src="../assets/Stars_icon.png" />
      <img src="../assets/Star-grey.svg" />
    </div>
    <div class="gidrotsikly">
      <img src="../assets/gidrotsikl-brp-seedoo.svg" alt="" />
      <p class="crost_price">1 200 475 ₽</p>
      <h2>1 100 475 ₽</h2>
      <a href="#">Нашли дешевле? Снизим цену!</a>
    </div>
    <button class="sale">КУПИТЬ</button>
    <div class="block1_right_list">
      <button class="under-line">Характеристики</button>
      <button>Наличие в магазине</button>
      <div class="list">
        <table>
          <tbody>
            <tr>
              <td>Производитель</td>
              <td>Канада</td>
            </tr>
            <tr>
              <td>Количество мест, шт:</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Мощность, л.с.</td>
              <td>115</td>
            </tr>
            <tr>
              <td>Тип двигателя</td>
              <td>Бензиновый</td>
            </tr>
            <tr>
              <td>Год выпуска</td>
              <td>2018</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="colum">
        <a href="#">Показать еще</a>
        <button class="buy_btn">КУПИТЬ</button>
      </div>
    </div>
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
  border: none;
  background-color: transparent;
}
.block1_right {
  width: 100%;
}
.block1_right h1 {
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #2f3035;
  margin-bottom: 10px;
}
.block1_right span {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #2f3035;
  margin-bottom: 20px;
  display: block;
}
.block2_icons {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 50px;
}
.block1_right_list {
  width: 100%;
}
.block1_right_list button:nth-child(1) {
  margin-right: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}

.block1_right_list button:nth-child(2) {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #919295;
}
.list {
  margin-top: 20px;
}

.list table tbody td {
  padding: 5px 0;
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #2f3035;
  border-bottom: 1px solid #cdcdce;
}
.block1_right_list a {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #1c62cd;
  margin-top: 20px;
}
.buy_btn {
  width: 177px;
  height: 50px;
  background: #1C62CD;
  border-radius: 3px;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 17px !important;
  text-align: center !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  color: #FFFFFF !important;
  margin-top: 45px;
}
.colum {
  display: flex;
  flex-direction: column;
}

.under-line{
  border-bottom:2px solid #1c62cd ;
  padding-bottom: 5px;
}

.block2_icons-left{
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 25px;
}

.gidrotsikly {
  display: none !important;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  text-decoration: dashed;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #1c62cd;
  display: block !important;
  margin: 0 auto !important;
}

.sale{
  display: none !important;
  width: 90%;
  height: 50px;
  margin-top: 40px;
  background: #1C62CD;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #FFFFFF;
}

@media (max-width: 1087px) {
  .block1_right h1 {
    font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1087 - 320)));
  }
  .block1_right_list {
    width: 100%;
  }
}

@media (max-width: 991.98px) {
  .block1_right_list{
    display: none;
  }
  .gidrotsikly, .sale{
    display: block !important;
  }
}

@media (max-width: 767.98px) {
    .buy_btn {
        width: 100%;
    }   
}
</style>
