<script>
export default {
  props: {
    label: {
      default: undefined,
      type: String,
    },
    type: {
      default: 'submit',
      type: String,
    },
  },
  render(h) {
    const { type } = this;

    return h(
      'button',
      { class: 'app-button app-button-default', attrs: { type } },
      [this.label ? this.label : this.$slots.default]
    );
  },
};
</script>
<style lang="scss" scoped>//$
.app-button {
  background: #00b574;
  transition: background-color, 0.1s;
  @apply tw-text-center 
}

.app-button:hover {
  background: #00a569;
}

.app-button:active {
  background: #017449;
}

.app-button-default {
  display: block;
  width: 100%;
}

  .app-button {
    padding: convertValues(15px 23px);
    font-size: convertValues(40px);
  }

</style>
