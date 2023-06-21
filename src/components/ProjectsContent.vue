<template>
  <div>
    <h2 v-if="boxNumber === 1">Coding Project 1</h2>
    <h2 v-if="boxNumber === 2">Coding Project 2</h2>
    <h2 v-if="boxNumber === 3">Coding Project 3</h2>
    <p v-if="boxNumber === 1"></p>
    <p v-if="boxNumber === 2"></p>
    <p v-if="boxNumber === 3"></p>
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
