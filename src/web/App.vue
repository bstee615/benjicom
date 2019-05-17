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
html, body, #app {
    height: 100%;
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
    
    img.rounded {
        border-radius: 50%;
    }
}
</style>
