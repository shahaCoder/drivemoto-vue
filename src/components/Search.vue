<template>
  <div class="hello">
    <div class="btns">
      <button>Поиск по номеру</button>
      <button>Поиск по марке</button>
      <button class="none">Поиск по названию товара</button>
    </div>
    <div class="search">
      <input class="inp" type="text" placeholder="Введите марку" />
      <button>искать</button>
      <img src="../assets/search.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.hello {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;
}

.btns {
  display: flex;
  justify-content: flex-start;
}

.btns button {
  border: none;
  background-color: transparent;
  padding: 12px 26px;
  color: #2f3035;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  transition: 500ms ease;
}

.btns button:hover {
  background: #f0f0f4;
  color: #2f3035;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  width: 85%;
  padding-left: 10px;
  background: #f0f0f4;
  border-radius: 3px;
  border: none;
  outline: none;
}

.search button {
  width: 15%;
  background: #1c62cd;
  height: 50px;
  padding: 17px 39px;
  border-radius: 3px;
  color: #ffffff;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  border: none;
  cursor: pointer;
}

.inp {
  height: 50px;
  margin-top: -1px;
}

.search img {
  display: none;
}

@media (max-width: 1087px) {
  .btns {
    justify-content: space-between;
  }
  .none {
    display: none;
  }
}

@media (max-width: 991.98px) {
}

@media (max-width: 767.98px) {
  .btns {
    gap: 10px;
  }
  .btns button {
    padding: 12px 5px;
    font-size: 14px;
  }
  .search img {
    display: block;
    position: relative;
    right: 50px;
  }
  .search button {
    display: none;
  }
}
</style>
