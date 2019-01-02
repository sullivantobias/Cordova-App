<template>
  <div id="app">
    <Header/>
    <Tabs/>

    <Thumbnail v-if="ELEMENTS.thumbnail.allow"/>
    <Description v-if="ELEMENTS.description.allow"/>
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



