<template>
  <div class="modalDialog thankDialog">
    <div class="thankDialog__dialog">
      <div class="thankDialog__content">
        <div class="thankDialog__header">
          <h5 class="thankDialog__title">感謝您的支持</h5>
          <button
            type="button"
            class="thankDialog__close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="thankDialog__body">
          <p class="thankDialog__text">您已收到好運喵喵的祝福</p>
        </div>
        <div class="thankDialog__footer">
          <button type="button" class="thankDialog__btn">收下祝福</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
    width: min(600px, 90%);
    height: calc(50vh - 200px);
    padding: 80px 180px 60px 180px;
    border-radius: 60px;
    box-shadow: 0px 0px 0px 0px #b4f1ee;
    background: #00a199;
  }
  &__header {
    padding: 8% 0% 0%;
  }
  &__title {
    font-size: calc(20px + 2vw);
    line-height: calc(32px + 2vw);
    font-weight: 700;
    text-align: center;
    color: $white;
  }
  &__body {
    padding: 4% 0% 8%;
  }
  &__text {
    font-size: calc(16px + 2vw);
    line-height: calc(25px + 2vw);
    font-weight: 700;
    text-align: center;
    color: $secondary-default;
  }
  &__footer {
    padding: 0% 0% 8%;
  }
  &__btn {
  }
}
</style>
