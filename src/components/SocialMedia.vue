<template>
    <div class="header__wrapper">
        <ul class="header__social">
            <li v-for="links in social" :key="links.id">
                <a class="header__btn" :href="links.link" target="_blank">
                    <i :class = "links.class"></i>
                </a>
            </li>
        </ul>
    </div>  
</template>

<script>
    export default {
        name: 'SocialMedia',
        data() {
            return {
                social: [{link: 'https://github.com/Vinicius-Boschi', class:'fa-brands fa-github'}, 
                        {link: 'https://codepen.io/vinicius-simoes', class:'fa-brands fa-codepen'},
                        {link: 'mailto:vinicius.yg@gmail.com', class:'fa-solid fa-envelope-open'},
                        {link: 'https://www.linkedin.com/in/viniciusboschi/', class:'fa-brands fa-linkedin'}]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/variables.scss';
    
    .header {
        &__wrapper {
            a {
                color: $white;
            }
        }

        &__social {
            display: flex;
            justify-content: center;
            transition: all .3s;
        }

        &__btn {
            font-size: 2rem;
            text-align: center;
            display: inline-block;
            cursor: pointer;
            margin: 1rem .3rem 0;
            width: 80px;
            height: 80px;
            line-height: 84px;
            border-radius: 50%;
            position: relative;
            color: $white;
            background-color: $dark-gray-two;
            transition: 300ms;

            &::after {
                pointer-events: none;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                content: '';
                box-sizing: content-box;
                box-shadow: 0 0 0 3px $white;
                top: 0;
                left: 0;
                opacity: 0;
                transition: 300ms;
            }

            &:hover {
                background: $white;
                color: $dark-gray;
            }

            &:hover::after {
                opacity: 1;
                transform: scale(1.15);
            }

            @include for-phone-only {
                width: 75px;
            }
        }
    }
</style>