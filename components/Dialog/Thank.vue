<template>
  <transition name="modal">
    <div class="modalDialog thankDialog" v-show="showDialog">
      <div class="thankDialog__dialog">
        <div class="thankDialog__content">
          <div class="thankDialog__header">
            <h5 class="thankDialog__title">
              <slot name="header">感謝您的支持</slot>
            </h5>
          </div>
          <div class="thankDialog__body">
            <p class="thankDialog__text" v-if="data?.title !=null">
              您選擇支持 {{ data?.title }}，捐款金額為新台幣
              {{ data?.price }} 元
            </p>
            <p class="thankDialog__text">
              <slot namr="body">請收下好運喵喵的祝福</slot>
            </p>
          </div>
          <div class="thankDialog__footer">
            <button
              type="button"
              class="thankDialog__btn"
              @click="$emit('close')"
            >
              <slot name="footer">收下祝福</slot>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  showDialog: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    default: {},
  },
});

console.log(props.data);
</script>

<style lang="scss">
.modalDialog {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background: rgb(6, 37, 35, 0.5);
  z-index: 100;
  display: block;
}
.thankDialog {
  &__dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(500px, 90%);
    // height: calc(50vh - 200px);
    padding: calc(20px + 1vw);
    border-radius: 60px;
    box-shadow: 0px 0px 0px 0px #b4f1ee;
    background: #00a199;
  }
  &__header {
    padding: 6% 0% 0%;
  }
  &__title {
    font-size: calc(20px + 0.2vw);
    line-height: calc(32px + 0.2vw);
    font-weight: 700;
    text-align: center;
    color: $white;
  }
  &__body {
    padding: 4% 0% 6%;
  }
  &__text {
    font-size: calc(16px + 0.2vw);
    line-height: calc(25px + 0.2vw);
    font-weight: 700;
    text-align: center;
    color: $secondary-default;
  }
  &__footer {
    padding: 0% 0% 6%;
    text-align: center;
  }
  &__btn {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 8px 30px;
    border-radius: 8px;
    color: $primary-default;
    background: $white;
    border: 0px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: $focus;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
