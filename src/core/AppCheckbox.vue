<script>
import { ValidationProvider } from 'vee-validate';
import CheckboxMark from './CheckboxMark';

const providerProps = ValidationProvider.extendOptions.props;

export default {
  props: {
    label: {
      required: true,
      type: String,
    },
    value: {
      default: false,
      type: Boolean,
    },
    ...providerProps,
  },
  render(h) {
    const { _uid: id, label, value } = this;
    const self = this;

    async function onClick(_props) {
      const newVal = !value;

      _props.validate(newVal ? '1' : '');

      self.$emit('input', newVal);
    }

    function createLabel(props) {
      return h(
        'label',
        {
          class: 'label',
          attrs: { for: id },
          on: {
            click: onClick.bind(null, props),
          },
        },
        label
      );
    }

    function createCheckbox(props) {
      return h(
        'div',
        {
          class: 'app-input',
          attrs: { role: 'checkbox', id },
          on: {
            click: onClick.bind(null, props),
            mousedown(e) {
              e.preventDefault();
            },
          },
        },
        [
          value
            ? h(CheckboxMark, {
                class: 'app-checkbox-mark',
                props: { color: '#08E193', stroke: 5 },
              })
            : null,
        ]
      );
    }

    const providerPropsValues = Object.keys(providerProps).reduce(
      (acc, item) => {
        acc[item] = this[item];
        return acc;
      },
      {}
    );

    return h('ValidationProvider', {
      props: { ...providerPropsValues, slim: true },
      ref: 'provider',
      scopedSlots: {
        default(props) {
          return h(
            'div',
            {
              class: [
                'app-checkbox',
                { 'app-checkbox-invalid': props.invalid },
              ],
            },
            [createLabel(props), createCheckbox(props)]
          );
        },
      },
    });
  },
  components: {
    CheckboxMark,
  },
};
</script>

<style lang="scss" scoped>
//$
.app-checkbox {
  display: flex;
  align-items: center;
}

.app-checkbox-invalid .label {
  color: theme('colors.negative');
}

.app-checkbox-invalid .app-input {
  border-color: theme('colors.negative');
}
.app-input {
  border: 2px solid #f6f6f6;
  position: relative;
  cursor: pointer;
  order: -1;

  @include to($FHD) {
    border-width: 1px;
  }
}

.app-checkbox-mark {
  position: absolute;
  left: 50%;
  top: 50%;
}

.label {
  color: #f6f6f6;
}

.app-input {
  width: convertValues(30px);
  height: convertValues(30px);
  margin-right: convertValues(32px);
}

.app-checkbox-mark {
  transform: translateX(-50%) translateY(-50%);
  width: convertValues(21px);
  height: convertValues(16px);
}

.label {
  font-size: convertValues(26px);
  padding-top: convertValues(12px);
  padding-bottom: convertValues(12px);
}
</style>
