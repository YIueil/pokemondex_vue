<template>
  <div class="hello">
    <h1>{{ bData.name }}</h1>

    <div class="tip">
      <p>{{ bData.story }}</p>
    </div>

    <article class="context" v-html="compiledMarkdown"></article>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "Content",
  props: {
    bid: String,
    label: String,
  },
  data() {
    const {data} = require("../../assets/data/" + this.bid + ".js");
    return {
      bData: data,
      dataHeight: "220px",
      showSlideIdx: 0,
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.bData.content);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  float: right;
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
