<template>
  <div class="cover">
    <div class="title">
      <h1 class="title-h1">Подтверждение смены пароля</h1>
    </div>

    <div class="success" v-if="success">
      Ссылка для подтверждения отправлена на <strong>{{email}}</strong>. Перейдите
      по ссылке из письма в течение 3 дней
    </div>
    <div v-else class="wrapper tw-text-center">
      <div class="auth-caption">
        Введите свой электронный адрес и <br />
        мы отправим вам ссылку для восстановления доступа к аккаунту
      </div>
      <ValidationObserver slim v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(getCode)" class="login-form">
          <AppInput2
            rules="required"
            v-model="email"
            type="email"
            label="E-mail"
          />
          <AppButton2
            class="login-btn"
            label="Получить ссылку для входа"
            type="submit"
          />
        </form>
      </ValidationObserver>
      <AppLink :to="{ name: 'auth.login' }">К форме авторизации</AppLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      success: false,
    };
  },
  methods: {
    getCode() {
      this.success = true;
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
.auth-caption {
  color: #f6f6f6;
  text-align: center;
  line-height: 1;
}

.success {
  color: #F6F6F6;
  text-align: center;
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
  margin-bottom:convertValues(30px);
}

.login-form .login-btn {
  margin-top: convertValues(38px);
}

.auth-caption {
  font-size: convertValues(36px);
  margin-bottom: convertValues(58px);
  margin-left: convertValues(-38px);
  margin-right: convertValues(-38px);
}

.success {
  padding: convertValues(63px 78px 83px);
  font-size: convertValues(36px);
}


</style>
