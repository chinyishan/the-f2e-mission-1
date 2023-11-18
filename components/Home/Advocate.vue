<template>
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
    <div class="vote-group">
      <img
        class="vote-bg"
        src="@/assets/images/vote-miao.png"
        alt="VOTA-MIAO"
      />
      <div class="vote-pic">
        <div class="vote-miao">
          <img src="@/assets/images/ballot-2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let voteMiao = gsap.timeline();
  voteMiao.to(".vote-miao", {
    y: 160,
    duration: 2.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".vote-miao",
      start: "-200 top",
      end: "+=250 top",
      pin: true,
      scrub: true,
      markers: true,
    },
  });
});
</script>

<style lang="scss" scoped>
.container {
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
  .vote-group {
    width: 100%;
    position: relative;

    .vote-bg {
      width: 80%;
    }
    .vote-pic {
      position: absolute;
      width: 100%;
      height: 136%;
      top: 0%;
      left: 0%;
      overflow: hidden;

      .vote-miao {
        width: 28%;
        margin: 0 auto;
      }
    }
  }
}
</style>
