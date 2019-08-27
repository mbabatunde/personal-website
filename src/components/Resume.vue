<template>
  <div class="resume">
      <h1>{{ name }}</h1>
      <iframe src="https://drive.google.com/file/d/1RGJnZ6EqAeWG8I7NGyMfxzLJP6WvQvsf/preview" width="700" height="640"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      msg: 'Will be making an interactive resume',
    };
  },
  methods: {
    // resizeIframe(obj) {
    //   obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    // },
  },
};
</script>

<style scoped>
h1 {
    margin-top: 5%;
}
</style>
