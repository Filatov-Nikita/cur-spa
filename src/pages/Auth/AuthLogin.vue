<template>
  <div class="cover">
    <div class="title">
      <h1 class="title-h1">Авторизация</h1>
    </div>

    <div class="wrapper tw-text-center">
      <ValidationObserver slim v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(login)" class="login-form">
          <AppInput2
            rules="required"
            v-model="email"
            type="email"
            label="E-mail"
          />
          <AppInput2
            rules="required"
            v-model="password"
            label="Пароль"
            type="password"
          />
          <AppCheckbox2
            class="login-check"
            label="Запоминать логин и пароль"
            v-model="remember"
          />
          <AppButton2 class="login-btn" label="Войти" type="submit" />
        </form>
      </ValidationObserver>
      <AppLink :to="{ name: 'auth.confirm-email' }">Забыли пароль?</AppLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      remember: false,
    };
  },
  methods: {
    login() {
      const res = this.testAttempt(this.email, this.password);
      if (res) {
        localStorage.setItem('auth', true);
        this.$router.push({ name: 'first' });
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Неверный логин или пароль',
        });
      }
    },
    testAttempt(email, password) {
      return email === 'admin@cur-rb.ru' && password === '296270';
    },
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
</style>
