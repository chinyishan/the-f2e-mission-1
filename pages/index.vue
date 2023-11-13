<template>
  <div class="app-container">
    <section class="main-advocate">
      <div class="container">
        <h2 class="advocate-name"><strong>喵立翰</strong>Miao Li-Han</h2>
        <div class="advocate-text">
          <p>
            我堅信，藉由<strong>推動更完善的貓咪福利和相關政策</strong>，更是間接地投資於台灣的未來。
          </p>
          <p>畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。</p>
          <p>透過完善的貓咪福利政策，為台灣的GDP 經濟帶來巨大效益。</p>
          <p>
            因此，我期望能在立法院內推進這些政策，<strong>確保每一隻貓咪都能得到他們應有的照顧</strong>，
          </p>
          <p>同時也為台灣的經濟發展助一臂之力。</p>
        </div>
        <h3 class="advocate-slogan">
          讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始！
        </h3>
        <img class="advocate-bg" src="@/assets/images/vote-miao.png" alt="" />
      </div>
    </section>
    <section class="main-news">
      <div class="container max-container">
        <img class="box" src="@/assets/images/vote-box.png" alt="" />
        <h2 class="title">掌握喵喵最新活動！</h2>
        <div class="news-row">
          <div class="news-col pic">
            <img src="@/assets/images/news-1.jpeg" alt="" />
          </div>
          <div class="news-col text">
            <div class="news-group">
              <div class="news-foot">
                <img src="@/assets/images/foot.png" alt="" />
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
                <img src="@/assets/images/foot.png" alt="" />
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
                <img src="@/assets/images/foot.png" alt="" />
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
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.app-container {
  .main-advocate {
    padding-bottom: 7vw;
    .advocate-name {
      font-size: calc(32px + 2vw);
      line-height: calc(32px + 2vw);
      font-family: "Gaegu", sans-serif;
      font-weight: 400;
      letter-spacing: 0.5px;
      color: $primary-default;
      text-align: center;
      margin-bottom: 1vw;

      strong {
        display: inline-block;
        font-size: calc(32px + 0.8vw);
        line-height: calc(32px + 0.8vw);
        font-family: "Noto Serif TC", serif;
        font-weight: 700;
        margin-right: 4%;
      }
    }
    .advocate-text {
      margin-bottom: 1vw;
      p {
        line-height: calc(14px + 1vw);
        text-align: center;
        margin: 0 auto;
        color: $black;
        strong {
          color: $primary-default;
        }
      }
    }
    .advocate-slogan {
      color: $primary-default;
      font-size: calc(20px + 0.3vw);
      line-height: calc(20px + 0.3vw);
      text-align: center;
      margin-bottom: 3vw;
    }
    .advocate-bg {
      width: 80%;
    }
  }
  .main-news {
    background-color: $primary-default;

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
}
</style>
