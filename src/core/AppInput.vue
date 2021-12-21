<script>
import Eye from './Eye';
import ValidIcon from 'src/components/ValidIcon.vue';
import { ValidationProvider } from 'vee-validate';

const providerProps = ValidationProvider.extendOptions.props;

export default {
  props: {
    type: {
      default: 'text',
      type: String,
    },
    value: {
      default: '',
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    hideValidStatus: {
      default: false,
      type: Boolean,
    },
    ...providerProps,
  },
  computed: {
    isPassword() {
      return this.type === 'password';
    },
    isEmail() {
      return this.type === 'email';
    },
  },
  data() {
    return { showPassword: false };
  },
  render(h) {
    const {
      type,
      _uid: id,
      value,
      isPassword,
      isEmail,
      label: labelText,
    } = this;
    const self = this;

    let currentType = type;
    if (isPassword && this.showPassword) {
      currentType = 'text';
    }

    function createInput({ valid, validated, invalid }) {
      return h('input', {
        attrs: { type: currentType, id },
        class: {
          'app-input-valid': valid && validated,
          'app-input-invalid': invalid && validated,
        },
        domProps: {
          value,
        },
        on: {
          input(e) {
            self.$emit('input', e.target.value);
          },
        },
      });
    }

    function createLabel(_props) {
      return h(
        'label',
        {
          class: ['app-input-label', { dirty: value.length }],
          attrs: { for: id },
        },
        labelText
      );
    }

    function createEye() {
      return h(Eye, {
        props: { fill: self.showPassword ? '#ffffff' : '#D1D1D1' },
        class: 'password-eye',
        nativeOn: {
          click() {
            self.showPassword = !self.showPassword;
          },
        },
      });
    }

    function createValidIcon({ valid }) {
      return h('div', { class: 'valid-icon' }, [
        h(ValidIcon, { props: { valid } }),
      ]);
    }

    function createErrorMessage({ textError }) {
      return h('div', { class: 'text-error' }, textError);
    }

    const providerPropsValues = Object.keys(providerProps).reduce(
      (acc, item) => {
        acc[item] = this[item];
        return acc;
      },
      {}
    );

    let rules = providerPropsValues.rules;
    if (isEmail) {
      if (typeof rules === 'string') rules += '|email';
      else if (typeof rules === 'object') {
        rules = { ...rules, email: true };
      }
    }

    const providerOpt = {
      class: 'app-input',
      props: {
        ...providerPropsValues,
        rules,
        tag: 'div',
        name: this.name ? this.name : this.label.toLowerCase(),
      },
      scopedSlots: {
        default(props) {
          return [
            h('div', { class: 'app-input-wrapper' }, [
              createInput(props),
              createLabel(props),
              isPassword ? createEye() : null,
              props.dirty && !self.hideValidStatus
                ? createValidIcon(props)
                : null,
              props.errors.length
                ? createErrorMessage({ textError: props.errors[0] })
                : null,
            ]),
          ];
        },
      },
    };

    const provider = h('ValidationProvider', providerOpt);

    return provider;
  },
  components: {
    Eye,
    ValidIcon,
  },
};
</script>

<style scoped lang="scss">
//$
$color: #f6f6f6;

$borderActive: 6px;
$inputPX: 27px;
$borderBlur: 2px;

.app-input {
  position: relative;
}

.app-input-wrapper {
  position: relative;
}

.app-input-invalid {
  border-color: theme('colors.negative') !important;
}

.app-input input:focus,
.app-input .app-input-valid:focus {
  border-color: #08e193;
}
.app-input input {
  display: block;
  width: 100%;
  background: transparent;
  border: $borderBlur solid $color;
  @include to($FHD) {
    border-width: 1px;
  }
}
.app-input-label {
  position: absolute;
  transition: top 0.3s;
}
.app-input-label,
.app-input input {
  color: $color;
}
.app-input input:focus,
.app-input .app-input-invalid {
  border-style: solid;
}

.password-eye,
.valid-icon {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
}

.password-eye {
  cursor: pointer;
  transition: fill 0.2s;
}
.text-error {
  position: absolute;
  bottom: 0;
  width: 100%;
  @apply tw-text-negative tw-leading-none;
}

.app-input {
  padding-bottom: convertValues(40px);
}
.app-input input {
  padding: convertValues(24px $inputPX 18px);
  font-size: convertValues(30px);
}
.app-input-label {
  top: convertValues(24px);
  left: convertValues($inputPX);
}
.app-input input:focus,
.app-input .app-input-invalid {
  border-width: convertValues($borderActive);
  padding: convertValues(24px $inputPX - ($borderActive - $borderBlur) 18px);
}

.app-input input:focus + .app-input-label,
.dirty {
  top: convertValues(12px);
  font-size: convertValues(16px);
}
.app-input input {
  height: convertValues(100px);
  padding: convertValues(24px 27px 18px);
  font-size: convertValues(30px);
}

.app-input-label {
  font-size: convertValues(40px);
  top: convertValues(24px);
  left: convertValues(27px);
}

.app-input input:focus {
  border: convertValues(6px) solid #08e193;
  padding: convertValues(24px 23px 18px);
}

.app-input input:focus + .app-input-label,
.dirty {
  top: convertValues(12px);
  font-size: convertValues(16px);
}

.password-eye {
  right: convertValues(25px);
  width: convertValues(50px);
  height: convertValues(30px);
}

.correct {
  right: convertValues(-82px);
}

.valid-icon {
  right: convertValues(-82px);
  width: convertValues(48px);
}

.text-error {
  transform: translateY(100%);
  font-size: convertValues(24px);
  padding: convertValues(8px);
}
</style>
