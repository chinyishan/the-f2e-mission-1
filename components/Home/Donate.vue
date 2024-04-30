<template>
  <section class="section donate">
    <div class="container">
      <h2 class="donate__lumpTitle">
        您的小筆捐款，是每隻毛孩未來的大大動力！
      </h2>
      <p class="donate__lumpSum">目前贊助總金額 : NT$ 987,655,873</p>
      <ul class="donate__list">
        <li class="donate__item" v-for="item in data.donate" :key="item.id">
          <h3 class="donate__item-name">{{ item.title }}</h3>
          <p class="donate__item-price">捐款新台幣{{ item.price }}元</p>
          <button class="donate__item-btn">馬上支持 !</button>
          <span class="donate__item-people">已有 {{ item.people }} 人贊助</span>
        </li>
      </ul>
      <div class="donate__custom">
        <h3 class="donate__custom-subTile">「 自訂贊助金額 」</h3>
        <p class="donate__custom-currently">目前小額贊助總金額 : NT$ 655,873</p>
        <div class="donate__custom-form">
          <label class="donate__custom-label">NT$</label>
          <input class="donate__custom-input" type="text" />
        </div>
        <button class="donate__custom-btn">馬上支持 !</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch(`/api/base`);
</script>

<style lang="scss" scoped>
.donate {
  position: relative;
  padding-bottom: 5vw;
  margin-bottom: 6vw;
  overflow: hidden;

  .container {
    position: relative;
    z-index: 3;
  }
  &__lumpTitle {
    text-align: center;
    color: $primary-default;
    margin-bottom: 2vw;
  }
  &__lumpSum {
    text-align: center;
    color: $primary-light;
    font-size: calc(20px + 0.3vw);
    line-height: calc(22px + 0.3vw);
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 4vw;
  }
  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8vw;
  }
  &__item {
    width: 21%;
    margin: 0 2%;
    padding: 3% 2%;
    background-color: $white;
    border-radius: 20px;
    border: 1px solid $primary-default;
    box-shadow: 6px 8px 0 0 $secondary-default;
    text-align: center;

    &-name {
      text-align: center;
      color: $primary-default;
      margin-bottom: 1.4vw;
    }
    &-price {
      color: $primary-light;
      text-align: center;
      font-size: calc(12px + 0.3vw);
      line-height: calc(12px + 0.3vw);
      font-family: "Noto Sans TC", sans-serif;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 2.6vw;
    }
    &-btn {
      margin-bottom: 1vw;
    }
    &-people {
      display: block;
      color: $primary-light;
      font-size: calc(12px + 0.2vw);
      line-height: calc(18px + 0.2vw);
      font-family: "Noto Sans TC", sans-serif;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  &__custom {
    text-align: center;

    &-subTile {
      color: $primary-default;
      margin-bottom: 1.4vw;
    }
    &-currently {
      color: $primary-light;
      text-align: center;
      font-size: calc(16px + 0.3vw);
      line-height: calc(16px + 0.3vw);
      font-family: "Noto Sans TC", sans-serif;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 1.6vw;
    }
    &-form {
      position: relative;
      width: 34%;
      margin: 0 auto 2vw;
    }
    &-label {
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
    &-input {
      font-size: calc(16px + 0.3vw);
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      border: none;
      border-bottom: 1px solid $primary-default;
      background-color: transparent;
      text-align: center;

      &:focus {
        outline: none;
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 80%;
    height: 80%;
    bottom: -28%;
    left: 48%;
    transform: translate(-50%, 0%);
    background-image: url("@/assets/images/murr-love.png");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
  }
}
</style>
