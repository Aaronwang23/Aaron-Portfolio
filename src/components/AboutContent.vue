<template>
  <div>
    <h2 v-if="boxNumber === 1">About Me</h2>
    <h2 v-if="boxNumber === 2">Software Development</h2>
    <h2 v-if="boxNumber === 3">Goals</h2>
    <p v-if="boxNumber === 1">My name is Aaron Wang and I love programming.</p>
    <p v-if="boxNumber === 2">
      I have been a Software Engineer for three years, I currently have mostly
      done work on the front end but have done work in the back end and exposed
      to some dev ops work.
    </p>
    <p v-if="boxNumber === 3">
      Currently honing my skills with Vue 3 and other front end frameworks to
      familiarize myself more with the industry.
    </p>
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
