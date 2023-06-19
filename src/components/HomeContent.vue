<template>
  <div>
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
