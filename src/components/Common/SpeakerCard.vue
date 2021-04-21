<template>
  <div class="speaker" :class="`speaker-${size}`">
    <q-img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/%28Sergey_Lavrov%29_2019_Comprehensive_Test-Ban_Treaty_Article_XIV_Conference_%2848832045357%29_%28cropped%29.jpg/1280px-%28Sergey_Lavrov%29_2019_Comprehensive_Test-Ban_Treaty_Article_XIV_Conference_%2848832045357%29_%28cropped%29.jpg"
      class="avatar"
      :class="`avatar-${size}`"
    />
    <div class="speakerData" :class="`speakerData-${size}`">
      <div class="container" :class="`container-${size}`">
        <div v-if="showLabel" class="label" v-space-m:bottom="'41px'">
          Докладчик:
        </div>
        <div class="name" :class="`name-${size}`">
          <div>Забелин Максим</div>
          <div>Васильевич</div>
        </div>
        <div class="position" :class="`position-${size}`">
          Министр Здравоохранения Республики Башкортостан
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLabel: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'md',
      type: String,
    },
  },
};
</script>

<style scoped>
.label {
  line-height: 65px;
  font-size: 50px;
  @apply tw-font-pt-sans tw-text-white tw-underline;
}

.speaker {
  @apply tw-flex tw-items-center;
}

.speaker-md {
  max-width: 1172px;
}

.avatar {
  border: 6px solid #ffffff;
  border-radius: 50%;
  flex-shrink: 0;
}

.avatar-md {
  width: 220px;
  height: 220px;
  margin-right: 55px;
}

.avatar-lg {
  width: 447px;
  height: 447px;
  margin-right: 61px;
}

.name {
  line-height: 100%;
  @apply tw-font-roboto tw-font-bold tw-text-white;
}

.name-md {
  font-size: 50px;
  margin-bottom: 20px;
}

.name-lg {
  margin-bottom: 56px;
  font-size: 100px;
}

.position {
  opacity: 0.8;
  @apply tw-font-pt-sans tw-text-white;
}

.position-md {
  font-size: 28px;
  line-height: 36px;
}
.position-lg {
  font-size: 50px;
  line-height: 65px;
}

.speakerData-md::before {
  width: 20px;
  height: 20px;
  margin-right: 23px;
  margin-top: 20px;
}

.speakerData {
  @apply tw-flex tw-items-start;
}

.container-md {
  max-width: 785px;
  min-width: 785px;
}
</style>
