<template>
    <div id="app">
        <router-view />
        <Footer/>
    </div>
</template>

<style lang="scss">
    @import "scss/variables";

    html {
        overflow: auto;

        body {
            margin: 0;

            * {
                box-sizing: border-box;
            }

            h1 {
                font-size: $h1;
            }

            h2 {
                font-size: $h2;
            }

            h3 {
                font-size: $h3;
            }
        }
    }

    #app {
        font-family: "Calibri", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $blue-main;
    }
</style>
<script>
    import Footer from "@/components/Footer";
    export default {
        components: {Footer}
    }
</script>