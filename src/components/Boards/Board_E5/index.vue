<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="177"
      :t="109"
      :b="57"
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
          <!-- <img
            :src="require('./icons/' + item.icon + '.svg')"
            :alt="item.text"
            class="img-size tw-block tw-mx-auto"
            v-space-m:bottom="'134px'"
          /> -->
          <q-icon
            size="16.06rem"
            :name="item.icon"
            color="positive"
            v-space-m:bottom="'134px'"
          ></q-icon>
          <div class="slide-text-body tw-text-white">{{ item.text }}</div>
        </div>
      </div>
    </board-offsets>
  </board-cover>
</template>

<script>

export default {
  // data() {
  //   return {
  //     items: [
  //       {
  //         icon: 'radio',
  //         text: 'Радио',
  //       },
  //       {
  //         icon: 'tv',
  //         text: 'Телевидение',
  //       },
  //       {
  //         icon: 'soc',
  //         text: 'Социальные сети',
  //       },
  //       {
  //         icon: 'notify',
  //         text: 'Системы оповещения',
  //       },
  //     ],
  //   };
  // },
    props: {
    type: {
      required: true,
      type: Object,
    },
  },
    computed:{
    items(){
      const {type}=this
      return [
        {
          icon: type.iconColumn1,
          text: type.textColumn1,
        },
        {
          icon: type.iconColumn2,
          text: type.textColumn2,
        },
        {
          icon: type.iconColumn3,
          text: type.textColumn3,
        },
        {
          icon: type.iconColumn4,
          text: type.textColumn4,
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
//$
.img-size {
  width: convertValues(257px);
  height: convertValues(257px);
}
.items {
  @apply tw-flex;
  margin: convertValues(0 -177px);
}

.item {
  @apply tw-w-1/4 tw-text-center;
  padding: convertValues(0 177px);
}
</style>
