<template>
    <div id="app">
        <Homepage/>
    </div>
</template>

<script>
import Homepage from './components/Homepage.vue';

const App = {
    name: 'app',
    components: {
        Homepage
    }
};

export default App;
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
