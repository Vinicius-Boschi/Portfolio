<template>
    <div class="preloader">
        <img src="https://bitbucket.org/vinicius-boschi/portfolio/raw/fc9fbd53087b9c720c69cc3a0c0adb9e9c1b62e0/images/video/preloader.gif" :alt="alt">
    </div>
</template>

<script>
    export default {
       name: 'Preloader'
    }
</script>

<style lang="scss" scoped>
    .preloader {
        display: grid;
        justify-content: center;
        align-items: center;
        visibility: visible;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #E7E8E9;
        z-index: 999;
        transition: all 2s;
    }

    .hide-preloader {
        z-index: 999;
        visibility: hidden;
    }

</style>