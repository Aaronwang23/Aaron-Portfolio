<template>
  <div class="menu-bar">
    <div class="menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="slide">
      <ul v-if="isMenuVisible" class="menu-items">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :style="animationDelay(index)"
        >
          <a href="#" @click="handleMenuItemClick(item)">
            {{ item }}
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
      menuItems: ["Home", "About", "Other", "Contact"],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    animationDelay(index) {
      return {
        "animation-delay": `${index * 250}ms`,
      };
    },
    handleMenuItemClick(item) {
      this.$emit("menu-click", item + "Content");
      this.isMenuVisible = false;
    },
  },
};
</script>

<style scoped>
.menu-bar {
  position: fixed;
  top: 1em;
  left: 1em;
  height: 60px;
  background-color: #f1f1f100;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.menu-toggle {
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 1.5rem;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 4px;
}

ul.menu-items {
  border-radius: 1px 10px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: right;
  position: absolute;
  font-size: 1.6em;
  top: 60px;
  left: 0;
  height: 100vw;
  color: #ccc;
  width: 40vw;
  background-color: #f1f1f100;
  overflow: hidden;
}

.menu-items a {
  color: inherit;
  text-decoration: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  animation: rollIn 0.5s forwards;
  opacity: 0;
  pointer-events: auto;
}

@keyframes rollIn {
  0% {
    transform: translateX(-200%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
