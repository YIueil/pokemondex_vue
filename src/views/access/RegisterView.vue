<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function onLogin() {
  router.push('/access/login')
}
</script>

<template>
  <RegisterComponent @on-login="onLogin" />
</template>

<style scoped></style>