<template>
  <div class="container wrap-news">
    <div class="box">
      <img src="@/assets/images/vote-box.png" alt="VOTA-BOX" />
    </div>
    <h2 class="title">掌握喵喵最新活動！</h2>
    <div class="news-row">
      <div class="news-col col-pic">
        <img
          src="@/assets/images/news-1.jpeg"
          alt="活動照片"
          title="活動照片"
        />
      </div>
      <div class="news-col col-text">
        <div class="news-group" id="news-1">
          <div class="news-foot">
            <img src="@/assets/images/foot.png" alt="腳印" />
          </div>
          <div class="news-data">12/26</div>
          <h3 class="news-title">參與台北寵物論壇，爭取貓咪友善環境</h3>
          <div class="news-txt">
            <p>
              炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！
            </p>
            <p>我相信，我們的都市中，每一隻貓咪都應該有自己的VIP休憩空間。</p>
          </div>
        </div>
        <div class="news-group" id="news-2">
          <div class="news-foot">
            <img src="@/assets/images/foot.png" alt="腳印" />
          </div>
          <div class="news-data">12/24</div>
          <h3 class="news-title">掃街模式開啟！帶著你的貓耳，來和我一起走！</h3>
          <div class="news-txt">
            <p>
              街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。
            </p>
          </div>
        </div>
        <div class="news-group" id="news-3">
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
</template>

<script setup>
// import { onMounted, onUnmounted, ref } from "vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const newsData = reactive([
  {
    id: 1,
    data: "12/26",
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    text_1:
      "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！",
    text_2: "我相信，我們的都市中，每一隻貓咪都應該有自己的VIP休憩空間。",
    image: "news-1.jpeg",
  },
]);

// gsap.registerPlugin(ScrollTrigger);

// onMounted(() => {
//   ScrollTrigger.create({
//     trigger: ".wrap-news",
//     pin: true,
//     start: "top top",
//     end: "+=1800",
//     markers: true,
//   });
//   let newsItems = gsap.timeline();
//   newsItems
//     .to(".wrap-news", {
//       duration: 3,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".wrap-news",
//         start: "top top",
//         end: "bottom top",
//         pin: true,
//         scrub: 0.5,
//         markers: true,
//       },
//     })
//     .to("#news-1", {
//       scale: 1.1,
//       x: 28,
//       duration: 1,
//       ease: "none",
//       scrollTrigger: {
//         start: "-300",
//         end: "0",
//         pin: true,
//         scrub: 0.5,
//         markers: true,
//       },
//     });
//   .to("#news-2", {
//     scale: 1.1,
//     x: 28,
//     duration: 0.5,
//     ease: "none",
//     scrollTrigger: {
//       start: "400",
//       end: "700",
//       pin: true,
//       scrub: 0.5,
//       markers: true,
//     },
//   })
//   .to("#news-3", {
//     scale: 1.1,
//     x: 28,
//     duration: 0.5,
//     ease: "none",
//     scrollTrigger: {
//       start: "1100",
//       end: "1400",
//       pin: true,
//       scrub: 0.5,
//       markers: true,
//     },
//   });
// });
</script>

<style lang="scss" scoped>
.container {
  .box {
    width: 32%;
    padding: 20px 0 60px;
    margin: 0 auto;
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
      &.col-pic {
        width: 40%;
        border-radius: calc(6px + 1vw);
        overflow: hidden;
        box-shadow: -16px -16px 0px 0px #fadca8;
      }
      &.col-text {
        width: 44%;
        .news-group {
          margin-top: 30px;
          margin-bottom: 60px;
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
            padding-bottom: 14px;
          }
          .news-title {
            color: $secondary-default;
            font-size: calc(18px + 0.2vw);
            line-height: calc(18px + 0.2vw);
            padding-bottom: 10px;
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
</style>
