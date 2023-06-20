<template>
  <body>
    <div class="page">
      <div class="header">
        <h1>AARON WANG PORTFOLIO</h1>
        <div class="line"></div>
      </div>
      <div class="app">
        <MenuBar @menu-click="handleMenuClick" />
        <Box>
          <component :is="selectedComponent" :box-number="1" />
        </Box>
        <Box>
          <component :is="selectedComponent" :box-number="2" />
        </Box>
        <Box>
          <component :is="selectedComponent" :box-number="3" />
        </Box>
      </div>
    </div>
  </body>
</template>

<script>
import Box from "./ContentBox.vue";
import MenuBar from "./MenuBar.vue";
import AboutContent from "./components/AboutContent.vue";
import ContactContent from "./components/ContactContent.vue";
import HomeContent from "./components/HomeContent.vue";
import OtherContent from "./components/OtherContent.vue";

export default {
  components: {
    Box,
    MenuBar,
    AboutContent,
    ContactContent,
    HomeContent,
    OtherContent,
  },
  data() {
    return {
      selectedComponent: "HomeContent",
    };
  },
  methods: {
    handleMenuClick(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60em;
}
.page {
  background-image: url("~@/assets/background.svg");
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
}
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.header {
  text-align: center;
  padding: 1rem 0;
}

h1 {
  font-size: 1.25em;
  color: #ffffff;
}

p {
  font-size: 1.25em;
  line-height: 2em;
}

.line {
  width: 70%;
  height: 0.05em;
  background: linear-gradient(to right, transparent, #ffffff, transparent);
  margin: 0.15em auto;
}
</style>
