<template>
    <div class="preloader">
        <img src="https://user-images.githubusercontent.com/74377158/189690859-9cdf317e-637c-47b1-9e8e-a3b1bbe14fae.gif" :alt="alt">
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