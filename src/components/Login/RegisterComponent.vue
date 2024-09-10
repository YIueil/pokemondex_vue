<script setup lang="ts">
import { Github, Google, Qq, Weibo, Weixin } from '@vicons/fa'
import type { FormInst, FormItemRule, FormRules } from 'naive-ui'

interface ModelType {
  account: string | null
  password: string | null
  rPassword: string | null
}

const formRef = ref<FormInst | null>(null)

const modelRef = ref<ModelType>({
  account: null,
  password: null,
  rPassword: null
})

const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-={}|[\]\\:;"'<,>.?/~`]{4,16}$/

const rules: FormRules = {
  account: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('需要账号')
        } else if (!regex.test(value)) {
          return new Error('账号格式不符合要求, 支持4-16位长度的字母数字和符号组合')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur']
    }
  ],
  rPassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['input', 'blur']
    },
    {
      validator: validatePasswordStartWith,
      message: '两次密码输入不一致',
      trigger: 'input'
    },
    {
      validator: validatePasswordSame,
      message: '两次密码输入不一致',
      trigger: ['blur', 'password-input']
    }
  ]
}

function validatePasswordStartWith(
  rule: FormItemRule,
  value: string
): boolean {
  return (
    !!modelRef.value.password
    && modelRef.value.password.startsWith(value)
    && modelRef.value.password.length >= value.length
  )
}
function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === modelRef.value.password
}

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log('验证成功')
    } else {
      console.log(errors)
      console.error('验证失败')
    }
  })
}

const emits = defineEmits(['onLogin'])

function login() {
  emits('onLogin')
}
</script>

<template>
  <div class="registerComponent">
    <n-space class="title" align="end">
      <h1 style="display: inline-block">注册</h1>
      <span>已有账号? <n-button text type="info" @click="login()">登录</n-button></span>
    </n-space>
    <n-form
      class="form"
      ref="formRef"
      :model="modelRef"
      :rules="rules"
      label-align="left"
      label-placement="left"
      label-width="auto"
    >
      <n-form-item path="account" label="账号">
        <n-input v-model:value="modelRef.account" :input-props="{ autoComplete: 'off' }" placeholder="请输入账号" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input
          v-model:value="modelRef.password"
          :input-props="{ autoComplete: 'off' }"
          type="password"
          placeholder="请输入密码"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="rPassword" label="重复输入密码">
        <n-input
          v-model:value="modelRef.rPassword"
          :input-props="{ autoComplete: 'off' }"
          type="password"
          :disabled="!modelRef.password"
          placeholder="请输入密码"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="checkInput">
        <n-checkbox size="large" label="人机验证" />
      </n-form-item>
      <n-button
        class="w-full"
        :disabled="modelRef.account === null"
        type="primary"
        @click="handleValidateButtonClick"
      >
        注册
      </n-button>
    </n-form>
    <n-divider> 第三方帐号直接登录，免注册</n-divider>
    <div class="thirdPartyLoginMethod">
      <n-icon size="36" color="#23414C">
        <qq />
      </n-icon>
      <n-icon size="36" color="#23414C">
        <weixin />
      </n-icon>
      <n-icon size="36" color="#23414C">
        <weibo />
      </n-icon>
      <n-icon size="36" color="#23414C">
        <github />
      </n-icon>
      <n-icon size="36" color="#23414C">
        <google />
      </n-icon>
    </div>
    <n-divider />
    <div class="about">@2024 - YIUEIL.CC All rights reserved.</div>
  </div>
</template>

<style scoped>
.registerComponent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title,
  .form {
    width: 100%;
    margin-bottom: 20px;
  }

  .thirdPartyLoginMethod {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
