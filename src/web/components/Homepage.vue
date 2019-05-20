<template>
    <div class="content">
        <Header/>

        <hr>
        
        <div class="mainContent">
            <div v-if="loading">
                <div>loading...</div>
            </div>
            <div v-else>
                <vue-markdown>{{ blurb }}</vue-markdown>
            </div>
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
    created: function() {
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
.content {
    display: flex;
    height: 100%;
       
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

    > div, > header {
        padding: 20px;
    }

    .header {
        flex: 0 0 auto;
    }

    .mainContent {
        flex: 1 1 auto;

        h1 {
            text-align: center;
            text-decoration: underline;
        }
    }
}
</style>
