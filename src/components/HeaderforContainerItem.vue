<template>
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="header__top-inner">
  
            <button class="menu__btn">
              <div class="menu__btn-line"></div>
              <div class="menu__btn-line"></div>
              <div class="menu__btn-line"></div>
            </button>
            <input type="checkbox" id="checkbox">
            <label class="btn" for="checkbox">
              <div class="burger">
                <div class="burger-item"></div>
                <div class="burger-item"></div>
                <div class="burger-item"></div>
              </div>
              <span>Menu</span>
            </label>
  
            <div class="sidebar">
              <ul>
                <a href="#">
                  <router-link to="/register">
                  <li><i class="fa fa-enter"></i>Войти</li>
                </router-link>
                </a>
                <a href="#">
                  <li><i class="fa fa-favourites"></i>Избранное</li>
                </a>
                <a href="#" class="active">
                  <li><i class="fa fa-line-box"></i>Корзина</li>
                </a>
                <a href="#">
                  <li><i class="fa fa-shop"></i>Магазины</li>
                </a>
                <a href="#">
                  <li><i class="fa fa-stock"></i>Акции</li>
                </a>
                <a href="#">
                  <li><i class="fa fa-deliveri"></i>Доставка и оплата</li>
                </a>
                <a href="#">
                  <li><i class="fa fa-registration"></i>Регистрация</li>
                </a>
                <select>
                  <option selected>
                    <li><a href="#">Доставка и оплата</a></li>
                  </option>
                  <option>
                    <li><a href="#">Квадроциклы</a></li>
                  </option>
                  <option>
                    <li><a href="#">Катера</a></li>
                  </option>
                  <option>
                    <li><a href="#">Гидроциклы</a></li>
                  </option>
                  <option>
                    <li><a href="#">Лодки</a></li>
                  </option>
                  <option>
                    <li><a href="#">Вездеходы</a></li>
                  </option>
                  <option>
                    <li><a href="#">Снегоходы</a></li>
                  </option>
                  <option>
                    <li><a href="#">Двигатели</a></li>
                  </option>
                  <option>
                    <li><a href="#">Запчасти</a></li>
                  </option>
                </select>
                <p class="menu__adress">Москва, ул. Науки 25</p>
              </ul>
            </div>
            <ul class="menu__list">
              <li class="menu__item">
                <a href="#" class="menu__link">Магазины</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Акции</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Доставка и оплата</a>
              </li>
            </ul>
  
  
            <a href="#" class="logo">
              <img src="../assets/logo.svg" alt="" class="logo__img" />
              <h3 class="logo_text">DRIVE MOTO</h3>
            </a>
  
            <div class="header__box">
              <p class="header__adress">Москва, ул. Науки 25</p>
              <ul class="user__list">
                <li class="user__item">
                  <a href="#" class="user__link">
                    <img src="../assets/heart.svg" alt="" />
                  </a>
                </li>
                <li class="user__item">
                  <a href="#" class="user__link">
                    <router-link to="/register">
                    <img src="../assets/user.svg" alt="" />
                  </router-link>
                  </a>
                </li>
                <li class="user__item">
                  <a href="#" class="user__link basket">
                    <img src="../assets/basket.svg" alt="" />
                    <p class="basket__num">1</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <div class="header__bottom">
        <div class="container">
          <div class="header__bottom-inner">
  
            <ul class="menu__categories">
              <div class="categ">
                <li class="menu__categories__item">
                  <a href="#" class="menu__categories__link1">Магазины</a>
                </li>
                <li class="menu__categories__item">
                  <a href="#" class="menu__categories__link1">Акции</a>
                </li>
                <li class="menu__categories__item">
                  <a href="#" class="menu__categories__link1">Доставка и оплата</a>
                </li>
              </div>
              <li class="menu__categories__item">
                <a href="#" class="menu__categories__link">Квадроциклы</a>
              </li>
              <li class="menu__categories__item">
                <a href="#" class="menu__categories__link">Катера</a>
              </li>
              <li class="menu__categories__item">
                <router-link to="/product">
                  <a href="#" class="menu__categories__link active-item">Гидроциклы</a>
                </router-link>
              </li>
              <li class="menu__categories__item">
                <a href="#" class="menu__categories__link">Лодки</a>
              </li>
              <li class="menu__categories__item">
                <a href="#" class="menu__categories__link">Вездеходы</a>
              </li>
              <li class="menu__categories__item">
                <a href="#" class="menu__categories__link">Снегоходы</a>
              </li>
              <li class="menu__categories__item">
                <a href="#" class="menu__categories__link">Двигатели</a>
              </li>
              <li class="menu__categories__item">
                <a href="#" class="menu__categories__link">Запчасти</a>
              </li>
  
            </ul>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import "../media/media.css"
  
  export default {
    name: "HeaderComponent",
    props: {}
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }
  
  :root {
    --color-white: #FFFFFF;
    --color-black: #2F3035;
    --color-black-f: #656464;
    --color-blue: #1C62CD;
    --color-gray: #F0F0F4;
    --color-light-gray: #C4C4C4;
    --color-light-gray-categ: #CDCDCD;
    --color-gray-footer-text: #48494D;
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
    width: 100% !important;
    margin: 0 auto;
  }
  
  .page-section {
    margin-bottom: 80px;
  }
  
  
  .header__top-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 122px;
    font-weight: 700;
  }
  
  
  .menu__item {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
  }
  
  .menu__item+.menu__item {
    padding-left: 50px;
  }
  
  
  .header__box {
    display: flex;
  }
  
  .menu__btn {
    display: none;
  }
  
  .header__adress {
    margin-right: 60px;
    width: 265px;
    padding-left: 30px;
    position: relative;
    font-size: 20px;
    font-weight: 700;
  }
  
  .header__adress::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    left: 0;
    top: -10px;
    /* background-image: url('../assets/adress-icon.svg'); */
  }
  
  .menu-mobile__list {
    width: 243px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    transform: translateX(-100%);
    transition: all .3s;
    position: absolute;
    z-index: 10;
    background-color: var(--color-white);
  }
  
  .menu__mobile-line-wrapper {
    display: none;
  }
  
  .menu-mobile__list--active {
    transform: translateX(0%);
  }
  
  .menu-mobile__item {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .menu-mobile__link {
    display: block;
    padding-left: 53px;
    padding-top: 36px;
  }
  
  .menu-mobile__item:last-child {
    font-weight: bold;
    width: 181px;
  }
  
  .menu-mobile__img {
    position: absolute;
    left: 11px;
    bottom: 0;
  }
  
  .user__list {
    margin-right: 15px;
    display: flex;
    align-items: center;
  }
  
  .user__item {
    padding-right: 10px;
  }
  
  .basket {
    position: relative;
  }
  
  .basket__num {
    position: absolute;
    font-size: 10px;
    font-weight: 500;
    line-height: 20px;
    width: 20px;
    height: 20px;
    color: var(--color-white);
    background-color: #1C62CD;
    border-radius: 50%;
    text-align: center;
    bottom: -2px;
    right: -13px;
  }
  
  
  .header__bottom {
    margin-bottom: 60px;
  }
  
  .menu__categories {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #F0F0F4;
    min-height: 53px;
  }
  
  .menu__categories__item {
    position: relative;
  }
  
  .menu__categories__link {
    transition: all .3s;
    font-weight: 400;
    padding: 15px 0 14px;
    position: absolute;
    top: 50%;
    left: 40%;
    /* margin-left: -50px; */
    transform: translate(-50%, -50%);
  }
  
  .menu__categories__link::before {
    content: "";
    position: absolute;
    width: 0;
    right: 0;
    left: auto;
    bottom: -2px;
    background-color: #1C62CD;
    height: 3px;
    transition: all .5s;
  }
  
  .menu__categories__link:hover::before {
    width: 100%;
    right: auto;
    left: 0;
  }
  
  
  .menu__categories__link:hover {
    color: var(--color-black);
    font-size: 16px;
  }
  
  
  
  
  .menu__categories__link1 {
    display: none;
    transition: all .3s;
    font-weight: 400;
    padding: 15px 0 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .active-item::before{
    content: "";
    position: absolute;
    width: 100%;
    right: 0;
    left: auto;
    bottom: -2px;
    background-color: #1C62CD;
    height: 3px;
  }
  
  .menu__categories__link1::before {
    content: "";
    position: absolute;
    width: 0;
    right: 0;
    left: auto;
    bottom: -2px;
    background-color: #1C62CD;
    height: 3px;
    transition: all .5s;
  }
  
  .menu__categories__link1:hover::before {
    width: 100%;
    right: auto;
    left: 0;
  }
  
  
  .menu__categories__link1:hover {
    color: var(--color-black);
    font-size: 16px;
  }
  
  .categ {
    display: none;
  }
  
  .logo_text {
    display: none;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);
  
  
  
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Roboto', Arial, sans-serif;
  }
  
  body {
    background-color: #f5f5f5;
  }
  
  #checkbox,
  .btn span {
    display: none;
    margin-left: 10px;
    color: black;
  }
  
  .btn {
    display: none;
    color: #fff;
    width: 55px;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    cursor: pointer;
    z-index: 122;
    transition: width .3s ease-in-out;
    align-items: center !important;
  }
  
  .sidebar {
    display: none;
    background-color: #2B2E33;
    position: fixed;
    width: 250px;
    z-index: 1111;
    transition: transform .5s ease-in-out;
    transform: translateX(-350px);
    margin-top: 530px;
  }
  
  .sidebar ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  
  .sidebar ul a  {
    position: relative;
    text-decoration: none;
    display: block;
    background-color: transparent;
    color: #BAB5BD;
    padding: 15px 20px;
    font-size: 16px;
  }
  
  
  .sidebar ul a li i {
    margin-right: 15px;
  }
  
  .sidebar ul a:nth-child(2)::after,
  .sidebar ul a:nth-child(3)::after {
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -9px;
    color: #fff;
    font-size: 13px;
    padding: 0 7px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  
  .sidebar ul a:nth-child(2)::after {
    content: "New";
    background-color: tomato;
  }
  
  .sidebar ul a:nth-child(3)::after {
    content: "1";
    background-color: #247D9E;
  }
  
  .sidebar ul a:nth-child(2) li i {
    margin-left: 4px;
    margin-right: 19px;
  }
  
  .sidebar ul a:hover,
  .sidebar ul a.active {
    background-color: #161920;
    color: #fff;
  }
  
  .sidebar ul a:hover::before,
  .sidebar ul a.active::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: #247D9E;
    width: 4px;
    height: 100%;
  }
  #checkbox:checked~.sidebar {
    transform: translateX(0);
  }
  
  #checkbox:checked+.btn {
    width: 250px;
    padding: 0 20px;
  }
  
  #checkbox:checked+.btn span {
    display: inline;
  }
  
  .burger {
    width: 30px;
    height: 3px;
    position: relative;
    margin-top: -20px;
    margin-left: -10px;
  }
  
  .burger-item {
    width: 30px;
    height: 3px;
    margin-top: 13%;
    background: black;
  }
  select {
    position: relative;
    text-decoration: none;
    display: block;
    background-color: transparent;
    color: #BAB5BD;
    padding: 15px 20px;
    font-size: 16px; 
    border: none;
  }
  
  option {
    height: 60px !important;
    background-color: #2B2E33;
    border: none !important;
  
  }
  .menu__adress {
    font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #BAB5BD;
  padding: 15px 20px;
  
  }
  </style>