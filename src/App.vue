<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink to="/login">Go to Home</RouterLink>
    <RouterLink to="/register">Go to About</RouterLink>
  </nav>
  <nav>
    <RouterLink to="/home">Go to home</RouterLink>
    <RouterLink to="/home2">Go to home2</RouterLink>
  </nav>
  <router-view />
</template>

<style scoped></style>
