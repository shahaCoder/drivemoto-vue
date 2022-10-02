<template>
  <div id="act">
    <p id="txt">Акция</p>
    <h2 id="price">190 000 ₽</h2>
    <span id="ace">225 000 ₽</span>
    <div class="block-main">
      <img src="../assets/drull.png" alt="" class="imgo">
      <div class="texts">
        <h3 id="product">Лодочный мотор</h3>
        <h4 id="mark">Suzuki DF9.9BRS</h4>
      </div>
    </div>
    <div id="data">
      <div class="cross">
        <span id="txt_ac">Акция действует до</span>
        <span id="data_ac">31.08.2020</span>
      </div>
    </div>
  </div>
</template>

<script>
      export default {
  name: "BlockAction",
  props: {},
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

}

#act {
  width: 265px;
  height: 397px;
  border: 1px solid #CDCDCD;
  border-radius: 3px;
}

#data_ac{
  color: #1C62CD;
}

#txt {
  width: 90px;
  height: 30px;
  background: #1C62CD;
  padding-top: 5px;
  padding-left: 25px;
  color: white;
}

#mark{
  margin-left: 13px;
}

#price {
  position: relative;
  left: 130px;
  bottom: 30px;
  font-size: 27px;
  color: #1C62CD;
}

#ace {
  color: #C4C4C4;
  font-size: 14px;
  position: relative;
  left: 180px;
  text-decoration: line-through;
  bottom: 30px;
}

.imgo {
  width: 125px;
  height: 176.69px;
}

#data{
  width: 264px;
  height: 64.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #F0F0F4;
}

.cross{
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.block-main {
  width: 200px;
  height: 250px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>

