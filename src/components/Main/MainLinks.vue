<template>
  <div class="items tw-relative">
    <router-link
      class="item"
      v-for="(item, index) in itemsMap"
      :key="item.type"
      :class="`item-${item.type}`"
      :to="item.to"
    >
      <div class="tw-flex tw-items-center item-container">
        <q-img
          :src="
            require('./main-icons/' +
              (item.type === 'medical' ? 'medical-big' : item.type) +
              '.svg')
          "
          class="img-size"
        />
        <div class="slide-text-caption">{{ item.name }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Здравоохранение',
          type: 'medical',
          to: { name: 'presentation', params: { type: 'medical' } },
        },
        {
          name: 'Жилищно-коммунальное хозяйство',
          type: 'hoz',
          to: { name: 'presentation', params: { type: 'hoz' } },
        },
        {
          name: 'Транспорт и дорожное хозяйство',
          type: 'transport',
          to: { name: 'presentation', params: { type: 'transport' } },
        },
        {
          name: 'Чрезвычайные ситуации',
          type: 'situations',
          to: { name: 'presentation', params: { type: 'situations' } },
        },
      ],
    };
  },
  computed: {
    itemsMap() {
      if (this.$route.name === 'home') {
        const to = { name: 'introduction' };
        return this.items.map((item) => ({ ...item, to }));
      }
      return this.items;
    },
  },
};
</script>

<style lang="scss" scoped>
//$
.item {
  position: relative;
  padding-bottom: convertValues(50px);
  @apply tw-w-1/4 tw-normal-case tw-block;
}

.img-size {
  width: convertValues(220px);
  height: convertValues(247px);
}
.item:first-child .item-container {
  padding-left: convertValues(50px);
}

.item-medical::after,
.item-hoz::after,
.item-situations::after,
.item-transport::after {
  content: '';
  display: block;
  width: 100%;
  height: convertValues(50px);
  position: absolute;
  bottom: 0;
}

.item-medical::after {
  background: theme('colors.negative');
}

.item-hoz::after {
  background: theme('colors.orange');
}

.item-situations::after {
  background: theme('colors.green');
}

.item-transport::after {
  background: theme('colors.blue');
}

.items {
  background: #00092e;
  display: flex;
  min-height: convertValues(297px);
}

.items::before {
  content: '';
  display: block;
  position: absolute;
  top: convertValues(-470px);
  z-index: 0;
  width: 100%;
  height: convertValues(589px);
  background: linear-gradient(180deg, #000a2e 0%, rgba(0, 18, 58, 0) 100%);
  transform: rotate(-180deg);
}
</style>
