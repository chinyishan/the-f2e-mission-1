<template>
  <div class="main-banner">
    <div class="banner-name"><strong>喵立翰</strong>Miao Li-Han</div>
    <h1 class="banner-slogan">
      <strong>喵的未來</strong>
      <strong>人的希望</strong>
    </h1>
    <div class="banner-cat">
      <img src="@/assets/images/header-murr.png" alt="喵立翰" title="喵立翰" />
    </div>
    <div class="banner-items">
      <img
        class="item-1"
        src="@/assets/images/banner-1.png"
        alt="推廣寵物飼養教育"
      />
      <img
        class="item-2"
        src="@/assets/images/banner-1.png"
        alt="推廣寵物飼養教育"
      />
      <img
        class="item-3"
        src="@/assets/images/banner-1.png"
        alt="推廣寵物飼養教育"
      />
      <img
        class="item-4"
        src="@/assets/images/banner-2.png"
        alt="推廣寵物休閒與娛樂場所"
      />
      <img
        class="item-5"
        src="@/assets/images/banner-2.png"
        alt="推廣寵物休閒與娛樂場所"
      />
      <img
        class="item-6"
        src="@/assets/images/banner-3.png"
        alt="推動寵物醫療保障方案"
      />
      <img
        class="item-7"
        src="@/assets/images/banner-3.png"
        alt="推動寵物醫療保障方案"
      />
      <img
        class="item-8"
        src="@/assets/images/banner-3.png"
        alt="推動寵物醫療保障方案"
      />
    </div>
    <picture class="banner-bg">
      <source
        srcset="@/assets/images/heade-bg-web.png"
        media="(min-width: 768px)"
        alt="喵喵背景"
      />
      <img src="@/assets/images/heade-bg-mobile.png" alt="喵喵背景" />
    </picture>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let bannerItems = gsap.timeline();
  bannerItems.to(".banner-items", {
    y: -620,
    duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".banner-items",
      start: "top top",
      end: "+=150 top",
      pin: true,
      scrub: true,
      markers: true,
    },
  });
});
</script>
<style lang="scss">
.main-banner {
  position: relative;
  overflow: hidden;
  margin-bottom: 7vw;

  .banner-name {
    position: absolute;
    width: 40%;
    top: 67%;
    left: 32%;
    z-index: 5;
    font-size: calc(32px + 2vw);
    line-height: calc(32px + 2vw);
    font-family: "Gaegu", sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: $primary-default;
    text-align: center;

    strong {
      display: inline-block;
      font-size: calc(32px + 0.8vw);
      line-height: calc(32px + 0.8vw);
      font-family: "Noto Serif TC", serif;
      font-weight: 700;
      margin-right: 4%;
    }
  }
  .banner-slogan {
    position: absolute;
    width: 100%;
    top: 51%;
    z-index: 4;
    font-size: calc(40px + 4.6vw);
    line-height: calc(40px + 4.6vw);
    font-family: "Noto Serif TC", serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: $primary-default;
    text-align: center;

    strong {
      display: inline-block;
      margin: 0 6%;
    }
  }
  .banner-cat {
    position: absolute;
    width: 45%;
    top: 9%;
    left: 35%;
    z-index: 2;
  }
  .banner-items {
    position: absolute;
    width: 90%;
    height: 100%;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 3;
    img {
      position: absolute;
      width: 19%;

      &.item-1 {
        bottom: 1%;
        left: 2%;
        transform: rotate(3deg);
      }
      &.item-2 {
        bottom: 2%;
        right: 22%;
        transform: rotate(14deg);
      }
      &.item-3 {
        bottom: 8%;
        right: 14%;
        transform: rotate(5.8deg);
      }
      &.item-4 {
        bottom: 9%;
        left: 15%;
        transform: rotate(-9deg);
      }
      &.item-5 {
        bottom: 11%;
        right: 31%;
        transform: rotate(-10deg);
      }
      &.item-6 {
        bottom: 5%;
        left: 25%;
        transform: rotate(-19deg);
      }
      &.item-7 {
        bottom: 2%;
        left: 42%;
        transform: rotate(9deg);
      }
      &.item-8 {
        bottom: 1%;
        right: 2%;
        transform: rotate(-3deg);
      }
    }
  }
  .banner-bg {
    width: 100%;
    height: auto;
  }
}
</style>
