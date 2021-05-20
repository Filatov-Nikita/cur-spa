<template functional>
  <video
    class="video"
    muted
    autoplay
    loop
    playsinline
    :src="props.src"
    poster="~assets/bg-main.jpg"
  ></video>
</template>

<script>
export default {
  name: 'PresentationVideoBackground',
  props: {
    src: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.video {
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background: #00092e;
  top: 0;
  left: 0;
  z-index: -9999;
}
</style>
