<template>
  <Preloader :preloader="logo_src" :alt="logo_name" />
  <Header />
  <About />

  <BackToTop />
</template>

<script>
  
  import Preloader from './components/Preloader.vue'
  import Header from './components/Header.vue'
  import About from './components/About.vue'
  import BackToTop from './components/BackToTop.vue'

  export default {
    components: {
    Preloader,
    Header,
    About,
    BackToTop
},
    data() {
      return {
        logo_src: '../public/img/video/preloader.gif',
        logo_name: 'Preloader'
      }
    },
    methods: {
      loadPreloader() {
        const preloader = document.querySelector('.preloader')

        window.addEventListener('load', () => {
          preloader.classList.add('hide-preloader')
        })
      }
    },
    mounted() {
      this.loadPreloader()
    }
  }

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Arima&family=Roboto&display=swap');

  #app {
    font-family: "Arima", cursive;
  }
</style>