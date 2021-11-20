<template>
  <div class="speaker" :class="`speaker-${size}`">
    <q-img :src="avatar.url" class="avatar" :class="`avatar-${size}`" />
    <div class="speakerData" :class="`speakerData-${size}`">
      <div class="container" :class="`container-${size}`">
        <div v-if="showLabel" class="label" v-space-m:bottom="'41px'">
          Докладчик:
        </div>
        <div class="name" :class="`name-${size}`">
          <!-- <div>Забелин Максим</div>
          <div>Васильевич</div> -->
          <div>{{ name }}</div>
        </div>
        <div class="position" :class="`position-${size}`">
          {{ position }}
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
    name: {
      required: true,
      type: String,
    },
    avatar: {
      required: true,
      type: Object,
    },
    position: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
//$
.label {
  line-height: convertValues(65px);
  font-size: convertValues(50px);
  @apply tw-font-pt-sans tw-text-white tw-underline;
}

.speaker {
  @apply tw-flex tw-items-center;
}

.speaker-md {
  max-width: convertValues(1172px);
}

.avatar {
  border: 6px solid #ffffff;
  border-radius: 50%;
  flex-shrink: 0;
}

.avatar-md {
  width: convertValues(220px);
  height: convertValues(220px);
  margin-right: convertValues(55px);
}

.avatar-lg {
  width: convertValues(447px);
  height: convertValues(447px);
  margin-right: convertValues(61px);
}

.name {
  line-height: 100%;
  @apply tw-font-roboto tw-font-bold tw-text-white;
}

.name-md {
  font-size: convertValues(50px);
  margin-bottom: convertValues(20px);
}

.name-lg {
  margin-bottom: convertValues(56px);
  font-size: convertValues(100px);
}

.position {
  opacity: 0.8;
  @apply tw-font-pt-sans tw-text-white;
}

.position-md {
  font-size: convertValues(28px);
  line-height: convertValues(36px);
}
.position-lg {
  font-size: convertValues(50px);
  line-height: convertValues(65px);
}

.speakerData-md::before {
  width: convertValues(20px);
  height: convertValues(20px);
  margin-right: convertValues(23px);
  margin-top: convertValues(20px);
}

.speakerData {
  @apply tw-flex tw-items-start;
}

.container-md {
  max-width: convertValues(785px);
  min-width: convertValues(785px);
}
</style>
