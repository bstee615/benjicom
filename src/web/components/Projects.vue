<template>
    <div class="content">
        <Header/>

        <hr>
        
        <div class="mainContent">
            Hey, this is pretty neat!
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

const Projects = {
    name: 'Projects',
    components: {
        Header,
    },
    data: function() {
    }
};

export default Projects;
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
