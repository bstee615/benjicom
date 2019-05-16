<template>
  <div id="app">
    <Homepage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'

const App = {
  name: 'app',
  components: {
    Homepage
  }
}

export default App;
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
