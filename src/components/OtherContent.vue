<template>
  <div>
    <h2 v-if="boxNumber === 1">Nothing</h2>
    <h2 v-if="boxNumber === 2">To See</h2>
    <h2 v-if="boxNumber === 3">Here</h2>
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
