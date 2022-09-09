<template>
    <div class="preloader">
        <img :src="preloader" :alt="alt">
    </div>
</template>

<script>
    export default {
       name: 'Preloader',
       props: ["preloader", "alt"]
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
        transition: all 3s;
    }

    .hide-preloader {
        z-index: 999;
        visibility: hidden;
    }

</style>