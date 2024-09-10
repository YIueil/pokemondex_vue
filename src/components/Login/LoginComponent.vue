<script setup lang="ts">
import type { FormInst, FormItemRule, FormRules } from 'naive-ui'
import { Github, Google, Qq, Weibo, Weixin } from '@vicons/fa'

defineProps({
  showRegister: {
    type: Boolean,
    default: false
  }
})

interface ModelType {
  account: string | null
  password: string | null
}

const formRef = ref<FormInst | null>(null)
const modelRef = ref<ModelType>({
  account: null,
  password: null
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
      message: '请输入密码'
    }
  ]
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

const emits = defineEmits(['onRegister', 'onGuest'])

function register() {
  emits('onRegister')
}

function guest() {
  emits('onGuest')
}
</script>

<template>
  <div class="loginComponent">
    <n-space class="title" align="end">
      <h1 style="display: inline-block">登录</h1>
      <span v-if="showRegister"
        >没有账号?
        <n-button text type="info" @click="register()">注册</n-button>
        或
        <n-button text type="info" @click="guest()">游客访问</n-button>
      </span>
    </n-space>
    <n-form class="form" ref="formRef" :model="modelRef" :rules="rules" label-placement="left">
      <n-form-item path="account" label="账号">
        <n-input
          v-model:value="modelRef.account"
          :input-props="{ autoComplete: 'off' }"
          placeholder="请输入账号"
          @keydown.enter.prevent
        />
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
      <div style="display: flex; justify-content: flex-end">
        <div>忘记密码</div>
      </div>
      <n-form-item path="rememberMe">
        <n-checkbox size="large" label="保存登录信息" />
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
        登录
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

<style lang="less" scoped>
.loginComponent {
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
