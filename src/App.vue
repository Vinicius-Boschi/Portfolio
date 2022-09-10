<template>
  <Preloader :preloader="logo_src" :alt="logo_name" />
  <Header />
  <About />
  <Skills />
  <Projects />
  <Footer />
  <BackToTop />
</template>

<script>
  
  import Preloader from './components/Preloader.vue'
  import Header from './components/Header.vue'
  import About from './components/About.vue'
  import Skills from './components/Skills.vue'
  import Projects from './components/Projects.vue'
  import Footer from './components/Footer.vue'
  import BackToTop from './components/BackToTop.vue'

  export default {
    components: {
    Preloader,
    Header,
    About,
    Skills,
    Projects,
    Footer,
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

  * {
    scroll-behavior: smooth;
  }

  #app {
    font-family: "Arima", cursive;
  }
</style>