<template>
  <section class="section news">
    <div class="container news__container">
      <div class="news__box">
        <img src="@/assets/images/vote-box.png" alt="VOTA-BOX" />
      </div>
      <div class="news__swiper">
        <h2 class="news__title">掌握喵喵最新活動！</h2>
        <div class="news__row" id="news__row">
          <div class="news__col news__images">
            <div
              class="news__images-img"
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
          <ul class="news__col news__list">
            <li
              class="news__item"
              :id="`news-item-${item.id}`"
              v-for="item in data.news"
              :key="item.id"
            >
              <div
                class="news__item-img"
                :id="`news-img-${item.id}`"
                :key="item.id"
              >
                <img
                  :src="img.imagesJpg[item.images]"
                  :alt="item.title"
                  :title="item.title"
                />
              </div>
              <div class="news__item-foot">
                <img src="@/assets/images/foot.png" alt="foot" />
              </div>
              <div class="news__item-date">{{ item.date }}</div>
              <h3 class="news__item-title">
                {{ item.title }}
              </h3>
              <div class="news__item-text">
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
    start: "-120 top",
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
</script>

<style lang="scss" scoped>
.news {
  position: relative;
  background-color: $primary-default;
  border-radius: calc(40px + 8vw) calc(40px + 8vw) 0 0;
  padding-bottom: 4vw;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 50%;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 2%);
    background-image: url("@/assets/images/bg-ear-web.png");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% auto;
  }

  @include pad-768() {
    border-radius: 40px 40px 0 0;

    &::before {
      height: 16vw;
      bottom: 100%;
      transform: translate(-50%, 4%);
    }
  }

  // &__container {
  //   width: min(1200px, 97%);
  // }

  &__box {
    width: 32%;
    padding: 20px 0 60px;
    margin: 0 auto;
    box-sizing: border-box;

    @include pad-768() {
      width: 70%;
      padding: 24px 0 20px;
    }
  }
  &__title {
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    color: $white;
    color: $secondary-bg;
    margin-bottom: 30px;

    @include pad-768() {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 40px;
    }
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

    @include pad-768() {
      flex-wrap: wrap;

      &::after {
        display: none;
      }
    }
  }
  &__col {
    margin: 0% 3%;

    @include pad-768() {
      width: 100%;
      margin: 0% 0%;
    }
  }
  &__images {
    width: 40%;
    height: auto;
    position: relative;
    display: block;
    box-sizing: border-box;

    &-img {
      border-radius: calc(6px + 1vw);
      box-shadow: -16px -16px 0px 0px #fadca8;
      overflow: hidden;
      opacity: 0;

      &:nth-child(1) {
        opacity: 0.5;
      }
      &:nth-child(2),
      &:nth-child(3) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }

    @include pad-768() {
      display: none;
    }
  }
  &__list {
    width: 44%;

    @include pad-768() {
      width: 100%;
    }
  }
  &__item {
    margin-top: 20px;
    margin-bottom: 50px;
    position: relative;
    z-index: 4;
    opacity: 0.5;
    scale: 0.9;

    &-img {
      width: 60%;
      border-radius: calc(6px + 1vw);
      box-shadow: -4px -4px 0px 0px #fadca8;
      overflow: hidden;
      display: none;
    }
    &-foot {
      position: absolute;
      top: -4%;
      right: 101%;
      width: 8%;
      padding: 1%;
      border-radius: 100%;
      background-color: $primary-default;
    }
    &-date {
      color: $secondary-default;
      font-size: calc(24px + 0.2vw);
      line-height: calc(24px + 0.2vw);
      font-weight: 700;
      font-family: "Noto Sans TC", sans-serif;
      padding-bottom: 14px;
    }
    &-title {
      color: $secondary-default;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      text-align: left;
      padding-bottom: 10px;
    }
    &-text {
      color: $white;
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;
    }

    @include pad-768() {
      margin-top: 0px;
      opacity: 1;
      scale: 1;

      &-img {
        display: block;
        margin-bottom: 20px;
      }
      &-foot {
        display: none;
      }
      &-title {
        font-size: 16px;
        line-height: 25px;
      }
      &-text {
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
}
</style>
