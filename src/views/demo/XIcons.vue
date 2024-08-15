<!--图标引入示例-->
<script setup lang="ts">
import { AttachFileRound, FileDownloadRound } from '@vicons/material'
import { Icon, IconConfigProvider } from '@vicons/utils'
</script>

<template>
  <div>
    <IconConfigProvider size="24" color="green">
      <Icon>
        <AttachFileRound />
      </Icon>
    </IconConfigProvider>
    <AttachFileRound style="width: 24px; height: 24px" />
    <Icon size="24" color="#333">
      <FileDownloadRound />
    </Icon>
    <Icon color="red" size="24">
      <AttachFileRound />
      <FileDownloadRound />
    </Icon>
    <NIcon size="24" color="grey">
      <FileDownloadRound />
    </NIcon>
    <n-icon :component="FileDownloadRound" size="40" :depth="1" />
    <n-icon :component="FileDownloadRound" size="40" :depth="2" />
    <n-icon :component="FileDownloadRound" size="40" :depth="3" />
    <n-icon :component="FileDownloadRound" size="40" :depth="4" />
    <n-icon :component="FileDownloadRound" size="40" :depth="5" />
  </div>
</template>
