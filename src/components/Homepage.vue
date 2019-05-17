<template>
    <div>
        <Header/>

        <vue-markdown>{{ blurb }}</vue-markdown>
    </div>
</template>

<script>
import Header from './Header.vue';
import VueMarkdown from 'vue-markdown';

const Homepage = {
    name: 'Homepage',
    components: {
        Header,
        VueMarkdown
    },
    computed: {
        blurb: function() {
            return '';
        }
    }
};

export default Homepage;
</script>

<style lang="less">

</style>
