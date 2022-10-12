<template>
    <section class="skills" id="skills">
        <div>
            <h2 class="skills__skills">{{ skills }}</h2>
        </div>
        <div class="skills__container">
            <div class="skills__experience">
                <h2>{{ experience }}</h2>
            </div>
            <div class="skills__list">
                <div class="skills__badges" v-for="item in infosExperience" :key="item.id">
                    <span :class="item.class"></span>
                    <img class="skills__img" :src="item.image">
                    <div class="skills__bars"></div>
                    <span class="skills__infos">
                        <h3 class="skills__language">{{ item.name }}</h3>
                        <p class="skills__text">{{ item.text }}</p>
                    </span>
                </div>
            </div>
            <div class="skills__experience">
                <h2>{{ learning }}</h2>
            </div>
            <div class="skills__list">
                <div class="skills__badges" v-for="item in infosLearning" :key="item.id">
                    <span :class="item.class"></span>
                    <img class="skills__img" :src="item.image">
                    <div class="skills__bars"></div>
                    <span class="skills__infos">
                        <h3 class="skills__language">{{ item.name }}</h3>
                        <p class="skills__text">{{ item.text }}</p>
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
                skills: 'Habilidades',
                experience: 'Experiência',
                learning: 'Aprendendo',
                infosExperience: [
                    {
                        name: 'html', class: 'skills__card html', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', text: 'Linguagem de marcação para elementos em uma página web.'
                    },
                    {
                        name: 'sasss', class: 'skills__card sass', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', text: 'Linguagem de folhas de estilo concebida inicialmente por Hampton Catlin.'
                    },
                    {
                        name: 'css', class: 'skills__card css', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', text: 'Linguagem para adicionar estilo a um documento web.'
                    }
                ],
                infosLearning: [
                    {
                        name: 'js', class: 'skills__card js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', text: 'Linguagem de programação interpretada estruturada, de script em alto nível.'
                    },
                    {
                        name: 'vuejs', class: 'skills__card vue', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', text: 'Framework para desenvolvimento de interfaces de usuário e aplicativos de página única.'
                    }
                ]
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
            grid-template-columns: repeat(1,1fr);
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