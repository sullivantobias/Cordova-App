<template>
  <div id="app">
    <Tabs/>
    <Thumbnail/>

    <router-view/>
  </div>
</template>

<script>
import Thumbnail from "./components/Thumbnail/Thumbnail.vue";
import Tabs from "./components/Tabs/Tabs.vue";

export default {
  name: "App",
  components: { Thumbnail, Tabs }
};
</script>


<style lang="scss">
#app {
  background-color: #000;
}
</style>


