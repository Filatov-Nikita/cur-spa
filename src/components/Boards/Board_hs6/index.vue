<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="177"
      :t="159"
      :b="457"
      :r="177"
      :toPerc="['l']"
    >
      <board-text-body
        offset="60px"
        icon="rupor"
        text="Виды СМИ, задействованные в профилактике пожаров"
        v-space-m:bottom="'308px'"
      />

      <div class="items">
        <div class="item" v-for="item in items" :key="item.text">
          <img
            :src="require('./icons/' + item.icon + '.svg')"
            :alt="item.text"
            class="tw-block tw-mx-auto"
            v-space-m:bottom="'134px'"
          />
          <div class="slide-text-body tw-text-white">{{ item.text }}</div>
        </div>
      </div>
    </board-offsets>
  </board-cover>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'radio',
          text: 'Радио',
        },
        {
          icon: 'tv',
          text: 'Телевидение',
        },
        {
          icon: 'soc',
          text: 'Социальные сети',
        },
        {
          icon: 'notify',
          text: 'Системы оповещения',
        },
      ],
    };
  },
};
</script>

<style scoped>
.items {
  @apply tw-flex;
  margin: 0 -177px;
}

.item {
  @apply tw-w-1/4 tw-text-center;
  padding: 0 177px;
}
</style>
