<template>
    <div>
        <Header/>
        <div v-if="loading">
            <div>loading...</div>
        </div>
        <div v-else>
            <vue-markdown>{{ blurb }}</vue-markdown>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import VueMarkdown from 'vue-markdown';
import axios from 'axios';

const Homepage = {
    name: 'Homepage',
    components: {
        Header,
        VueMarkdown
    },
    data: function() {
        return {
            blurb: null,
            loading: true
        }
    },
    mounted: function() {
        const self = this;

        axios.get('/blurb.md')
            .then(function(file) {
                self.blurb = file.data;
                self.loading = false;
            });
    }
};

export default Homepage;
</script>

<style lang="less">

</style>
