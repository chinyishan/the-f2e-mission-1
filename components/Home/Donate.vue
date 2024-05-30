<template>
  <section class="section donate" id="donate">
    <div class="container donate-container">
      <h2 class="donate__lumpTitle">
        您的小筆捐款，<strong>是每隻毛孩未來的大大動力！</strong>
      </h2>
      <p class="donate__lumpSum">目前贊助總金額 : NT$ 987,655,873</p>
      <ul class="donate__list">
        <li class="donate__item" v-for="item in data.donate" :key="item.id">
          <h3 class="donate__item-name">{{ item.title }}</h3>
          <p class="donate__item-price">捐款新台幣{{ item.price }}元</p>
          <button class="donate__item-btn btn" @click="handleOpen(item)">
            馬上支持 !
          </button>
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
        <button class="donate__custom-btn btn" @click="handleOpen()">
          馬上支持 !
        </button>
      </div>
    </div>
    <DialogThank
      :showDialog="showDialog"
      @close="handleClose"
      :data="donateData"
    ></DialogThank>
  </section>
</template>

<script setup>
const { data } = await useFetch(`/api/base`);

const donateData = ref({});

const showDialog = ref(false);

const handleOpen = (item) => {
  donateData.value = item;
  showDialog.value = true;
};

const handleClose = () => {
  showDialog.value = false;
};
</script>

<style lang="scss" scoped>
.donate {
  position: relative;
  padding-bottom: 72px;
  margin-bottom: 100px;
  overflow: hidden;

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
    z-index: -1;
  }

  // .donate-container {
  //   width: min(1200px, 90%);
  // }

  @include pad-768() {
    padding-bottom: 110px;
    margin-bottom: 40px;
    overflow: visible;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      bottom: -17%;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }
  &__lumpTitle {
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    color: $primary-default;
    margin-bottom: 20px;

    strong {
      display: inline-block;
    }

    @include pad-768() {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 12px;

      strong {
        display: block;
      }
    }
  }
  &__lumpSum {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    font-family: "Noto Sans TC", sans-serif;
    text-align: center;
    color: $primary-light;
    letter-spacing: 1px;
    margin-bottom: 60px;

    @include pad-768() {
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
      margin-bottom: 40px;
    }
  }
  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;

    @include pad-768() {
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
  }
  &__item {
    width: 21%;
    margin: 2%;
    padding: 3% 2%;
    background-color: $white;
    border-radius: 20px;
    border: 1px solid $primary-default;
    box-shadow: 6px 8px 0 0 $secondary-default;
    text-align: center;

    @include pad-1024() {
      width: 32%;
    }

    @include pad-768() {
      width: 86%;
      padding: 32px 16px;
      margin: 8%;
    }

    &-name {
      letter-spacing: 1px;
      font-weight: 700;
      text-align: center;
      color: $primary-default;
      margin-bottom: 16px;

      @include pad-768() {
        font-size: 26px;
        line-height: 42px;
      }
    }
    &-price {
      color: $primary-light;
      font-size: calc(12px + 0.3vw);
      line-height: calc(12px + 0.3vw);
      font-family: "Noto Sans TC", sans-serif;
      font-weight: 500;
      letter-spacing: 1px;
      text-align: center;
      margin-bottom: 40px;

      @include pad-768() {
        font-size: 20px;
        line-height: 32px;
      }
    }
    &-btn {
      margin-bottom: 4px;
    }
    &-people {
      display: block;
      color: $primary-light;
      font-size: calc(12px + 0.2vw);
      font-weight: 500;
      line-height: calc(18px + 0.2vw);
      font-family: "Noto Sans TC", sans-serif;
      letter-spacing: 1px;

      @include pad-768() {
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
  &__custom {
    text-align: center;

    &-subTile {
      font-size: 28px;
      font-weight: 700;
      line-height: 42px;
      color: $primary-default;
      margin-bottom: 16px;
    }
    &-currently {
      color: $primary-light;
      font-size: 16px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 1px;
      font-family: "Noto Sans TC", sans-serif;
      text-align: center;
      margin-bottom: 16px;
    }
    &-form {
      position: relative;
      width: 34%;
      margin: 0 auto 32px;

      @include pad-768() {
        width: 90%;
      }
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
}
</style>
