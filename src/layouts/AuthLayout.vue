<template>
  <q-layout class="auth-layout">
    <q-page-container class="auth-container">
      <q-page class="auth-layout__center">
        <div class="logo">
          <img class="tw-mx-auto" src="~assets/logo.svg" alt="cur-logo" />
        </div>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
//$
.auth-layout {
  background: url('/images/main-map.jpg') no-repeat;
  background-size: cover;
}



.auth-layout__center {
  max-width: convertValues(947px);
  margin: 0 auto;
  padding-top: convertValues(177px);

}

.logo {
  margin-bottom: convertValues(192px);
}



</style>
