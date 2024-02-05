<template>
  <HeaderComponent />
  <router-view></router-view>
  <TopBottomComponent />

  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import TopBottomComponent from "./components/TopBottomComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    TopBottomComponent,
    FooterComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap");

@font-face {
  font-family: "yg-jalnan";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

div,
body,
a {
  font-family: yg-jalnan;
}

.page-content {
  padding-top: 160px;
}
</style>
