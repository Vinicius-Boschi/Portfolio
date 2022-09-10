<template>
    <section class="skills" id="skills">
        <div>
            <h2 class="skills__skills">Habilidades</h2>
        </div>
        <div class="skills__container">
            <div class="skills__experience">
                <h2>Experiência</h2>
            </div>
            <div class="skills__list">
                <div class="skills__badges">
                    <span class="skills__card html"></span>
                    <img class="skills__img" :src="HtmlImg">
                    <div class="skills__bars"></div>
                    <span class="skills__infos">
                        <h3 class="skills__language">{{ HtmlName }}</h3>
                        <p class="skills__text">{{ HtmlText }}</p>
                    </span>
                </div>
                <div class="skills__badges">
                    <span class="skills__card css"></span>
                    <img class="skills__img" :src="CssImg">
                    <div class="skills__bars"></div>
                    <span class="skills__infos">
                        <h3 class="skills__language">{{ CssName }}</h3>
                        <p class="skills__text">{{ CssText }}</p>
                    </span>
                </div>
                <div class="skills__badges">
                    <span class="skills__card sass"></span>
                    <img class="skills__img" :src="SassImg">
                    <div class="skills__bars"></div>
                    <span class="skills__infos">
                        <h3 class="skills__language">{{ SassName }}</h3>
                        <p class="skills__text">{{ SassText }}</p>
                    </span>
                </div>
            </div>
            <div class="skills__experience">
                <h2>Aprendendo</h2>
            </div>
            <div class="skills__list">
                <div class="skills__badges">
                    <span class="skills__card js"></span>
                    <img class="skills__img" :src="JsImg">
                    <div class="skills__bars"></div>
                    <span class="skills__infos">
                        <h3 class="skills__language">{{ JsName }}</h3>
                        <p class="skills__text">{{ JsText }}</p>
                    </span>
                </div>
                <div class="skills__badges">
                    <span class="skills__card vue"></span>
                    <img class="skills__img" :src="VueImg">
                    <div class="skills__bars"></div>
                    <span class="skills__infos">
                        <h3 class="skills__language">{{ VueName }}</h3>
                        <p class="skills__text">{{ VueText }}</p>
                    </span>
                </div>
            </div>
        </div>
        <Animation />
    </section>
</template>

<script>

    import Animation from './Animation.vue'

    export default {
        name: "Skills",
        components: {
            Animation
        },
        data() {
            return {
                HtmlName: 'html',
                HtmlImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                HtmlText: 'Linguagem de marcação para elementos em uma página web.',
                JsName: 'js',
                JsImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                JsText: 'Linguagem de programação interpretada estruturada, de script em alto nível.',
                SassName: 'sass',
                SassImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
                SassText: 'Linguagem de folhas de estilo concebida inicialmente por Hampton Catlin.',
                CssName: 'css',
                CssImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                CssText: 'Linguagem para adicionar estilo a um documento web.',
                VueName: 'vue',
                VueImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                VueText: 'Framework para desenvolvimento de interfaces de usuário e aplicativos de página única.'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/variables.scss';

    .skills {
    background: $light-gray; 
    height: auto;

    @include for-phone-only {
        height: auto;
    }

    @include for-tablet-only {
        height: auto;
    }

    &__container {
        display: flex;
        flex-direction: column;
        font-size: 1.8rem;
        padding: 2rem;
        margin-top: 3rem;

        @include for-phone-only {
            grid-template-columns: repeat(1,1fr);
        }

        @include for-tablet-only {
            grid-template-columns: repeat(1,1fr);
        }
    }

    &__experience {
        font-family: $fontRoboto;
        color: $white;
        text-align: center;
        padding: 1rem;
        font-size: 1.8rem;
    }

    &__learning {
        padding: 1rem;
    }

    &__skills {
        font-family: $fontRoboto;
        text-align: center;
        color: $white;
        font-size: 1.8rem;
        padding-top: 3rem;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        justify-items: center;

        @include for-phone-only {
            grid-template-columns: repeat(1,1fr);
        }

        @include for-tablet-only {
            grid-template-columns: repeat(2,1fr);
        }
    }

    &__badges {
        display: flex;
        align-items: center;
        padding: 2rem;
        position: relative;
        width: 70%;
        height: auto;
        margin: 0.5rem;
        border-radius: 25px;
        background-color: $light-gray;
        overflow: hidden;
        transition: 0.5s;

        &::after {
            content: '';
            position: absolute;
            inset: 5px;
            background: $background-skills;
            border-radius: 20px;
        }

        .html::before {
            background: $html;
        }

        .css::before {
            background: $css;
        }

        .sass::before {
            background: $sass;
        }

        .js::before {
            background: $js;
        }

        .vue::before {
            background: $vue;
        }

        @include for-phone-only {
            width: 80%;
        }

        @include for-tablet-only {
            width: 90%;
            height: auto;
        }
    }

    &__badges &__card::before {
        content: '';
        position: absolute;
        width: 6rem;
        left: 4.5rem;
        top: -50%;
        height: 50rem;
        animation: bars 10s linear 0s infinite;

        @keyframes bars {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(350deg);    
            }
        }
    }

    &__img {
        width: 2.5rem;
        height: auto;
        z-index: 1;
    }

    &__bars {
        margin-left: 1vw;
        height: 4rem;
        width: .4rem;
        border-radius: .37rem;
        background-color: $background;
        z-index: 1;

        @include for-phone-only {
            margin-left: 3vw;
        }
    }

    &__infos {
        margin-left: 1rem;
        color: $white;
        z-index: 1;
    }

    &__language {    
        text-transform: uppercase;
        font-size: 1rem;
    }

    &__text {
        padding-top: 1rem;
        font-size: .7rem;
        line-height: 1rem;
        letter-spacing: .5px;
    }
}

</style>