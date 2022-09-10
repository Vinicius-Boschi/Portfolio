<template>
    <header class="header" id="home">
        <div class="header__container">
            <nav class="header__navbar" role="navigation">
                <div class="header__action">
                    <img class="header__logo" :src="imgLogo" :alt="aboutMeText">
                    <button class="header__button">
                        <div class="header__burger burger-slip">
                            <div class="header__burger-lines"></div>
                        </div>
                    </button>
                </div>
                <div class="header__links-container">
                    <ul class="header__list">
                        <li class="header__links" v-for="item in items" :key="item.id">
                            <a :href="item.link" class="header__link">{{ item.message }}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="header__content">
            <div class="header__title">
                <h1>{{ myName }} <span class="header__">{{ lastName }}</span></h1>
                <h3 class="header__effect">{{ job }}</h3>
            </div>
            <SocialMedia />
            <Animation />
        </div>
    </header>
</template>

<script>

    import Animation from './Animation.vue'
    import SocialMedia from './SocialMedia.vue'

    export default {
       name: 'Header',
       components: {
        Animation,
        SocialMedia
       },
       data() {
        return {
            myName: 'Vinícius',
            lastName: 'Boschi',
            job: 'Desenvolvedor Front-end.',
            aboutMeText: 'Logo Portfólio',
            imgLogo: 'https://bitbucket.org/vinicius-boschi/portfolio/raw/fc9fbd53087b9c720c69cc3a0c0adb9e9c1b62e0/images/aboutMe.png',

            items: [{message: 'home', link:'#home'}, 
                    {message: 'sobre',link:'#about'},
                    {message: 'habilidades', link:'#skills'},
                    {message: 'projetos', link:'#projetos'}]
        }
    },
    methods: {
        responsiveNav() {
            const button = document.querySelector('.header__button')
            const linksContainer = document.querySelector('.header__links-container')
            const links = document.querySelector('.header__list')

            button.addEventListener('click', () => {
                const containerHeight = linksContainer.getBoundingClientRect().height
                const linksHeight = links.getBoundingClientRect().height

                if (containerHeight === 0) {
                    linksContainer.style.height = `${linksHeight}px`
                } else {
                    linksContainer.style.height = 0
                }
            })
        },
        burgerNav() {
            const burger = document.querySelector('.header__burger')

            burger.addEventListener('click', () => {
                if (!burger.classList.contains("open")) {
                    burger.classList.add("open")
                } else {
                    burger.classList.remove("open")
                }
            })
        },
        fixedNav() {
            const navbar = document.querySelector('.header__navbar')
            const btn = document.querySelector('.btn')

            window.addEventListener("scroll", () => {
                const scrollHeight = window.pageYOffset
                const navHeight = navbar.getBoundingClientRect().height

                if (scrollHeight > navHeight) {
                    navbar.classList.add('header__navbar-fixed')
                } else {
                    navbar.classList.remove('header__navbar-fixed')
                }

                if (scrollHeight > 500) {
                    btn.classList.add('show')
                } else {
                    btn.classList.remove('show')
                }
            })

        }
    },
    mounted() {
        this.responsiveNav(),
        this.burgerNav(),
        this.fixedNav()
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/variables.scss';

    .header {
        min-height: 100vh;
        background: linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.7)), url('/img/header.jpeg') center/cover no-repeat;

        &__container {
            background-color: $black; 
        }

        &__navbar {
            width: 90vw;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding: 1rem;

            &-fixed {
                padding: 1.5rem 0;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: $background;
                box-shadow: $light-shadow;
                z-index: 999 !important;
            }

            &-fixed .header__link {
                color: $white;
            }

            @include for-phone-only {
                display: block;
            }

            @include for-tablet-only {
                display: block;
            }

        }

        &__action {
            display: flex;
            justify-content: space-between;
        }

        &__logo {
            height: 100px;
        }

        &__button {
            display: none;
            color: $white;
            background: transparent;
            border-color: transparent;
            cursor: pointer;

            @include for-phone-only {
                display: block;
            }

            @include for-tablet-only {
                display: block;
            }
        }
    
        &__burger {
            height: 3em;
            width: 3em;
            position: relative;
            font-size: 12px;
            cursor: pointer;
            transition: 0.2s all;
        }
    
        &__burger &__burger-lines {
            top: 50%;

            &::after {
                left: 0;
                top: -1em;
            }

            &::before {
                left: 1em;
                top: 1em;
            }
        }
    
        &__burger &__burger-lines, &__burger &__burger-lines::after, &__burger &__burger-lines::before {
            pointer-events: none;
            display: block;
            content: '';
            width: 75%;
            border-radius: 0.25em;
            background-color: $white;
            height: 0.25em;
            position: absolute;
            -webkit-transform: rotate(0);
            -ms-transform: rotate(0);
            transform: rotate(0);
        }
    
        &__burger.burguer-slip &__burger-lines::after,&__burger.burguer-slip &__burger-lines::before{  
            -webkit-transition: all .2s;
            -o-transition: all .2s;
            transition: all .2s; 
        }
    
        &__burger.burger-slip.open &__burger-lines {
            -webkit-transform: translateX(-2em);
            -ms-transform: translateX(-2em);
            transform: translateX(-2em);
            background-color: transparent;
        }
    
        &__burger.burger-slip.open &__burger-lines::before, &__burger.burger-slip.open &__burger-lines::after {
            left: 0.5em;
            top: 0;
        }
        
        &__burger.burger-slip.open &__burger-lines::before {
            -webkit-transform: translateX(2em) rotate(135deg);
            -ms-transform: translateX(2em) rotate(135deg);
            transform: translateX(2em) rotate(135deg);
        }
    
        &__burger.burger-slip.open &__burger-lines::after {
            -webkit-transform: translateX(2em) rotate(-135deg);
            -ms-transform: translateX(2em) rotate(-135deg);
            transform: translateX(2em) rotate(-135deg);
        }   

        &__links-container {
            transition: all .3s linear;

            @include for-phone-only {
                overflow: hidden;
                height: 0;
            }

            @include for-tablet-only {
                overflow: hidden;
                height: 0;
            }

        }

        &__list {
            display: flex;
            font-size: 1.8rem;
            padding: 2rem;

            
            @include for-phone-only {
                display: block;
            }

            @include for-tablet-only {
                display: block;
            }
        }

        &__link {
            display: inline-block;
            text-decoration: none;
            position: relative;
            padding: 1rem 1rem;
            font-size: 1.1rem;
            text-transform: capitalize;
            letter-spacing: .25rem;
            transition: all .3s linear;
            font-weight: bold;
            color: $white;

            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: $white;
                transform: scaleX(0);
                transform-origin: right;
                transition: transform .5s;
            }

            &:hover::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 100vh;
            background: $black-two;
        }

        &__title {
            font-size: 3rem;
            color: $white;
            font-family: "Roboto", sans-serif;

            &__bold {
                font-weight: bold;
            }
        }

        &__effect {
            box-shadow: .6em 0 0  $dark-gray-two;
            margin: 2rem 0;
	        width: 100%;
            font-size: 1.8rem;
            overflow: hidden;
	        white-space: nowrap;
	        animation: caret .5s step-end infinite alternate, type 5s steps(23, end);

            @keyframes type {
                0% {
                    width: 0;
                }
            }

            @keyframes caret {
                50% {
                    box-shadow: .6em 0 0 transparent;
                }
            }
        }
    }
</style>