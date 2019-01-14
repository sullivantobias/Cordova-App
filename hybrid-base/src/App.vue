<template>
  <div id="app">
    <div class="container content">
      <transition name="fade">
        <Previousarrow v-show="ELEMENTS.previous.allow"/>
      </transition>
      <Header/>
      <Tabs/>
      <Backtotop/>
      <transition name="fade">
        <Thumbnail v-if="ELEMENTS.thumbnail.allow"/>
      </transition>
      <transition name="fade">
        <Description v-if="ELEMENTS.description.allow"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Tabs from "./components/Tabs/Tabs.vue";
  import Header from "./components/Header/Header.vue";
  import Thumbnail from "./components/Thumbnail/Thumbnail.vue";
  import Description from "./components/Description/Description.vue";
  import Backtotop from "./components/BackToTop/Backtotop.vue";
  import Previousarrow from "./components/previousArrow/Previousarrow.vue";


  import {allowingElement} from "./libraries/allowingElement";
  import {ELEMENTS} from "./global/allowedElements.js";

  export default {
    name: "App",
    components: {
      Tabs,
      Header,
      Thumbnail,
      Description,
      Backtotop,
      Previousarrow,
    },
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

  body, .smooth-container {
    scroll-behavior: smooth
  }

  /** to have a good scroll **/
  .content {
    padding: 0;
    margin-top: 130px;
    margin-bottom: 70px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>

