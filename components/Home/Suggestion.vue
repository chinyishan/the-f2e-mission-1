<template>
  <div class="container">
    <h2>您的聲音，我們的行動！</h2>
    <div class="suggestion-text">
      <p>
        親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。
      </p>
      <p>分享您的想法，一同為我們的未來打造更美好！</p>
    </div>
    <div class="suggestion-form">
      <form class="form-row" action="/action_page.php">
        <div class="form-col">
          <div class="col-input">
            <label for="name">您的姓名</label>
            <input type="text" id="name" name="name" placeholder="請輸入姓名" />
          </div>
          <div class="col-input">
            <label for="email">您的Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="請輸入Email"
              pattern=".+@.com"
            />
          </div>
          <div class="col-input">
            <label for="tel">您的手機</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="請輸入手機號碼"
              pattern="[0-9]{10}"
            />
          </div>
        </div>
        <div class="form-col">
          <div class="col-input">
            <label for="lname">您的建言</label>
            <textarea
              id="word"
              name="word"
              rows="13"
              placeholder="請輸入想和喵喵說的話"
            ></textarea>
          </div>
        </div>
      </form>
      <div class="submit-group">
        <button>送出</button>
        <p>為了喵喵站出來！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  h2 {
    text-align: center;
    color: $primary-default;
    margin-bottom: 2.6vw;
  }
  .suggestion-text {
    margin-bottom: 2vw;

    p {
      text-align: center;
      font-size: calc(14px + 0.3vw);
      line-height: calc(20px + 0.3vw);
      color: $black-1;
    }
  }
  .suggestion-form {
    .form-row {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 0 auto 2vw;

      .form-col {
        width: 36%;
        margin: 0 4%;
        .col-input {
          margin-bottom: 24px;

          label {
            display: block;
            margin-bottom: 14px;
            color: $primary-light;
            font-size: calc(12px + 0.3vw);
            line-height: calc(12px + 0.3vw);
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 400;
            letter-spacing: 1px;
          }
          input {
            display: block;
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #c9f1ef;
            background-color: $white;
          }
        }
        &:nth-child(2) {
          .col-input {
            textarea {
              width: 100%;
              height: 100%;
              border-radius: 4px;
              border: 1px solid #c9f1ef;
              background-color: $white;
              resize: none;
              padding: 10px;
            }
          }
        }
      }
    }
    .submit-group {
      margin: 0 auto;
      text-align: center;
      button {
        padding: 10px 140px;
        margin-bottom: 16px;
      }
      p {
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
}
</style>
