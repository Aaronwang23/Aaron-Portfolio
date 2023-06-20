<template>
  <div>
    <h2 v-if="boxNumber === 1">About Me</h2>
    <h2 v-if="boxNumber === 2">Software Development</h2>
    <h2 v-if="boxNumber === 3">Goals</h2>
    <p v-if="boxNumber === 1">
      My name is Aaron Wang and this is my portfolio. I've spent most of my time
      in ReactLand and only heard of Vue. After researching more about Vue, it
      sounded promising and I decided to dip my toes in it by creating this
      portfolio. If I had all the free time I would try many projects like this
      but, with a family, time can be hard to come by. I have many side projects
      out of interest and hobby rather than keeping up with the industry. I
      would like to find my place in the industry as most of my experience is
      front-end focused. Working with people and working together to deliver the
      product of our best efforts excites me and I hope that for everyone else
      as well.
    </p>
    <p v-if="boxNumber === 2">
      Software Engineer since 2020, mainly React and Node Javascript
      professionally for the front-end. Experience in Groovy and Java for the
      back-end. Not tied to one language, framework, or development style. Have
      had the experience and appreciated aspects of full collaboration and
      siloed work. Always learning and utilizing new tools. I welcome criticism
      and push encouragement.
    </p>
    <p v-if="boxNumber === 3">
      Currently honing my skills with Vue 3 and other front-end frameworks to
      familiarize myself more with the industry. Other goal is to build projects
      with heavy back-end focus. Still learning architecture and keeping an ear
      open for best practices and new tools.
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
