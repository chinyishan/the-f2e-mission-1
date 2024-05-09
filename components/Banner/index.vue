<template>
  <div class="banner">
    <h2 class="banner__title">
      <strong>喵的未來</strong>
      <strong>人的希望</strong>
    </h2>
    <h3 class="banner__subtitle">
      <strong class="banner__subtitle-ch">喵立翰</strong>
      <strong class="banner__subtitle-en">Miao Li-Han</strong>
    </h3>
    <div class="banner__cat">
      <img src="@/assets/images/header-murr.png" alt="喵立翰" title="喵立翰" />
    </div>
    <div class="banner__list">
      <img
        class="banner__item"
        id="banner__item-1"
        src="@/assets/images/banner-1.png"
        alt="推廣寵物飼養教育"
      />
      <img
        class="banner__item"
        id="banner__item-2"
        src="@/assets/images/banner-1.png"
        alt="推廣寵物飼養教育"
      />
      <img
        class="banner__item"
        id="banner__item-3"
        src="@/assets/images/banner-1.png"
        alt="推廣寵物飼養教育"
      />
      <img
        class="banner__item"
        id="banner__item-4"
        src="@/assets/images/banner-2.png"
        alt="推廣寵物休閒與娛樂場所"
      />
      <img
        class="banner__item"
        id="banner__item-5"
        src="@/assets/images/banner-2.png"
        alt="推廣寵物休閒與娛樂場所"
      />
      <img
        class="banner__item"
        id="banner__item-6"
        src="@/assets/images/banner-3.png"
        alt="推動寵物醫療保障方案"
      />
      <img
        class="banner__item"
        id="banner__item-7"
        src="@/assets/images/banner-3.png"
        alt="推動寵物醫療保障方案"
      />
      <img
        class="banner__item"
        id="banner__item-8"
        src="@/assets/images/banner-3.png"
        alt="推動寵物醫療保障方案"
      />
    </div>
    <picture class="banner__bg">
      <source
        srcset="@/assets/images/heade-bg-web.png"
        media="(min-width: 769px)"
        alt="喵喵背景"
      />
      <img src="@/assets/images/heade-bg-mobile.png" alt="喵喵背景" />
    </picture>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    ScrollTrigger.create({
      trigger: ".banner",
      pin: true,
      start: "top top",
      end: "+=600", //+=500
      // markers: true,
    });

    let bannerItems = gsap.timeline();

    bannerItems
      .to(".banner__list", {
        y: "-56%", //x、y 移動位置
        duration: 2, //秒數
        ease: "none", //動畫效果
        scrollTrigger: {
          trigger: ".banner__list", //觸發得物件
          start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
          end: "+=200 top", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=200)
          pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
          scrub: 1, // 是否要啟用滾動動畫，true/false，數字為延遲幾秒
          markers: true,
        },
      })
      .to("#banner__item-1", {
        x: -10,
        y: 30,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-2", {
        x: 40,
        y: -50,
        rotation: 12,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-3", {
        x: 120,
        y: -80,
        rotation: -16,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-4", {
        x: -70,
        y: -70,
        rotation: 9,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-5", {
        x: 60,
        y: -80,
        rotation: -10,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-6", {
        x: -130,
        y: -10,
        rotation: -6,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-7", {
        x: -150,
        y: -140,
        rotation: 6,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-8", {
        x: -20,
        y: 40,
        rotation: 4,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      });
  });
  mm.add("(min-width: 769px)", () => {
    ScrollTrigger.create({
      trigger: ".banner",
      pin: true,
      start: "top top",
      end: "+=400", //+=500
      // markers: true,
    });

    let bannerItems = gsap.timeline();

    bannerItems
      .to(".banner__list", {
        y: "-60%",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".banner__list",
          start: "top top",
          end: "+=200 top",
          pin: true,
          scrub: 1,
          markers: true,
        },
      })
      .to("#banner__item-1", {
        x: -10,
        y: 30,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-2", {
        x: 40,
        y: -50,
        rotation: 12,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-3", {
        x: 120,
        y: -80,
        rotation: -16,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-4", {
        x: -70,
        y: -70,
        rotation: 9,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-5", {
        x: 60,
        y: -80,
        rotation: -10,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-6", {
        x: -130,
        y: -10,
        rotation: -6,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-7", {
        x: -150,
        y: -140,
        rotation: 6,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      })
      .to("#banner__item-8", {
        x: -20,
        y: 40,
        rotation: 4,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "300",
          pin: true,
          scrub: 0.5,
          // markers: true,
        },
      });
  });
  mm.add("(max-width: 768px)", () => {
    ScrollTrigger.create({
      trigger: ".banner",
      pin: true,
      start: "top top",
      end: "+=300",
      markers: true,
    });
    let bannerItems = gsap.timeline();
    bannerItems
      .to(".banner__list", {
        y: "-6%",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".banner__list",
          start: "top top",
          end: "+=100 top",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      })
      .to("#banner__item-1", {
        x: 35,
        y: -70,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "200",
          pin: true,
          scrub: 0.5,
        },
      })
      .to("#banner__item-4", {
        x: -30,
        y: -40,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "200",
          pin: true,
          scrub: 0.5,
        },
      })
      .to("#banner__item-6", {
        x: 20,
        y: -10,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          start: "100",
          end: "200",
          pin: true,
          scrub: 0.5,
        },
      });
  });

  // ScrollTrigger.create({
  //   trigger: ".banner",
  //   pin: true,
  //   start: "top top",
  //   end: "+=600", //+=500
  //   markers: true,
  // });

  // let bannerItems = gsap.timeline();
  // bannerItems
  //   .to(".banner__list", {
  //     y: -540, //x、y 移動位置
  //     duration: 2, //秒數
  //     ease: "none", //動畫效果
  //     scrollTrigger: {
  //       trigger: ".banner__list", //觸發得物件
  //       start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
  //       end: "+=200 top", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=200)
  //       pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
  //       scrub: 1, // 是否要啟用滾動動畫，true/false，數字為延遲幾秒
  //       markers: true,
  //     },
  //   })
  //   .to("#banner__item-1", {
  //     x: -10,
  //     y: 30,
  //     duration: 0.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "100",
  //       end: "300",
  //       pin: true,
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   })
  //   .to("#banner__item-2", {
  //     x: 40,
  //     y: -50,
  //     rotation: 12,
  //     duration: 0.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "100",
  //       end: "300",
  //       pin: true,
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   })
  //   .to("#banner__item-3", {
  //     x: 120,
  //     y: -80,
  //     rotation: -16,
  //     duration: 0.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "100",
  //       end: "300",
  //       pin: true,
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   })
  //   .to("#banner__item-4", {
  //     x: -70,
  //     y: -70,
  //     rotation: 9,
  //     duration: 0.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "100",
  //       end: "300",
  //       pin: true,
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   })
  //   .to("#banner__item-5", {
  //     x: 60,
  //     y: -80,
  //     rotation: -10,
  //     duration: 0.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "100",
  //       end: "300",
  //       pin: true,
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   })
  //   .to("#banner__item-6", {
  //     x: -130,
  //     y: -10,
  //     rotation: -6,
  //     duration: 0.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "100",
  //       end: "300",
  //       pin: true,
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   })
  //   .to("#banner__item-7", {
  //     x: -150,
  //     y: -140,
  //     rotation: 6,
  //     duration: 0.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "100",
  //       end: "300",
  //       pin: true,
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   })
  //   .to("#banner__item-8", {
  //     x: -20,
  //     y: 40,
  //     rotation: 4,
  //     duration: 0.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "100",
  //       end: "300",
  //       pin: true,
  //       scrub: 0.5,
  //       // markers: true,
  //     },
  //   });
});
// onUnmounted(() => {
//   // 把 ScrollTrigger 綁定的動畫消除
//   bannerItems.kill();
//   // 消除綁定 MatchMedia();
//   ScrollTrigger.clearMatchMedia();
// });
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: auto;
  margin-bottom: 120px;

  @include pad-1024() {
    height: 100vh;
  }

  @include pad-768() {
    height: auto;
    margin-bottom: 40px;
  }

  &__title {
    position: absolute;
    width: 100%;
    top: 49%;
    z-index: 4;
    font-size: 120px;
    line-height: 180px;
    font-family: "Noto Serif TC", serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: $primary-default;
    text-align: center;

    strong {
      display: inline-block;
      margin: 0 6%;
    }
    @include desktop-1440() {
      top: 50%;
      font-size: calc(32px + 5vw);
      line-height: calc(42px + 5vw);

      strong {
        display: inline-block;
      }
    }
    @include pad-768() {
      top: 17%;

      strong {
        display: block;
      }
    }
    @include phone-375() {
      font-size: 48px;
      line-height: 72px;
    }
  }
  &__subtitle {
    position: absolute;
    width: 40%;
    top: 67%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 5;
    color: $primary-default;
    text-align: center;

    strong {
      display: inline-block;
      text-align: center;
      margin: 0 10px;
    }
    &-ch {
      font-family: "Noto Serif TC", serif;
      font-size: 48px;
      line-height: 70px;
      letter-spacing: 1px;
      font-weight: 700;
    }
    &-en {
      font-family: "Gaegu", sans-serif;
      font-size: 58px;
      line-height: 70px;
      letter-spacing: 1px;
      font-weight: 400;
    }

    @include desktop-1280() {
      width: 90%;

      &-ch {
        font-size: calc(18px + 4vw);
        line-height: calc(32px + 5vw);
      }
      &-en {
        font-size: calc(18px + 5vw);
        line-height: calc(32px + 5vw);
      }
    }

    @include pad-768() {
      width: 90%;
      top: 50%;

      strong {
        display: block;
      }
      &-ch {
        font-size: calc(40px + 2vw);
        line-height: calc(60px + 2vw);
      }
      &-en {
        font-size: calc(48px + 2vw);
        line-height: calc(70px + 2vw);
      }
    }
    @include phone-375() {
      &-ch {
        font-size: 40px;
        line-height: 52px;
      }
      &-en {
        font-size: 48px;
        line-height: 52px;
      }
    }
  }
  &__cat {
    position: absolute;
    width: 45%;
    top: 9%;
    left: 35%;
    z-index: 2;

    @include pad-1024() {
      width: 70%;
      top: 26%;
      left: 18%;
    }

    @include pad-768() {
      width: 78%;
      top: 31%;
      left: 16%;
    }
  }
  &__list {
    position: absolute;
    width: 90%;
    height: 100%;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 3;
  }
  &__item {
    position: absolute;
    width: 19%;

    &#banner__item-1 {
      bottom: 1%;
      left: 2%;
      transform: rotate(3deg);
    }
    &#banner__item-2 {
      bottom: 2%;
      right: 22%;
      transform: rotate(14deg);

      @include pad-1024() {
        bottom: 6%;
        right: 20%;
      }
    }
    &#banner__item-3 {
      bottom: 8%;
      right: 14%;
      transform: rotate(6deg);

      @include pad-1024() {
        bottom: 10%;
        right: 6%;
      }
    }
    &#banner__item-4 {
      bottom: 9%;
      left: 15%;
      transform: rotate(-9deg);

      @include pad-1024() {
        bottom: 14%;
        left: 11%;
      }
    }
    &#banner__item-5 {
      bottom: 11%;
      right: 31%;
      transform: rotate(-10deg);

      @include pad-1024() {
        bottom: 14%;
      }
    }
    &#banner__item-6 {
      bottom: 5%;
      left: 25%;
      transform: rotate(-19deg);

      @include pad-1024() {
        bottom: 7%;
      }
    }
    &#banner__item-7 {
      bottom: 2%;
      left: 42%;
      transform: rotate(9deg);
    }
    &#banner__item-8 {
      bottom: 1%;
      right: 2%;
      transform: rotate(-3deg);
    }

    @include pad-1024() {
      width: 28%;
    }

    @include pad-768() {
      width: 93%;

      &#banner__item-1 {
        bottom: 12%;
        left: 7%;
        transform: rotate(-6deg);
        z-index: 3;
      }
      &#banner__item-4 {
        bottom: 5%;
        left: 8%;
        transform: rotate(3deg);
        z-index: 2;
      }
      &#banner__item-6 {
        bottom: -1%;
        left: 0%;
        transform: rotate(-3deg);
        z-index: 1;
      }

      &#banner__item-2,
      &#banner__item-3,
      &#banner__item-5,
      &#banner__item-7,
      &#banner__item-8 {
        opacity: 0;
        display: none;
      }
    }
  }

  &__bg {
    width: 100%;
    height: 100%;

    source {
      object-fit: cover;
      object-position: center center;
      width: 100%;
      height: 100%;
    }
    img {
      object-fit: cover;
      object-position: center center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
