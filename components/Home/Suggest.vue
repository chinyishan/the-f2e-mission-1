<template>
  <section class="section suggest" id="suggest">
    <div class="container">
      <h2 class="suggest__title">您的聲音，我們的行動！</h2>
      <div class="suggest__subtitle">
        <p>
          親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。
          <br />分享您的想法，一同為我們的未來打造更美好！
        </p>
      </div>
      <div class="suggest__form">
        <form class="suggest__form-row" action="/action_page.php">
          <div class="suggest__form-col">
            <div class="suggest__form-item">
              <label class="suggest__form-label" for="name">您的姓名</label>
              <input
                class="suggest__form-input"
                type="text"
                id="name"
                name="name"
                placeholder="請輸入姓名"
                v-model="form.name"
              />
            </div>
            <div class="suggest__form-item">
              <label class="suggest__form-label" for="email">您的Email</label>
              <input
                class="suggest__form-input"
                type="email"
                id="email"
                name="email"
                placeholder="請輸入Email"
                pattern=".+@.com"
                v-model="form.email"
              />
            </div>
            <div class="suggest__form-item">
              <label class="suggest__form-label" for="tel">您的手機</label>
              <input
                class="suggest__form-input"
                type="tel"
                id="tel"
                name="tel"
                placeholder="請輸入手機號碼"
                pattern="[0-9]{10}"
                v-model="form.tel"
              />
            </div>
          </div>
          <div class="suggest__form-col">
            <div class="suggest__form-item">
              <label class="suggest__form-label" for="lname">您的建言</label>
              <textarea
                class="suggest__form-textarea"
                id="message"
                name="message"
                rows="13"
                placeholder="請輸入想和喵喵說的話"
                v-model="form.message"
              ></textarea>
            </div>
          </div>
        </form>
        <div class="suggest__submit">
          <button class="suggest__submit-btn btn" @click="handleSubmit()">
            送出
          </button>
          <p class="suggest__submit-text">為了喵喵站出來！</p>
        </div>
      </div>
    </div>
    <DialogThank :showDialog="showDialog" @close="handleClose">
      <template v-slot:header>感謝您的發聲</template>
      <template v-slot:body>您的建議正朝向喵喵飛奔中 !</template>
      <template v-slot:footer>好的！</template>
    </DialogThank>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";

const form = ref({
  name: "",
  email: "",
  tel: "",
  message: "",
});
const showDialog = ref(false);

/**const response = await emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    form.value,
    "YOUR_USER_ID"
  ); */

const handleSubmit = async () => {
  if (
    form.value.name != "" &&
    form.value.email != "" &&
    form.value.tel != "" &&
    form.value.message != ""
  ) {
    try {
      const response = await emailjs.send(
        "service_13wbyishan",
        "template_1313tpyishan",
        form.value,
        "RMDKQbeDLJj37Xi07"
      );
      if (response.status === 200) {
        handleOpen();
        resetForm();
      } else {
        alert("發送失敗，請稍後再試");
      }
    } catch (error) {
      console.error("發送郵件時發生錯誤:", error);
      alert("發送失敗，請稍後再試");
    }
  } else {
    alert("表單請填寫完整");
  }
};

const handleOpen = () => {
  showDialog.value = true;
};

const handleClose = () => {
  showDialog.value = false;
};

const resetForm = () => {
  form.value = {
    name: "",
    email: "",
    tel: "",
    message: "",
  };
};
</script>

<style lang="scss" scoped>
.suggest {
  margin-bottom: 100px;

  @include pad-768() {
    margin-bottom: 90px;
  }

  &__title {
    text-align: center;
    color: $primary-default;
    margin-bottom: 2.6vw;

    @include pad-768() {
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
    }
  }
  &__subtitle {
    margin-bottom: 40px;

    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: center;
      color: $black-1;

      @include pad-768() {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }
  &__form {
    &-row {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 0 auto 12px;

      @include pad-768() {
        flex-wrap: wrap;
      }
    }
    &-col {
      width: 36%;
      margin: 0% 4%;

      @include pad-768() {
        width: 100%;
        margin: 0% 0%;
      }
    }
    &-item {
      margin-bottom: 28px;
    }
    &-label {
      display: block;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 1px;
      font-family: "Noto Sans TC", sans-serif;
      text-align: left;
      margin-bottom: 14px;
      color: $primary-light;
    }
    &-input {
      display: block;
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #c9f1ef;
      background-color: $white;
    }
    &-textarea {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #c9f1ef;
      background-color: $white;
      resize: none;
      padding: 10px;
    }
  }
  &__submit {
    margin: 0 auto;
    text-align: center;

    &-btn {
      padding: 10px 140px;
      margin-bottom: 16px;
    }
    &-text {
      text-align: center;
      color: $primary-light;
      font-size: calc(12px + 0.3vw);
      line-height: calc(12px + 0.3vw);
      font-family: "Noto Sans TC", sans-serif;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
}
</style>
