<template>
    <section class="portfolio" id="portfolio">
        <div class="portfolio__title">Projetos Online</div>
        <div class="portfolio__infos">
            <div class="portfolio__content" v-for="project in projects" :key="project.id">
                <img class="portfolio__img" :src="project.image" :alt="project.name">
                <div class="portfolio__container">
                    <h2 class="portfolio__h2">{{ project.name }}</h2>
                    <p class="portfolio__text">
                        {{ project.text }}
                        <button class="portfolio__button">
                            <a :href="project.link" target="_blank">Ir para o projeto</a>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Projects',
        data() {
            return {
                projects: [
                    {
                        link: "https://buscarceps.netlify.app/",
                        image: "https://user-images.githubusercontent.com/74377158/181602722-bbf67a05-9ea3-4c19-9a85-1d0f237515c3.jpg",
                        name: "buscar cep",
                        text: "Projeto de buscar cep usando a api do viaCep. Para fazer a requisição da api utilizei a função fetch()."
                    },
                    {
                        link: "https://github.com/Vinicius-Boschi/Filmes",
                        image: "https://user-images.githubusercontent.com/74377158/181602651-bc107309-7646-4a5b-a7ba-916a526bb818.jpg",
                        name: "filmes",
                        text: "Projeto que mostra os filmes mais recentes lançados, também podendo favoritar/desfavoritar os filmes de acordo com o seu gosto. Utiliza-se o async fetch() para a requisição da api do The Movie Database."
                    },
                    {
                        link: "https://playerofmusics.netlify.app/",
                        image: "https://user-images.githubusercontent.com/74377158/181602614-afb8a293-156b-45d9-95e4-3c077f66f317.jpg",
                        name: "player de música",
                        text: "Projeto feito para similar ao Spotify, podendo pular, voltar, dar play e pause nas músicas."
                    },
                    {
                        link: "https://weathercitys.netlify.app/",
                        image: "https://user-images.githubusercontent.com/74377158/181602562-972e9d64-ee52-4098-a047-a92a3c88d5fd.jpg",
                        name: "climatempo",
                        text: "Projeto de clima que mostra o clima da cidade de São Paulo por padrão, mas também pode mostrar o das outras cidades apenas pesquisando por elas no campo de pesquisa."
                    },
                    {
                        link: "https://github.com/Vinicius-Boschi/DoguitoPet-Shop",
                        image: "https://user-images.githubusercontent.com/74377158/185706080-c4a50c29-624c-470a-8586-6a91472ea0d4.jpg",
                        name: "doguito pet shop",
                        text: "Site de pet shop que busca mostrar os conceitos do crud. Podendo cadastrar no site, cadastrar cliente na lista, editar e excluir."
                    },
                    {
                        link: "https://github.com/Vinicius-Boschi/Boschis-Tech",
                        image: "https://user-images.githubusercontent.com/74377158/184989025-5d3fc441-be27-495f-98c1-278c7d7e8f6b.jpg",
                        name: "boschi's tech",
                        text: "Site para organizar a vida financeira podendo adicionar os gasto e editar eles como quiser."
                    },
                    {
                        link: "https://pokedexapipokemon.netlify.app/",
                        image: "https://user-images.githubusercontent.com/74377158/177438025-ccd8a8f7-f445-4214-9a91-6251f848e799.jpg",
                        name: "pokedex",
                        text: "Projeto de Pokedex para conter várias informações dos pokémons e também treinar requisição de api usando o fetch()."
                    },
                    {
                        link: "https://adopetalura.netlify.app/",
                            image: "https://user-images.githubusercontent.com/74377158/178602779-ecd6cf5f-0562-47bb-9316-3795ff660099.jpg",
                        name: "adoPet alura",
                        text: "Site que contém alguns animais que podem ser adotados. E podendo treinar construção de formulários."
                    },
                    {
                        link: "https://dashboardstarwars.netlify.app/",
                        image: "https://user-images.githubusercontent.com/74377158/181092726-cf0b5406-1326-4b00-8212-66be228aff16.jpg",
                        name: "star wars",
                        text: "Projeto feito para conter todas as informações do mundo do Star Wars e também aprendendo a usar o axios()."
                    },
                    {
                        link: "https://replicaofnetflix.netlify.app/",
                        image: "https://user-images.githubusercontent.com/74377158/187551815-6a7bf0aa-2fb8-475e-99cc-1c50753bbcc4.jpg",
                        name: "clone netflix",
                        text: "Projeto do 7 days of code da Alura, que consiste em replicar o famoso site da Netflix."
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/variables.scss';
    
    .portfolio {
        background: $dark-gray;
        display: flex;
        flex-direction: column;
        align-items: center;

    &__title {
        text-align: center; 
        font-family: $fontRoboto;
        font-size: 1.8rem;
        color: #E7E8E9;
        padding-top: 2rem;
        margin-bottom: 2rem;
    }

    &__infos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
    
        @include for-phone-only {
            grid-template-columns: repeat(1, 1fr);
        }
    
        @include for-tablet-only {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    &__content {
        width: 250px;
        height: 300px;
        background: #000;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: all 0.25s ease;
        backface-visibility: hidden;
        margin-bottom: 1rem;
        border: 2px solid #E7E8E9;
        
        &:hover {
            transform: translateY(-10px) scale(1);
            box-shadow: 5px 5px $white;
        }
        
        &::after {
            width: 100%;
            content: '';
            left: 0px;
            bottom: 0px;
            height: 150px;
            position: absolute;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1));
            z-index: 20;
            transition: all 0.25s ease;
        }
        
        &:hover::after {
            height: 280px;
        }
    }

    &__img {
        height: 100%;
    }

    &__container {
        z-index: 30;
        position: absolute;
        bottom: 0px;
        color: $white;
        padding: 20px;
        padding-bottom: 30px;
    }

    &__h2 {
        color: $white;
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 2;
        text-transform: capitalize;
        margin-top: -1rem;
    }

    &__text {
        font-size: 0.8rem;
        opacity: 0;
        margin-bottom: -170px;
        transition: all 0.25s ease;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
    }

    &__content:hover &__container &__text {
        margin-bottom: 0px;
        opacity: 1;
    }

    &__button {
        padding: 7px 17px;
        border-radius: 12px;
        background: transparent;
        border: 2px solid #FFFFFF;
        color: #FFFFFF;
        margin-top: 10px;
        margin-left: auto;
        cursor: pointer;
        transition: all 0.25s ease;
        font-size: 0.75rem;
        outline: none;
            
        &:hover {
            background: #FFFFFF;
            color: #000000;
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>