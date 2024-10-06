<template>
    <div class="body" :class="{active : is_nav_open}">
      <Header />
      <Nav />
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </template>
  
<script>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
import Nav from '@/components/layouts/Nav.vue';
import { mapGetters, mapActions } from 'vuex';
  
export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Footer,
        Nav,
    },
    computed: {
        ...mapGetters({
            deviceWidth: 'device/deviceWidth', // Using mapGetters with absolute path
            is_nav_open: 'nav/is_nav_open',
        }),
    },
    methods: {
        ...mapActions({
            setDeviceWidth: 'device/setWidth', // Action to set the width in Vuex
        }),
        handleResize() {
            const width = window.innerWidth; // Get the current window width
            this.setDeviceWidth(width); // Dispatch the action to set width in Vuex
        },
    },
    mounted() {
        // Set the initial width when mounted
        this.handleResize(); // Call the method to set the initial width
        // Add event listener on mounted
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        // Cleanup event listener on unmounted
        window.removeEventListener('resize', this.handleResize);
    },
};
</script>
  
<style lang="scss" scoped>
</style>
  