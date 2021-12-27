<template>
  <div class="cover">
    <div class="title">
      <h1 class="title-h1">
        {{ success ? 'Отлично' : 'Восстановление пароля' }}
      </h1>
    </div>

    <div class="success" v-if="success">
      <ValidIcon style="width:96px" valid class="tw-mx-auto tw-mb-6" />
      <div>Пароль успешно восстановлен</div>
    </div>
    <div class="wrapper tw-text-center" v-else>
      <ValidationObserver slim v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(finish)" class="login-form">
          <AppInput2
            rules="required|confirmed:confirmation"
            v-model="newPass"
            type="password"
            label="Новый пароль"
          />
          <AppInput2
            vid="confirmation"
            v-model="confirmPass"
            label="Подтверждение пароля"
            type="password"
          />
          <AppButton2 class="login-btn" label="Войти" type="submit" />
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import ValidIcon from 'src/components/ValidIcon';

export default {
  data() {
    return {
      success: false,
      newPass: '',
      confirmPass: '',
    };
  },
  methods: {
    finish() {
      this.success = true;
    },
  },
  components: {
    ValidIcon,
  },
};
</script>
<style scoped lang="scss">
//$
.title {
  @apply tw-bg-blue;
}
.title-h1 {
  @apply tw-font-bold tw-text-center;
}
.cover {
  background: rgba(0, 7, 47, 0.5);
  border: 1px solid #ffffff;
  backdrop-filter: blur(20px);
}
.wrapper {
  margin: 0 auto;
}

.success {
  text-align: center;
  color: #f6f6f6;
  @apply tw-text-center;
}

.title {
  padding: convertValues(55px 10px);
}

.title-h1 {
  font-size: convertValues(48px);
}
.wrapper {
  max-width: convertValues(624px);
  padding: convertValues(123px 0 111px);
}

.login-form {
  margin-top: convertValues(-58px);
  margin-bottom: convertValues(30px);
}
.login-form > * {
  margin-top: convertValues(58px);
}

.login-form .login-check {
  margin-top: convertValues(38px);
}

.login-form .login-btn {
  margin-top: convertValues(78px);
}
.success {
  padding: convertValues(63px 174px);
  font-size: convertValues(36px);
}

</style>
