<template>
  <div class="menu-container">
    <div class="tw-flex tw-flex-wrap menu-container__wrap">
      <q-space />
      <button
        :style="{ 'font-size': $toRem('30px') }"
        class="tw-inline-flex tw-items-center"
        @click="$emit('close')"
      >
        <div
          class="tw-underline tw-font-pt-sans tw-text-white"
          :style="{ 'margin-right': $toRem('30px') }"
        >
          закрыть
        </div>
        <img src="~/assets/icons/close.svg" class="close-icon" />
      </button>
      <ul class="items tw-z-50 tw-w-full">
        <MainMenuItem
          v-for="(item, index) in presentations"
          :key="index"
          :index="index + 1"
          :icon="item.icon"
          :name="item.name"
          :to="item.to"
          :speaker="item.speaker"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import MainMenuItem from "./MainMenuItem";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          name: "Здравоохранение",
          icon: "medical",
          to: { name: "presentation", params: { type: "medical" } },
        },
        {
          name: "Жилищно-коммунальное хозяйство",
          icon: "jil",
          to: { name: "presentation", params: { type: "hoz" } },
        },
        {
          name: "Транспорт и дорожное хозяйство",
          icon: "transport",
          to: { name: "presentation", params: { type: "transport" } },
        },
        {
          name: "Чрезвычайные ситуации",
          icon: "chs",
          to: { name: "presentation", params: { type: "situations" } },
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      slideData: "slideDataGetter",
    }),
    presentations() {
      const getItem = (item) => ({
        name: item.department.name,
        icon: item.department["menu_image"].url,
        speaker: {
          first_name: item.speaker["first_name"],
          last_name: item.speaker["last_name"],
        },
        to: {
          name: "presentation",
          params: { id: item.id, type: item.type, currentSlide: 0 },
        },
      });

      return this.slideData?.presentations.map(getItem) || [];
    },
  },
  components: {
    MainMenuItem,
  },
};
</script>

<style lang="scss" scoped>
//$

.items {
  @apply tw-flex tw-flex-wrap;
}

.menu-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  padding-bottom: 7rem;

  &__wrap {
    max-width: convertValues(3165px);
  }
}

.close-icon {
  width: convertValues(67px);
  height: convertValues(67px);
}
</style>
