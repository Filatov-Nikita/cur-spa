<template>
  <button class="link" v-on="$listeners">
    <img class="icon" :src="require('./menu.svg')" alt="" />
    <div>Выбрать доклад</div>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  display: block;
  padding-left: 42px;
  padding-bottom: 33px;
  padding-top: 25px;
  padding-right: 26px;
  background: rgba(0, 9, 46, 0.77);
  border: 1px solid #ffffff;
  font-size: 50px;
  line-height: 65px;
  max-width: 569px;
  @apply tw-font-pt-sans tw-underline tw-text-white tw-flex tw-items-center;
}

.icon {
  margin-right: 47px;
}
</style>
