<template>
    <div>
        <Header/>

        <p v-for="blurb in blurbs" :key="blurb">
            <vue-markdown>{{ blurb }}</vue-markdown>
        </p>
    </div>
</template>

<script>
import Header from './Header.vue';
import VueMarkdown from 'vue-markdown';
import GetBlurbs from '../utils/GetBlurbs';

const Homepage = {
    name: 'Homepage',
    components: {
        Header,
        VueMarkdown
    },
    computed: {
        blurbs: GetBlurbs
    }
};

export default Homepage;
</script>

<style lang="less">

</style>
