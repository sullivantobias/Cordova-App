<template>
  <div id="app">
    <div class="container content">
      <Header/>
      <Tabs/>

      <Thumbnail v-if="ELEMENTS.thumbnail.allow"/>
      <Description v-if="ELEMENTS.description.allow"/>
    </div>
  </div>
</template>

<script>
import Tabs from "./components/Tabs/Tabs.vue";
import Header from "./components/Header/Header.vue";
import Thumbnail from "./components/Thumbnail/Thumbnail.vue";
import Description from "./components/Description/Description.vue";

import { allowingElement } from "./libraries/allowingElement";
import { ELEMENTS } from "./global/allowedElements.js";

export default {
  name: "App",
  components: { Tabs, Header, Thumbnail, Description },
  data() {
    return {
      ELEMENTS
    };
  },
  methods: {
    allowingElement
  }
};
</script>


<style lang="scss">

  /** to have a good scroll **/
  .content {
    padding: 0;
    margin-top: 130px;
    margin-bottom: 70px;
  }
  
</style>

