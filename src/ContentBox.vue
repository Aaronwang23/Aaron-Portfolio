<template>
  <div
    class="box"
    :class="{ expanded: isExpanded }"
    @mouseover="expandBox"
    @mouseleave="collapseBox"
  >
    <div class="content">
      <transition name="fade" mode="out-in" :key="contentKey">
        <slot></slot>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      contentKey: 0,
    };
  },
  methods: {
    expandBox() {
      this.isExpanded = true;
    },
    collapseBox() {
      this.isExpanded = false;
    },
    updateContent() {
      // Increment the contentKey to trigger fade-in transition
      this.contentKey++;
    },
  },
  watch: {
    // Watch for changes in slot content and trigger update
    $slots: {
      immediate: true,
      handler() {
        this.updateContent();
      },
    },
  },
};
</script>

<style scoped>
.box {
  width: 20%;
  height: 20%;
  background-color: rgb(255, 255, 255);
  transition: width 0.3s, height 0.3s, box-shadow 0.3s;
  box-shadow: none;
  border: 12px solid transparent;
  border-radius: 4px;
  margin-bottom: 15em;
}

.expanded {
  width: 40%;
  height: 70%;
}

.content {
  max-height: 90%;
  overflow: hidden;
  word-wrap: break-word;
  color: #29123d;
}

.box:hover {
  box-shadow: 0 0 10px 2px rgba(217, 255, 0, 0.692);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
