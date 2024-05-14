<template>
  <section class="section policy">
    <div class="container policy__container">
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
        <div class="policy__col policy__swiperPic">
          <div class="policy__swiperPic-wrap">
            <div class="policy__swiperPic-img" id="swiper-img-1">
              <img
                class="pic"
                id="pic-1"
                src="@/assets/images/policy-1.png"
                alt="01-設立寵物醫療基金"
                title="01-設立寵物醫療基金"
              />
            </div>
            <div class="policy__swiperPic-img" id="swiper-img-2">
              <img
                class="pic"
                id="pic-2"
                src="@/assets/images/policy-2.png"
                alt="02-提供醫療補助"
                title="02-提供醫療補助"
              />
            </div>
            <div class="policy__swiperPic-img" id="swiper-img-3">
              <img
                class="pic"
                id="pic-3"
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

      if (isMobile) {
        ScrollTrigger.create({
          id: "policyRow",
          trigger: ".policy__row",
          pin: true,
          start: "-100 top",
          end: "+=1800", //+=1000"
          scrub: 0.5,
          // markers: true,
          animation: gsap
            .timeline()
            .to("#policy__content-1", {
              left: 50,
              opacity: 0,
              duration: 0.5,
              ease: "power1.out",
              delay: 1,
            })
            .to(
              ".policy__swiperPic-wrap",
              {
                x: "-89vw",
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#policy__content-2",
              {
                left: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#policy__content-2",
              {
                left: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#pic-1",
              {
                opacity: 0.5,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#pic-2",
              {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to("#policy__content-2", {
              left: 50,
              opacity: 0,
              duration: 0.5,
              ease: "power1.out",
              delay: 1,
            })
            .to(
              ".policy__swiperPic-wrap",
              {
                x: "-175vw",
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#policy__content-3",
              {
                left: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#pic-2",
              {
                opacity: 0.5,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#pic-3",
              {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to("#pic-3", {
              delay: 2,
            }),
        });
      } else {
        ScrollTrigger.create({
          id: "policyRow",
          trigger: ".policy__row",
          pin: true,
          start: isWeb ? "-100 top" : "-200 top",
          end: "+=1800", //+=1000"
          scrub: 0.5,
          // markers: true,
          animation: gsap
            .timeline()
            .to("#policy__content-1", {
              left: 50,
              opacity: 0,
              duration: 1,
              ease: "power1.out",
              delay: 1,
            })
            .to(
              ".policy__swiperPic-wrap",
              {
                y: isWeb ? -230 : -200,
                opacity: 1,
                duration: 1,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#policy__content-2",
              {
                left: 0,
                opacity: 1,
                duration: 1,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#pic-1",
              {
                right: 0,
                opacity: 0.5,
                duration: 0.5,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#pic-2",
              {
                right: 50,
                opacity: 1,
                duration: 1,
                ease: "power1.out",
              },
              "<"
            )
            .to("#policy__content-2", {
              left: 50,
              opacity: 0,
              duration: 1,
              ease: "power1.out",
              delay: 1,
            })
            .to(
              ".policy__swiperPic-wrap",
              {
                y: isWeb ? -630 : -430,
                opacity: 1,
                duration: 1,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#policy__content-3",
              {
                left: 0,
                opacity: 1,
                duration: 1,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#pic-2",
              {
                right: 0,
                opacity: 0.5,
                duration: 1,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              "#pic-3",
              {
                right: 50,
                opacity: 1,
                duration: 1,
                ease: "power1.out",
              },
              "<"
            )
            .to("#pic-3", {
              delay: 2,
            }),
        });
      }
    }
  );
});
</script>

<style lang="scss" scoped>
.policy {
  position: relative;
  background-color: $primary-default;
  border-radius: 0 0 calc(40px + 8vw) calc(40px + 8vw);
  padding-bottom: 4vw;
  margin-bottom: 6vw;
  overflow: hidden;

  @include pad-768() {
    border-radius: 0 0 40px 40px;
    margin-bottom: 70px;
  }

  &__container {
    width: min(1400px, 90%);
  }

  &__row {
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 11% 0 11%;
    box-sizing: border-box;
    // overflow: hidden;

    @include pad-1024() {
      padding: 18% 0 12%;
    }
    @include pad-768() {
      padding: 50px 0 50px;
      flex-direction: column-reverse;
    }
  }
  &__col {
    box-sizing: border-box;
    margin: 0 4%;

    @include pad-768() {
      width: 100%;
      margin: 0% 0% 0%;
    }
  }
  &__content {
    position: relative;
    width: 42%;
    // margin: 0 4%;

    @include pad-768() {
      width: 100%;
      padding: 0% 0% 10%;
    }

    #policy__content-1 {
      position: relative;
    }

    #policy__content-2 {
      position: absolute;
      width: 100%;
      height: auto;
      top: 0px;
      left: -50px;
      opacity: 0;
    }
    #policy__content-3 {
      position: absolute;
      width: 100%;
      height: auto;
      top: 0px;
      left: -50px;
      opacity: 0;
    }
  }
  &__noImg {
    position: absolute;
    width: 130%;
    height: auto;
    top: -23%;
    left: -13%;

    @include pad-768() {
      top: -58%;
      left: 0%;
      width: 100%;
    }
  }
  &__focus {
    margin-bottom: 90px;

    &-title {
      font-family: "Noto Sans TC", sans-serif;
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      text-align: left;
      margin-bottom: 8px;
      color: $secondary-dark;
    }
    &-subTitle {
      color: $secondary-dark;
      font-size: 24px;
      line-height: 36px;
      font-weight: 700;
    }

    @include pad-768() {
      margin-bottom: 20px;

      &-title {
        font-size: 28px;
        line-height: 42px;
      }
      &-subTitle {
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
  &__list {
    box-sizing: border-box;
    color: $white;
  }
  &__item {
    box-sizing: border-box;
    margin-bottom: 60px;

    &-title {
      font-family: "Noto Sans TC", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      text-align: left;
      letter-spacing: 2px;
      margin-bottom: 16px;
    }
    &:last-child {
      margin-bottom: 0px;
    }

    @include pad-768() {
      margin-bottom: 16px;

      &-title {
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 10px;
      }
    }
  }
  &__swiperPic {
    position: relative;
    width: 38%;
    height: 100%;
    // overflow: hidden;

    &-wrap {
      position: absolute;
      width: 100%;
      height: auto;
      right: 0%;
      bottom: -100%;
      transform: rotate(8deg);
      opacity: 1;
    }
    &-img {
      position: relative;
      margin: 6% 4%;
      border-radius: 20px;
      background: $primary-default;

      .pic {
        position: relative;
        opacity: 0.5;
        border-radius: 20px;
        box-shadow: 6px 8px 0px 0px #fadca8;
        overflow: hidden;
      }

      #pic-1 {
        right: 50px;
        opacity: 1;
      }
    }

    @include pad-1024() {
      &-wrap {
        width: 130%;
        right: -40%;
        bottom: -32%;
      }
    }

    @include pad-768() {
      width: 220%;
      min-width: 220%;
      height: auto;

      &-wrap {
        position: relative;
        display: flex;
        transform: rotate(0deg);
        bottom: 8%;
        left: 30%;
      }
      &-img {
        margin: 2% 2%;
        transform: rotate(10deg);
        border-radius: 6px;

        .pic {
          border-radius: 6px;
          box-shadow: 6px 6px 0px 0px #fadca8;
        }
        #pic-1 {
          right: 0px;
        }
      }
    }

    @include phone-428() {
      &-wrap {
        left: 30%;
      }
    }
  }
}
</style>
