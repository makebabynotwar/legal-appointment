<template>
    <div>
        <Header/>
            <main>
                <router-view />
            </main>
        <Footer/>
    </div>
</template>
  
<script>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
export default {
name: 'DefaultLayout',
components:{
    Header,
    Footer
}
};

</script>
  
<style lang="scss" scoped>

</style>
  