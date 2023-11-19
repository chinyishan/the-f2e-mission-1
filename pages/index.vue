<template>
  <div class="app-container">
    <section class="main-advocate">
      <HomeAdvocate />
    </section>
    <section class="main-news">
      <HomeNews />
    </section>
    <section class="main-policy">
      <div class="container max-container">
        <div class="policy-row">
          <div class="policy-content">
            <div class="policy-focus">
              <div class="focus-txt">
                <h2 class="title">政策 No.1</h2>
                <h3 class="txt">為毛孩子謀福利！推動寵物醫療保障方案</h3>
              </div>
              <!-- <div class="focus-txt">
                <h2 class="title">政策 No.2</h2>
                <h3>打造休閒天堂！推廣寵物休閒與娛樂場所</h3>
              </div>
              <div class="focus-txt">
                <h2 class="title">政策 No.3</h2>
                <h3>推廣寵物飼養教育，讓愛更加專業！</h3>
              </div> -->
            </div>
            <div class="policy-list">
              <ul>
                <li>
                  <strong class="list-title">01 設立寵物醫療基金</strong>
                  <p>
                    每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。
                  </p>
                  <p>
                    根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10
                    座寵物公園。
                  </p>
                </li>
                <li>
                  <strong class="list-title">02 提供醫療補助</strong>
                  <p>
                    鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。
                  </p>
                  <p>預計在政策實施後的首年，將有超過 500 家商家加入此計畫。</p>
                </li>
                <li>
                  <strong class="list-title">03 合作動物醫院</strong>
                  <p>
                    與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，
                  </p>
                  <p>包括寵物才藝比賽、飼養知識工作坊等。</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="policy-swiper">
            <div class="swiper-policy">
              <div class="swiper-pic">
                <img
                  src="@/assets/images/strategy-1.png"
                  alt="01-設立寵物醫療基金"
                  title="01-設立寵物醫療基金"
                />
              </div>
              <div class="swiper-pic">
                <img
                  src="@/assets/images/strategy-2.png"
                  alt="02-提供醫療補助"
                  title="02-提供醫療補助"
                />
              </div>
              <div class="swiper-pic">
                <img
                  src="@/assets/images/strategy-3.png"
                  alt="03-合作動物醫院"
                  title="03-合作動物醫院"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-donate">
      <HomeDonate />
    </section>
    <section class="main-suggestion">
      <HomeSuggestion />
    </section>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.app-container {
  .main-advocate {
    padding-bottom: 7vw;
    position: relative;
    z-index: 2;
  }
  .main-news {
    position: relative;
    background-color: $primary-default;
    border-radius: calc(20px + 10vw) calc(20px + 10vw) 0 0;
    padding-bottom: 4vw;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 50%;
      bottom: 99%;
      left: 50%;
      transform: translate(-50%, 0%);
      background-image: url("@/assets/images/bg-ear-web.png");
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: 100% auto;
    }
  }
  .main-policy {
    position: relative;
    background-color: $primary-default;
    border-radius: 0 0 calc(20px + 10vw) calc(20px + 10vw);
    padding-bottom: 4vw;
    overflow: hidden;
    margin-bottom: 6vw;

    .policy-row {
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .policy-content {
      width: 60%;
      .policy-focus {
        margin-bottom: 2vw;
        .focus-txt {
          position: relative;
          padding: 16% 10% 8% 20%;
          .title {
            font-family: "Noto Sans TC", sans-serif;
            font-size: calc(28px + 1vw);
            line-height: calc(28px + 1vw);
            text-align: left;
            margin-bottom: 1vw;
            color: $secondary-dark;
          }
          .txt {
            color: $secondary-dark;
          }
          &:nth-child(1) {
            &::before {
              content: "";
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              top: 0%;
              left: 50%;
              transform: translate(-50%, 0%);
              background-image: url("@/assets/images/no-1.png");
              background-repeat: no-repeat;
              background-position: bottom center;
              background-size: contain;
            }
          }
        }
      }
      .policy-list {
        padding: 0% 0% 0% 20%;
        ul {
          li {
            color: $white;
            margin-bottom: 48px;
            strong.list-title {
              display: block;
              font-size: calc(20px + 0.3vw);
              line-height: calc(22px + 0.3vw);
              font-family: "Noto Sans TC", sans-serif;
              font-weight: 700;
              letter-spacing: 2px;
              margin-bottom: 16px;
            }
          }
        }
      }
    }
    .policy-swiper {
      width: 34%;
      position: absolute;
      top: 50%;
      right: 10%;
      transform: translate(0, -50%) rotate(9deg);
      .swiper-policy {
        .swiper-pic {
          padding: 4%;
        }
      }
    }
  }
  .main-donate {
    position: relative;
    padding-bottom: 5vw;
    margin-bottom: 6vw;
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
    }
  }
  .main-suggestion {
    margin-bottom: 6vw;
  }
}
</style>
