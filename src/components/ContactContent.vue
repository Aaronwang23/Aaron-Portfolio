<template>
  <div>
    <h2 v-if="boxNumber === 1">Email</h2>
    <h2 v-if="boxNumber === 2">Phone</h2>
    <h2 v-if="boxNumber === 3">Social Media</h2>
    <p v-if="boxNumber === 1">Aaronwang23@gmail.com</p>
    <p v-if="boxNumber === 2">000-000-0000</p>
    <p v-if="boxNumber === 3">
      <a
        href=" https://www.linkedin.com/in/aaron-wang-277456a6/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
      </a>
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
