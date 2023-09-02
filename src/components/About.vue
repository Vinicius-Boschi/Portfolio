<template>
<section class="about" id="about">
    <div class="about__container">
        <div class="about__h2">
            <h2>{{ title }}</h2>
        </div>
        <div class="about__info">
           <div class="about__my">
                <img class="about__picture" :src="imgLogo" :alt="myPhoto">
            </div>
            <div class="about__informations">
                <p class="about__text">{{ textAboutMe }}</p> 
                <p class="about__text">{{ textCourses }}</p>
            </div>
        </div>
        <Animation />
    </div>
</section>
</template>

<script>

    import Animation from './Animation.vue'

    export default {
        name: "About",
        components: {
            Animation
        },
        data() {
            return {
                title: 'Sobre mim...',
                myPhoto: 'Logo Portfólio',
                imgLogo: 'https://user-images.githubusercontent.com/74377158/195412928-b3a0843b-2ae2-4e92-9c94-db3f724a2f5c.png',
                textAboutMe: 'Olá! Sou o Vinícius, tenho 21 anos, sou programador front-end e estou determinado a aprender cada vez mais sobre a área para me tornar um excelente profissional.',
                textCourses: 'Comecei na área da programação em 2018, fazendo um curso de Lógica de Programação na Caelum, em 2019 entrei no curso técnico, em 2021 comecei a fazer os cursos da Alura e atualmente estou cursando Análise e Desenvolvimento de Sistemas na Fiap.'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/variables.scss';

    .about {
        &__container {
            background: $dark-gray;
        }

        &__h2 {
            font-family: $fontRoboto;
            font-size: 1.8rem;
            padding-top: 3rem;
            color: $white;
            text-align: center;
        }

        &__info {
            display: flex;
            align-items: center;
            justify-content: center;

            @include for-phone-only {
                display: block;
            }
            
            @include for-tablet-only {
                display: block;
            }
        }

        &__my {
            @include for-phone-only {
                text-align: center;
            }

            @include for-tablet-only {
                text-align: center;
            }
        }

        &__picture {
            width: 20rem;
        }

        &__informations {
            width: 40%;

            @include for-phone-only {
                width: auto;
                padding: 2rem;
            }

            @include for-tablet-only {
                width: 70%;
                margin: 0 auto;
            }
        }

        &__text {
            line-height: 1.8;
            letter-spacing: .5px;
            color: $white;
            font-size: 1.1rem;
            margin: 1rem auto;
        }
    }
</style>