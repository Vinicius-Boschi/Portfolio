<template>
    <footer class="footer">
        <div class="footer__content">
            <h3 class="footer__name">{{ name }} <span class="footer__name_bold">{{ lastName }}</span></h3>
            <p class="footer__copy">&copy; <span id="date"></span> - {{ name }} {{ lastName }}</p>
            <p class="footer__rights">{{ copyright }}</p>
        </div>
        <div class="footer__media">
            <SocialMedia />
        </div>
    </footer>
</template>

<script>
    import SocialMedia from './SocialMedia.vue'
    
    export default {
        components: {
            SocialMedia
        },
        data() {
            return {
                name: 'Vinícius',
                lastName: 'Boschi',
                copyright: 'Todos os direitos reservados.',
                dateTime() {
                    const date = document.getElementById("date")
                    date.innerHTML = new Date().getFullYear() 
                }
            }
        },
        mounted() {
            this.dateTime()
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/variables.scss';

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: $medium-blue;
        color: $white;
        height: 15rem;

    @include for-phone-only {
        flex-direction: column;
        justify-content: center;
    }

    &__name {
        font-family: $fontRoboto;
        font-size: 2rem;
        padding: .5rem;
        
        &_bold {
            font-weight: bold;
        }
    }

    &__copy, &__rights {
        font-size: .7rem;
        padding: .5rem;
    }

    &__links {
        text-decoration: none;
    }

    &__github, &__codepen, &__linkedin, &__email {
        width: 2.5rem;
        margin-top: 2rem;
        padding: 1rem; 
        border-radius: 1.8rem;

        @include for-phone-only {
            width: 2rem;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>