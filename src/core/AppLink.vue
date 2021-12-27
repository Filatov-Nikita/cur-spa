<script>
import Vue from 'vue';
const RouterLink = Vue.options.components.RouterLink;

export default {
  props: {
    ...RouterLink.extendOptions.props,
  },
  render(h) {
    return h(
      'router-link',
      {
        props: this.$props,
        class: 'app-link',
      },
      this.$slots.default
    );
  },
};
</script>

<style lang="scss" scoped>//$
.app-link {
  text-decoration-line: underline;
  color: #019cd9;
}
  .app-link {
    font-size: convertValues(30px);
  }

</style>
