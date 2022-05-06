<template>
  <ul>
    <li>
      <el-carousel
          :autoplay="false"
          indicator-position="outside"
          :height="dataHeight"
          @change="changeSlide"
      >
        <el-carousel-item v-for="item in bData.urls.length" :key="item">
          <transition name="el-fade-in">
            <img
                v-bind:src="bData.urls[item - 1]"
                width="220"
                height="220"
                v-show="item - 1 === showSlideIdx"
             alt="无法显示图片"/>
          </transition>
        </el-carousel-item>
      </el-carousel>
    </li>
    <li>
      <div v-if="bData.types" class="types-wrapper">
        <TypeLogo
            v-for="item in bData.types.length"
            :typeName="bData.types[item - 1]"
            v-bind:key="item"
        />
      </div>
    </li>
    <li>
      <SpeciesStrengthRadar v-bind:ss="bData.ss" class="li-ss"/>
    </li>
  </ul>
</template>

<script>

import SpeciesStrengthRadar from "@/components/SpeciesStrengthRadar";
import TypeLogo from "@/components/TypeLogo";

export default {
  name: "PokemonCard",
  props: {
    bid: String,
    label: String,
  },
  data() {
    const {data} = require("../../assets/data/" + this.bid + ".js");
    return{
      bData: data,
      dataHeight: "220px",
      showSlideIdx: 0
    }
  },
  components: {
    SpeciesStrengthRadar,
    TypeLogo,
  },
  methods: {
    changeSlide(newIdx) {
      this.showSlideIdx = newIdx;
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

p {
  word-wrap: break-word;
  word-break: normal;
}

ul {
  align-content: center;
  float: left;
  width: 250px;
  margin-block-start: 0;
}

li {
  display: inline;
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.el-carousel {
  width: 220px;
  margin: 0 auto;
}

.tip {
  padding: 8px 16px;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
  margin: 20px 0;
}

.types-wrapper {
  text-align: center;
  width: 100%;
}

.li-ss {
  margin-top: 30px;
}
</style>