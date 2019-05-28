<template>
  <div id="app">
    <Header />

    <hr />

    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

const App = {
  components: {
    Header
  },
  name: "App",
  props: {}
};

export default App;
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 20px;

  img.rounded {
    border-radius: 50%;
  }
  display: flex;

  .center-children {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 768px) {
      justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  > div,
  > header {
    padding: 20px;
  }

  .header {
    flex: 0 0 auto;
  }

  .mainContent {
    flex: 1 1 auto;
    h1 {
      text-align: center;
    }
  }
}

.content {
  flex: 1 1 auto;
}
</style>
