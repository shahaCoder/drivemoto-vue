<template>
  <footer>
    <div class="footer-wrap">
      <div class="left-footer_container">
        <div class="left-footer_container-top">
          <h3 class="text">
            Подпишитесь на нашу рассылку <br />
            и узнавайте о акция быстрее
          </h3>
        </div>
        <div class="left-footer_container-bottom">
          <input type="email" placeholder="Введите ваш e-mail:" />
          <button>ОТПРАВИТЬ</button>
        </div>
      </div>
      <div class="center-footer_container">
        <div class="left">
          <h3>Информация</h3>
          <p>О компании</p>
          <p>Контакты</p>
          <p>Акции</p>
          <p class="txt">Магазины</p>
          <p>Договор оферты</p>
        </div>
        <div class="right">
          <h3>Интернет-магазин</h3>
          <p>Доставка и самовызов</p>
          <p>Оплата</p>
          <p>Возврат-обмен</p>
          <p class="txt">Новости</p>
          <p>Политика обработки персональных данных</p>
        </div>
      </div>

      <div class="right-footer-images">
        <img src="../assets/instagram-sketched.svg" />
        <img src="../assets/vkontakte.svg" />
        <img src="../assets/facebook.svg" />
        <img src="../assets/youtube.svg" />
      </div>
    </div>
  </footer>
  <div class="footer-clone">
    <div class="footer-clone-wrap">
      <div class="footer-clone-top">
        <div class="first-footer-clone__block">
          <p class="center-footer-clone__text">
            Подпишитесь на нашу рассылку <br />
            и узнавайте о акция быстрее
          </p>
          <div class="footer-clone-btn">
            <input type="email" placeholder="Введите ваш e-mail:" />
            <button>ОТПРАВИТЬ</button>
          </div>
        </div>
      </div>
      <div class="footer-clone-center">
        <div class="info-block">
          <details>
            <summary>Информация</summary>
            <p>О компании</p>
            <p>Контакты</p>
            <p>Акции</p>
            <p>Магазины</p>
          </details>
        </div>
        <div class="info-block">
          <details>
            <summary>Интернет-магазин</summary>
            <p>Доставка и самовызов</p>
            <p>Оплата</p>
            <p>Возврат-обмен</p>
            <p>Новости</p>
          </details>
        </div>
      </div>
    </div>
    <div class="footer-clone-images">
      <img src="../assets/instagram-sketched.svg" />
      <img src="../assets/vkontakte.svg" />
      <img src="../assets/facebook.svg" />
      <img src="../assets/youtube.svg" />
    </div>
    <p>Договор оферты</p>
    <p>Политика обработки персональных данных</p>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  components: {},
};
</script>

<style scoped>
footer {
  width: 100% !important;
  background-color: #f0f0f4;
  padding: 50px 0px;
  height: 200px;
  position: relative;
}

.footer-wrap {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
}

.left-footer_container {
  width: 33%;
}

.text {
  margin-bottom: 34px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 700;
}

input {
  width: 65%;
  height: 30px;
  border: none;
  padding-left: 10px;
}

input::placeholder {
  color: #c4c4c4;
}

button {
  width: 35%;
  height: 32px;
  border: none;
  background-color: #1c62cd;
  color: white;
  cursor: pointer;
}

.left-footer_container-bottom,
.center-footer_container {
  display: flex;
  align-items: center;
}

.center-footer_container {
  width: 40%;
  justify-content: space-between;
}

.left,
.right {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  line-height: 10px;
}

.right-footer-images {
  width: 17%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.txt {
  margin-bottom: 50px;
}

p,
img {
  cursor: pointer;
}

/* FOOTER CLONE */

.footer-clone {
  width: 100%;
  height: auto;
  background-color: white;
  display: none;
}

.footer-clone-wrap {
  background-color: #f0f0f4;
  height: auto;
}

.footer-clone-top {
  width: 100%;
}

.footer-clone-btn {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}

.center-footer-clone__text {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 700;
}

.info-block {
  width: auto;
  padding: 15px;
  border-bottom: 1px solid #c4c4c4;
  border-top: 1px solid #c4c4c4;
}

.footer-clone-center {
  margin-bottom: 35px;
}

.footer-clone-images {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
}

@media (max-width: 1400px) {
  .center-footer_container {
    /* display: none; */
  }

  .center-footer_container {
    width: 50%;
  }

  .left {
    margin-left: 10px;
  }

  .right-footer-images {
    flex-direction: column;
    gap: 5px;
  }
}

@media (max-width: 1260px) {
  .footer-wrap {
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .left-footer_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .right-footer-images {
    flex-direction: unset;
    gap: 5px;
    position: absolute;
    bottom: 20px;
    left: 675px;
  }

  .center-footer_container {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
@media (max-width: 995px) {
  .center-footer_container {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right-footer-images {
    left: 625px;
  }
}

@media (max-width: 865px) {
  .right-footer-images {
    left: 560px;
  }
}

@media (max-width: 830px) {
  .right-footer-images {
    left: 530px;
  }
}

@media (max-width: 820px) {
  .text {
    font-size: 16px;
  }

  .right-footer-images {
    left: 520px;
    bottom: 100px;
  }

  .center-footer_container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: 755px) {
  .right-footer-images {
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    bottom: 50px;
  }

  .center-footer_container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: 685px) {
  .right-footer-images {
    left: 480px;
  }

  .text {
    font-size: 14px;
  }
}

@media (max-width: 645px) {
  footer {
    display: none;
  }
  .footer-clone {
    display: block;
  }
}
</style>
