<template>
  <div class="main-footer">
    <div class="container">
      <div class="footer-row">
        <div class="footer-col">
          <strong class="information-title">快速連結</strong>
          <ul class="information-text">
            <li>首頁</li>
            <li>最新活動</li>
            <li>政策議題</li>
            <li>小額捐款</li>
          </ul>
        </div>
        <div class="footer-col">
          <strong class="information-title">聯絡資訊</strong>
          <ul class="information-text">
            <li>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li>
            <li>電話：(02) 888-5678</li>
            <li>電子郵件地址：meowoffice@linmeow.tw</li>
          </ul>
        </div>
        <div class="footer-col">
          <strong class="information-title">關注喵喵最新動態</strong>
          <div class="information-link">
            <a href="#">
              <img src="@/assets/images/ic-yt-y.png" alt="" />
            </a>
            <a href="#">
              <img src="@/assets/images/ic-fb-y.png" alt="" />
            </a>
            <a href="#">
              <img src="@/assets/images/ic-ig-y.png" alt="" />
            </a>
          </div>
          <p>版權聲明：© 2023 喵立翰 Miao Li-Han 版權所有。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-footer {
  background-color: $primary-default;
  .container {
    width: min(1200px, 94%);
    margin: 0 auto;
    padding: 4% 0;

    .footer-row {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      .footer-col {
        padding: 0 3%;
        height: auto;

        .information-title {
          display: block;
          color: $secondary-default;
          font-size: calc(12px + 0.2vw);
          line-height: calc(18px + 0.2vw);
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        ul {
          li {
            color: $white;
            font-size: calc(12px + 0.2vw);
            line-height: calc(18px + 0.2vw);
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 400;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }
        }

        // &:nth-child(1) {
        // }
        // &:nth-child(2) {
        // }
        &:nth-child(3) {
          .information-link {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 4% 0 10%;
            a {
              margin-right: 10px;
            }
          }
          p {
            color: $white;
            font-size: calc(12px + 0.2vw);
            line-height: calc(18px + 0.2vw);
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 400;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
