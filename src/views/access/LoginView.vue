<script setup lang="ts">
import router from '@/router'

function onRegister() {
  router.push('/access/register')
}

function onGuest() {
  console.log('guest')
  router.push('/home')
}
</script>

<template>
  <LoginComponent :show-register="true" @on-register="onRegister" @on-guest="onGuest" />
</template>

<style scoped></style>