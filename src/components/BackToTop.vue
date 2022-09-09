<template>
    <a href="#home" class="btn show">
        <i class="fas fa-arrow-up"></i>
    </a>
</template>

<script>
    export default {
        name: "BackToTop"
    }
</script>

<style lang="scss" scoped>
    @import '../assets/variables.scss';
    
    .btn {
        display: grid;
        font-size: 1.25rem;
        position: fixed;
        bottom: 3rem;
        right: 3rem;
        background: $background;
        width: 3rem;
        height: 3rem;
        place-items: center;
        border-radius: .5rem;
        color: $white;
        visibility: hidden;
        z-index: 100;
        text-decoration: none;

        &:hover {
            cursor: pointer;
            background-color: $button-hover;
            transition: 1s;
        }

        &.show {
            opacity: 1;
            visibility: visible;
        }
    }
</style>