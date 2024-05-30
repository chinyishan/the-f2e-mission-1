<template>
  <section class="section advocate" id="advocate">
    <div class="container">
      <h2 class="advocate__title">
        <strong class="advocate__title-ch">喵立翰</strong>
        <strong class="advocate__title-en">Miao Li-Han</strong>
      </h2>
      <div class="advocate__text">
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
      <h3 class="advocate__subtitle">
        讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始！
      </h3>
      <div class="advocate__vote">
        <img
          class="advocate__vote-bg"
          src="@/assets/images/vote-miao.png"
          alt="VoteMia"
        />
        <div class="advocate__vote-pic">
          <div class="advocate__vote-ballot">
            <img
              src="@/assets/images/ballot-2.png"
              alt="為喵立翰投下神聖一票"
              title="為喵立翰投下神聖一票"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let mm = gsap.matchMedia();

  mm.add(
    {
      isMobile: "(max-width: 768px)",
      isPad: "(min-width: 769px)",
      isWeb: "(min-width: 1025px)",
    },
    (context) => {
      let { isMobile, isPad, isWeb } = context.conditions;
      let vote = gsap.timeline();

      vote.to(".advocate__vote-ballot", {
        rotate: 30,
        y: isWeb ? 440 : isMobile ? 220 : 320,
        scrollTrigger: {
          trigger: ".advocate__vote-ballot",
          start: isMobile ? "-300 top" : "-200 top",
          end: isMobile ? "top top" : "200 top",
          duration: 1,
          ease: "power2.out",
          pin: false,
          scrub: true,
          // markers: true,
        },
      });
    }
  );
});
</script>

<style lang="scss" scoped>
.advocate {
  position: relative;
  padding-bottom: 130px;
  overflow: hidden;

  &__title {
    text-align: center;
    color: $primary-default;
    margin-bottom: 20px;

    strong {
      display: inline-block;
      text-align: center;
    }
    &-ch {
      font-family: "Noto Serif TC", serif;
      font-size: 48px;
      line-height: 70px;
      letter-spacing: 0.5px;
      font-weight: 700;
    }
    &-en {
      font-family: "Gaegu", sans-serif;
      font-size: 48px;
      line-height: 70px;
      letter-spacing: 0.5px;
      font-weight: 400;
    }
    @include pad-768() {
      font-size: calc(48px + 2vw);
      line-height: calc(72px + 4vw);

      strong {
        display: block;
      }
    }
  }
  &__text {
    margin-bottom: 20px;

    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: center;
      color: $black-1;
    }
    strong {
      color: $primary-default;
    }

    @include pad-768() {
      margin-bottom: 40px;

      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
  &__subtitle {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    text-align: center;
    color: $primary-default;
    margin-bottom: 50px;

    @include pad-768() {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 20px;
    }
  }
  &__vote {
    width: 100%;
    position: relative;

    &-bg {
      width: 80%;
    }
    &-pic {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0%;
      left: 0%;
    }
    &-ballot {
      width: 28%;
      height: auto;
      margin: 0 auto;
    }

    @include pad-768() {
      width: 120%;
      min-width: 120%;
      margin-left: -10%;

      &-ballot {
        width: 50%;
        height: auto;
        margin: 0 auto;
      }
    }
  }
}
</style>
