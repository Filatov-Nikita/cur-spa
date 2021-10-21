<template>
  <div class="menu-container">
    <div class="tw-text-right" :style="{'padding-right': $toRem('635px')}">
      <button
        :style="{'font-size': $toRem('30px')}"
        class="tw-inline-flex tw-items-center"
        @click="$emit('close')"
      >
        <div
          class="tw-underline tw-font-pt-sans tw-text-white"
          :style="{'margin-right': $toRem('30px')}"
        >
          закрыть
        </div>
        <img src="~/assets/icons/close.svg" class="close-icon"/>
      </button>
    </div>
    <ul class="items tw-z-50">
      <MainMenuItem
        v-for="(item, index) in items"
        :key="index"
        :index="index + 1"
        :icon="item.icon"
        :name="item.name"
        :to="item.to"
      />
    </ul>
  </div>
</template>

<script>
import MainMenuItem from './MainMenuItem';

export default {
  data() {
    return {
      items: [
        {
          name: 'Здравоохранение',
          icon: 'medical',
          to: { name: 'presentation', params: { type: 'medical' } },
        },
        {
          name: 'Жилищно-коммунальное хозяйство',
          icon: 'jil',
          to: { name: 'presentation', params: { type: 'hoz' } },
        },
        {
          name: 'Транспорт и дорожное хозяйство',
          icon: 'transport',
          to: { name: 'presentation', params: { type: 'transport' } },
        },
        {
          name: 'Чрезвычайные ситуации',
          icon: 'chs',
          to: { name: 'presentation', params: { type: 'situations' } },
        },
        // {
        //   name: 'Сельское хозяйство',
        //   icon: 'sel',
        //   to: { name: 'presentation', params: { type: 'sel' } },
        // },
      ],
    };
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
  max-width: convertValues(3330px);
  width: 100%;
  position: absolute;
  z-index: 20;
}

.close-icon {
  width: convertValues(67px);
  height: convertValues(67px);
}
</style>
