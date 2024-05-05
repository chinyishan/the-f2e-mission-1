<template>
  <section class="section news">
    <div class="container news__container">
      <div class="news__box">
        <img src="@/assets/images/vote-box.png" alt="VOTA-BOX" />
      </div>
      <div class="news__swiper">
        <h2 class="news__title">掌握喵喵最新活動！</h2>
        <div class="news__row" id="news__row">
          <div class="news__col news__col--imgs">
            <div
              class="news__col--img"
              :id="`news-img-${item.id}`"
              v-for="item in data.news"
              :key="item.id"
            >
              <img
                :src="img.imagesJpg[item.images]"
                :alt="item.title"
                :title="item.title"
              />
            </div>
          </div>
          <ul class="news__col news__col--list">
            <li
              class="news__col--item"
              :id="`news-item-${item.id}`"
              v-for="item in data.news"
              :key="item.id"
            >
              <div class="news__col--foot">
                <img src="@/assets/images/foot.png" alt="foot" />
              </div>
              <div class="news__col--date">{{ item.date }}</div>
              <h3 class="news__col--title">
                {{ item.title }}
              </h3>
              <div class="news__col--text">
                <p>{{ item.content }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue"; //, onUnmounted, ref
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const img = useImg();
const { data } = await useFetch(`/api/base`);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.create({
    trigger: ".news__swiper",
    pin: true,
    start: "-200 top",
    end: "+=2000", //+=1000"
    scrub: true,
    // markers: true,
    animation: gsap
      .timeline()
      .to("#news-item-1", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out",
      })
      .to(
        "#news-img-1",
        {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      )
      .to("#news-item-1", {
        opacity: 0.5,
        scale: 0.9,
        duration: 1,
        delay: 2,
        ease: "power1.out",
      })
      .to(
        "#news-img-1",
        {
          opacity: 0,
          duration: 1,
          delay: 2,
          ease: "power1.out",
        },
        "<"
      )
      .to("#news-item-2", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out",
      })
      .to(
        "#news-img-2",
        {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      )
      .to("#news-item-2", {
        opacity: 0.5,
        scale: 0.9,
        duration: 1,
        delay: 2,
        ease: "power1.out",
      })
      .to(
        "#news-img-2",
        {
          opacity: 0,
          duration: 1,
          delay: 2,
          ease: "power1.out",
        },
        "<"
      )
      .to("#news-item-3", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out",
      })
      .to(
        "#news-img-3",
        {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      ),
  });
});

// scrollTrigger: {
//       trigger: ".news-swiper",
//       // start: "top top",
//       // end: "+=1000",
//       scrub: true, // 啟用滾動時平滑過渡
//       markers: true,
//     },
// keyframes: [
//         { opacity: 0.5, scale: 0.9, duration: 1 },
//         { opacity: 1, scale: 1, duration: 1 },
//         { opacity: 0.5, scale: 0.9, duration: 1 }, //, delay: 2
//       ],
</script>

<style lang="scss" scoped>
.news {
  position: relative;
  background-color: $primary-default;
  border-radius: calc(20px + 10vw) calc(20px + 10vw) 0 0;
  padding-bottom: 4vw;
  z-index: 2;

  &__box {
    width: 32%;
    padding: 20px 0 60px;
    margin: 0 auto;
  }
  &__title {
    color: $white;
    text-align: center;
    padding-bottom: 2vw;
  }
  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

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
  &__col {
    margin: 0 3%;

    &--imgs {
      width: 480px;
      height: 480px;
      position: relative;
    }
    &--img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: calc(6px + 1vw);
      box-shadow: -16px -16px 0px 0px #fadca8;
      overflow: hidden;
      opacity: 0;

      &:nth-child(1) {
        opacity: 0.5;
      }
    }
    &--list {
      width: 44%;
    }
    &--item {
      margin-top: 20px;
      margin-bottom: 50px;
      position: relative;
      z-index: 4;
      opacity: 0.5;
      scale: 0.9;
    }
    &--foot {
      position: absolute;
      top: -4%;
      right: 101%;
      width: 8%;
      padding: 1%;
      border-radius: 100%;
      background-color: $primary-default;
    }
    &--date {
      color: $secondary-default;
      font-size: calc(24px + 0.2vw);
      line-height: calc(24px + 0.2vw);
      font-weight: 700;
      font-family: "Noto Sans TC", sans-serif;
      padding-bottom: 14px;
    }
    &--title {
      color: $secondary-default;
      font-size: calc(18px + 0.2vw);
      line-height: calc(18px + 0.2vw);
      padding-bottom: 10px;
    }
    &--text {
      color: $white;
      line-height: calc(16px + 0.6vw);
    }
  }

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
</style>
