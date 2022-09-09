<template>
    <div class="animation">
        <p class="animation__scroll">Scroll Dowm</p>
        <span class="animation__mouse">
            <span class="animation__mouse-wheel"></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'Animation'
    }
</script>

<style lang="scss" scoped>
    .animation {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 4rem;

        &__scroll {
            color: #E7E8E9;
            margin: .5rem;
        }

        &__mouse {
            display: flex;
            width: 25px;
            height: 50px;
            border: 2px solid #E7E8E9;
            border-radius: 20px;
        }

        &__mouse-wheel {
            display: block;
            width: 10px;
            height: 10px;
            background-color: #E7E8E9;
            border-radius: 50%;
            margin: auto;
            animation: move-wheel 1s linear infinite;

            @keyframes move-wheel {
                0% {
                    opacity: 0;
                    transform: translateY(-1rem);
                }
            }
        }
    }
</style>