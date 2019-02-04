<template>
  <div id="app">
    <div class="container content">
      <Header/>
      <transition name="slide-fade-arrow">
        <PreviousArrow v-if="ELEMENTS.previous.allow"/>
      </transition>
      <Tabs/>
      <BackToTop/>
      <transition name="slide-fade">
        <Introduction v-if="ELEMENTS.introduction.allow"/>
      </transition>
      <transition name="slide-fade">
        <Thumbnail v-if="ELEMENTS.thumbnail.allow"/>
      </transition>
      <transition name="slide-fade">
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
  import BackToTop from "./components/BackToTop/Backtotop.vue";
  import PreviousArrow from "./components/previousArrow/Previousarrow.vue";
  import Introduction from './components/Introduction/Introduction.vue';


  import {allowingElement} from "./libraries/allowingElement";
  import {ELEMENTS} from "./global/allowedElements.js";

  export default {
    name: "App",
    components: {
      Tabs,
      Header,
      Thumbnail,
      Description,
      BackToTop,
      PreviousArrow,
      Introduction
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
    margin-bottom: 70px;
  }

  .slide-fade {
    &-enter-active, &-arrow-enter-active {
      transition: all .8s ease;
    }

    &-leave-active {
      transition: all .2s ease-in-out;
    }

    &-arrow-leave-active {
      transition: all .1s ease-in-out;
    }

    &-enter, &-arrow-enter {
      transform: translateX(-500px);
      opacity: 0;
    }

    &-leave-to, &-arrow-leave-to {
      transform: translateX(500px);
      opacity: 0;
    }
  }
</style>

