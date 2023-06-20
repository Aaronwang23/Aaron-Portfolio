<template>
  <div>
    <h2 v-if="boxNumber === 1">
      Learner
      <img src="~@//assets/learner.jpg" />
    </h2>
    <h2 v-if="boxNumber === 2">
      Goal-Oriented<img src="~@//assets/goal.jpg" />
    </h2>
    <h2 v-if="boxNumber === 3">
      Math Background<img src="~@//assets/math.jpg" />
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    boxNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
