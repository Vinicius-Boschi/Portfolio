<template>
<section class="about" id="about">
    <div class="about__container" data-aos="fade-right" data-aos-duration="2000">
        <div class="about__h2">
            <h2>Sobre mim...</h2>
        </div>
        <div class="about__info">
           <div class="about__my">
                <img class="about__picture" src="https://bitbucket.org/vinicius-boschi/portfolio/raw/fc9fbd53087b9c720c69cc3a0c0adb9e9c1b62e0/images/aboutMe.png" :alt="myPhoto">
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
                myPhoto: 'Logo Portfólio',
                textAboutMe: 'Olá! Sou o Vinícius, tenho 20 anos, sou programador front-end e estou determinado a aprender cada vez mais sobre a área para me tornar um excelente profissional.',
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

        @include for-phone-only {
            display: block;
        }
        
        @include for-tablet-only {
            display: block;
        }
    }

    &__my {
        display: flex;
        align-items: center;
        height: 400px;

        @include for-phone-only {
            height: 200px;
        }

        @include for-tablet-only {
            height: 250px;
        }
    }

    &__picture {
        width: 20rem;
        
        @include for-phone-only {
            width: 50%;    
            margin: auto;
        }

        @include for-tablet-only {
            margin: auto;
        }
    }

    &__informations {
        display: flex;
        flex-direction: column;
        width: 60%;
        max-width: 100%;
        height: auto;

        @include for-phone-only {
            width: auto;
        }

        @include for-tablet-only {
            width: auto;
        }
    }

    &__text {
        line-height: 1.5rem;
        letter-spacing: .5px;
        color: $white;
        font-size: 1.1rem;
        margin: .5rem ;

        @include for-phone-only {
            width: auto;
            padding: .5rem;
        }

        @include for-tablet-only {
            width: auto;
            padding: 1rem;
        }
    }
}
</style>