<template>
  <div class="block1_right">
    <h1>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h1>
    <span>Код товара: 366666-2</span>
    <div class="block2_icons">
      <img src="../assets/Stars_icon.png" />
      <img src="../assets/Stars_icon.png" />
      <img src="../assets/Stars_icon.png" />
    </div>
    <div class="block1_right_list">
      <button>Характеристики</button>
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
  gap: 25px;
  margin-bottom: 50px;
}
.block1_right_list {
  width: 68%;
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
  background: #1c62cd;
  border-radius: 3px;
  margin-top: 45px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
}
.colum {
  display: flex;
  flex-direction: column;
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
}

@media (max-width: 767.98px) {
    .buy_btn {
        width: 100%;
    }   
}
</style>
