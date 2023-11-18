<template>
  <div class="container">
    <h2>您的小筆捐款，是每隻毛孩未來的大大動力！</h2>
    <p class="price">目前贊助總金額 : NT$ 987,655,873</p>
    <ul class="donate-row">
      <li class="donate-col" v-for="item in DonateData" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>捐款新台幣{{ item.price }}元</p>
        <button>馬上支持 !</button>
        <span>已有 {{ item.people }} 人贊助</span>
      </li>
    </ul>
    <div class="custom-group">
      <h3>「 自訂贊助金額 」</h3>
      <p>目前小額贊助總金額 : NT$ 655,873</p>
      <div class="input-content">
        <label>NT$</label>
        <input type="text" />
      </div>
      <button>馬上支持 !</button>
    </div>
  </div>
</template>

<script setup>
const DonateData = reactive([
  {
    id: 1,
    title: "「喵星人之友」",
    price: "600",
    people: "9,957",
  },
  {
    id: 2,
    title: "「喵星大使」",
    price: "6,000",
    people: "2,000",
  },
  {
    id: 3,
    title: "「喵星人之友」",
    price: "60,000",
    people: "999",
  },
]);
</script>

<style lang="scss">
.container {
  position: relative;
  z-index: 3;
  h2 {
    text-align: center;
    color: $primary-default;
    margin-bottom: 2vw;
  }
  .price {
    text-align: center;
    color: $primary-light;
    font-size: calc(20px + 0.3vw);
    line-height: calc(22px + 0.3vw);
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 4vw;
  }
  .donate-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8vw;

    .donate-col {
      width: 21%;
      margin: 0 2%;
      padding: 3% 2%;
      background-color: $white;
      border-radius: 20px;
      border: 1px solid $primary-default;
      box-shadow: 6px 8px 0 0 $secondary-default;
      text-align: center;

      h3 {
        text-align: center;
        color: $primary-default;
        margin-bottom: 1.4vw;
      }
      p {
        color: $primary-light;
        text-align: center;
        font-size: calc(12px + 0.3vw);
        line-height: calc(12px + 0.3vw);
        font-family: "Noto Sans TC", sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
        margin-bottom: 2.6vw;
      }
      button {
        margin-bottom: 1vw;
      }
      span {
        display: block;
        color: $primary-light;
        font-size: calc(12px + 0.2vw);
        line-height: calc(18px + 0.2vw);
        font-family: "Noto Sans TC", sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
      }
    }
  }
  .custom-group {
    text-align: center;

    h3 {
      color: $primary-default;
      margin-bottom: 1.4vw;
    }
    p {
      color: $primary-light;
      text-align: center;
      font-size: calc(16px + 0.3vw);
      line-height: calc(16px + 0.3vw);
      font-family: "Noto Sans TC", sans-serif;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 1.6vw;
    }
    .input-content {
      position: relative;
      width: 34%;
      margin: 0 auto 2vw;

      input {
        font-size: calc(16px + 0.3vw);
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid $primary-default;
        background-color: transparent;
        text-align: center;
      }
      input:focus {
        outline: none;
      }
      label {
        position: absolute;
        color: $primary-default;
        font-size: calc(18px + 0.2vw);
        line-height: calc(18px + 0.2vw);
        font-family: "Noto Sans TC", sans-serif;
        font-weight: 700;
        letter-spacing: 1.2px;
        pointer-events: none;
        left: 5px;
        top: 10px;
      }
    }
  }
}
</style>
