<template>
    <div>
        <Header/>
        <Nav/>
            <main>
                <router-view />
            </main>
        <Footer/>
        
    </div>
</template>
  
<script>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
import Nav from '@/components/layouts/Nav.vue';
export default {
name: 'DefaultLayout',
components:{
    Header,
    Footer,
    Nav
}
};

</script>
  
<style lang="scss" scoped>

</style>
  