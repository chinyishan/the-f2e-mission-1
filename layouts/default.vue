<template>
  <div class="layouts-default">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "喵立翰 Miao Li-Han - 喵的未來，人的希望",
  ogTitle: "喵立翰 Miao Li-Han - 喵的未來，人的希望",
  description:
    "藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。",
  ogDescription:
    "藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。",
  ogImage: "/home.jpg",
});
</script>

<style lang="scss">
body {
  // background-image: url("@/assets/images/Web.jpg");
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
}
// #__nuxt {
//   opacity: 0.5;
//   height: 9000px;
// }
</style>
