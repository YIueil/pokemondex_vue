<script lang="ts">
import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui'
import { Qq, Weixin, Google, Github, Weibo } from '@vicons/fa'

interface ModelType {
  account: string | null
  password: string | null
}

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null)
    const rPasswordFormItemRef = ref<FormItemInst | null>(null)
    const modelRef = ref<ModelType>({
      account: null,
      password: null
    })

    function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
      return (
        !!modelRef.value.password &&
        modelRef.value.password.startsWith(value) &&
        modelRef.value.password.length >= value.length
      )
    }

    function validatePasswordSame(rule: FormItemRule, value: string): boolean {
      return value === modelRef.value.password
    }

    const rules: FormRules = {
      account: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('需要账号')
            } else if (!/^\d*$/.test(value)) {
              return new Error('年龄应该为整数')
            } else if (Number(value) < 18) {
              return new Error('年龄应该超过十八岁')
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
      ],
      reenteredPassword: [
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
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      handlePasswordInput() {
        if (modelRef.value.password) {
          rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
        }
      },
      handleValidateButtonClick(e: MouseEvent) {
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
    }
  },
  components: {
    Qq,
    Weixin,
    Weibo,
    Github,
    Google
  }
})
</script>

<template>
  <div class="loginContainer">
    <div class="mainContainer">
      <n-gradient-text gradient="linear-gradient(90deg, #23414C 0%, #FFFFFF 100%)">
        <div>"樱花落时雨, 雨落镜成花"</div>
      </n-gradient-text>
    </div>
    <div class="formContainer">
      <n-space align="end" class="title">
        <h1 style="display: inline-block">登录</h1>
        <span>没有账号? <a>注册</a></span>
      </n-space>
      <n-form class="form" ref="formRef" :model="model" :rules="rules" label-placement="left">
        <n-form-item path="account" label="账号">
          <n-input v-model:value="model.account" placeholder="请输入账号" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input
            v-model:value="model.password"
            type="password"
            placeholder="请输入密码"
            @input="handlePasswordInput"
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
          <n-checkbox size="large" label="验证登录信息" />
        </n-form-item>
        <n-button
          class="w-full"
          :disabled="model.account === null"
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
  </div>
</template>

<style lang="less" scoped>
.loginContainer {
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0f2027,
    #203a43,
    #405d69
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .mainContainer {
    flex: 10;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .formContainer {
    flex: 5;
    background: #ffffff;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title,
    .form {
      width: 80%;
      margin-bottom: 20px;
    }

    .thirdPartyLoginMethod {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
}
</style>
