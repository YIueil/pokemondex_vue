<script setup lang="ts"></script>

<template>
  <div class="loginContainer">
    <div class="mainContainer">
      <n-gradient-text gradient="linear-gradient(90deg, #23414C 0%, #FFFFFF 50%, #23414C 100%)">
        <div>"樱花落时雨, 雨落镜成花"</div>
      </n-gradient-text>
    </div>
    <div class="formContainer">
      <div class="formInner">
        <RouteView />
      </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .formInner {
      width: 80%;
    }
  }
}
</style>
