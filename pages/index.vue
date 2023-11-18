<template>
  <div class="app-container">
    <section class="main-advocate">
      <HomeAdvocate />
    </section>
    <section class="main-news">
      <div class="container">
        <img class="box" src="@/assets/images/vote-box.png" alt="VOTA-BOX" />
        <h2 class="title">掌握喵喵最新活動！</h2>
        <div class="news-row">
          <div class="news-col pic">
            <img
              src="@/assets/images/news-1.jpeg"
              alt="活動照片"
              title="活動照片"
            />
          </div>
          <div class="news-col text">
            <div class="news-group">
              <div class="news-foot">
                <img src="@/assets/images/foot.png" alt="腳印" />
              </div>
              <div class="news-data">12/26</div>
              <h3 class="news-title">參與台北寵物論壇，爭取貓咪友善環境</h3>
              <div class="news-txt">
                <p>
                  炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！
                </p>
                <p>
                  我相信，我們的都市中，每一隻貓咪都應該有自己的VIP休憩空間。
                </p>
              </div>
            </div>
            <div class="news-group">
              <div class="news-foot">
                <img src="@/assets/images/foot.png" alt="腳印" />
              </div>
              <div class="news-data">12/24</div>
              <h3 class="news-title">
                掃街模式開啟！帶著你的貓耳，來和我一起走！
              </h3>
              <div class="news-txt">
                <p>
                  街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。
                </p>
              </div>
            </div>
            <div class="news-group">
              <div class="news-foot">
                <img src="@/assets/images/foot.png" alt="腳印" />
              </div>
              <div class="news-data">12/20</div>
              <h3 class="news-title">收容所模特兒大比拼！</h3>
              <div class="news-txt">
                <p>今天的收容所不再是一片寂靜。</p>
                <p>
                  為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      bottom: 100%;
      left: 50%;
      transform: translate(-50%, 0%);
      background-image: url("@/assets/images/bg-ear-web.png");
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: 100% auto;
    }
    .box {
      width: 31%;
      padding-top: 1vw;
      padding-bottom: 3vw;
    }
    .title {
      color: $white;
      text-align: center;
      padding-bottom: 2vw;
    }
    .news-row {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .news-col {
        margin: 0 3%;
        &.pic {
          width: 44%;
          border-radius: calc(6px + 1vw);
          overflow: hidden;
          box-shadow: -16px -16px 0px 0px #fadca8;
        }
        &.text {
          width: 48%;
          .news-group {
            margin-top: 1vw;
            margin-bottom: 3vw;
            position: relative;
            z-index: 4;
            .news-foot {
              position: absolute;
              top: -4%;
              right: 101%;
              width: 8%;
              padding: 1%;
              border-radius: 100%;
              background-color: $primary-default;
            }
            .news-data {
              color: $secondary-default;
              font-size: calc(24px + 0.2vw);
              line-height: calc(24px + 0.2vw);
              font-weight: 700;
              font-family: "Noto Sans TC", sans-serif;
              padding-bottom: 1vw;
            }
            .news-title {
              color: $secondary-default;
              font-size: calc(18px + 0.2vw);
              line-height: calc(18px + 0.2vw);
              padding-bottom: 1vw;
            }
            .news-txt {
              color: $white;
              line-height: calc(16px + 0.6vw);
            }
          }
        }
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 2px;
        height: 100%;
        top: 0%;
        left: 48.5%;
        background-color: $white;
      }
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
