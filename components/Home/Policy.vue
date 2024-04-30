<template>
  <section class="section policy">
    <div class="container max-container">
      <div class="policy__row">
        <div class="policy__col policy__content">
          <div
            class="policy__content-wrap"
            :id="`policy__content-${item.id}`"
            v-for="item in data.policy"
            :key="item.id"
          >
            <div class="policy__noImg">
              <img :src="img.imagesPng[item.no_images]" :alt="item.no" />
            </div>
            <div class="policy__focus">
              <h2 class="policy__focus-title">{{ item.no }}</h2>
              <h3 class="policy__focus-subTitle">
                {{ item.no_text }}
              </h3>
            </div>
            <ul class="policy__list">
              <li
                class="policy__item"
                v-for="i in item.content"
                :key="i.number"
              >
                <h4 class="policy__item-title">{{ i.number }} {{ i.title }}</h4>
                <p class="policy__item-text">
                  {{ i.text }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="policy__col policy__swiper">
          <div class="policy__swiper-wrap">
            <div class="policy__swiper-img" id="swiper-img-1">
              <img
                src="@/assets/images/policy-1.png"
                alt="01-設立寵物醫療基金"
                title="01-設立寵物醫療基金"
              />
            </div>
            <div class="policy__swiper-img" id="swiper-img-2">
              <img
                src="@/assets/images/policy-2.png"
                alt="02-提供醫療補助"
                title="02-提供醫療補助"
              />
            </div>
            <div class="policy__swiper-img" id="swiper-img-3">
              <img
                src="@/assets/images/policy-3.png"
                alt="03-合作動物醫院"
                title="03-合作動物醫院"
              />
            </div>
          </div>
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

// onMounted(() => {
//   ScrollTrigger.create({
//     trigger: ".news__swiper",
//     pin: true,
//     start: "-100 top",
//     end: "+=2000", //+=1000"
//     scrub: true,
//     markers: true,
//     animation: gsap
//       .timeline()
//       .to("#news-item-1", {
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         ease: "power1.out",
//       })
//       .to(
//         "#news-img-1",
//         {
//           opacity: 1,
//           duration: 1,
//           ease: "power1.out",
//         },
//         "<"
//       )
//       .to("#news-item-1", {
//         opacity: 0.5,
//         scale: 0.9,
//         duration: 1,
//         delay: 2,
//         ease: "power1.out",
//       })
//       .to(
//         "#news-img-1",
//         {
//           opacity: 0,
//           duration: 1,
//           delay: 2,
//           ease: "power1.out",
//         },
//         "<"
//       )
//       .to("#news-item-2", {
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         ease: "power1.out",
//       })
//       .to(
//         "#news-img-2",
//         {
//           opacity: 1,
//           duration: 1,
//           ease: "power1.out",
//         },
//         "<"
//       )
//       .to("#news-item-2", {
//         opacity: 0.5,
//         scale: 0.9,
//         duration: 1,
//         delay: 2,
//         ease: "power1.out",
//       })
//       .to(
//         "#news-img-2",
//         {
//           opacity: 0,
//           duration: 1,
//           delay: 2,
//           ease: "power1.out",
//         },
//         "<"
//       )
//       .to("#news-item-3", {
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         ease: "power1.out",
//       })
//       .to(
//         "#news-img-3",
//         {
//           opacity: 1,
//           duration: 1,
//           ease: "power1.out",
//         },
//         "<"
//       ),
//   });
// });
</script>

<style lang="scss" scoped>
.policy {
  position: relative;
  background-color: $primary-default;
  border-radius: 0 0 calc(20px + 10vw) calc(20px + 10vw);
  padding-bottom: 4vw;
  margin-bottom: 6vw;
  overflow: hidden;

  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11% 0 4%;
  }
  &__content {
    position: relative;
    width: 40%;
    margin: 0 2%;

    #policy__content-2 {
      position: absolute;
      width: 100%;
      height: auto;
      top: 0;
      left: 0;
    }
    #policy__content-3 {
      position: absolute;
      width: 100%;
      height: auto;
      top: 0;
      left: 0;
    }
  }
  &__noImg {
    position: absolute;
    width: 140%;
    height: auto;
    top: -23%;
    left: -25%;
  }
  &__focus {
    margin-bottom: 90px;

    &-title {
      font-family: "Noto Sans TC", sans-serif;
      font-size: calc(28px + 1vw);
      line-height: calc(28px + 1vw);
      text-align: left;
      margin-bottom: 1vw;
      color: $secondary-dark;
    }
    &-subTitle {
      color: $secondary-dark;
    }
  }
  &__list {
    color: $white;
  }
  &__item {
    margin-bottom: 60px;

    &-title {
      font-family: "Noto Sans TC", sans-serif;
      font-size: calc(20px + 0.3vw);
      line-height: calc(22px + 0.3vw);
      font-weight: 600;
      letter-spacing: 2px;
      margin-bottom: 16px;
    }
  }
  &__swiper {
    position: relative;
    width: 40%;
    height: 100%;
    // overflow: hidden;

    &-wrap {
      position: absolute;
      width: 100%;
      height: auto;
      top: 0%;
      right: 0%;
      transform: translate(0, -20%) rotate(8deg);
    }
    &-img {
      position: relative;
      margin: 6% 4%;
      opacity: 0.6;

      &#swiper-img-1 {
        opacity: 1;
        right: 50px;
      }
    }
  }
}
</style>
