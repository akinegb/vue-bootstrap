<template>
  <main class="gradient">
    <Header/>
    <div class="container">
      <div class="base">
        <PageHeading :title="title"/>
        <slot/>
      </div>
    </div>
    <Footer/>
  </main>
</template>
<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeading from '../components/PageHeading'

export default {
  name: "Page",
  props: ['title'],
  components: { Header, PageHeading, Footer }
}
</script>
<style lang="scss">

  .base {
    min-height: calc(100vh - 320px);
  }

  .container {
    max-width: 1020px;
    padding: 20px;
    margin: 0 auto;
    width: calc(100% - 40px);
  }

  .gradient {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: .6;
      z-index: -99;
      background-image: linear-gradient(#000, transparent);
    }
  }
</style>
