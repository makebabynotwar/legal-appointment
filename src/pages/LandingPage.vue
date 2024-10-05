<template>
    <div class="landing-page">
        <Virtual/>
        <HomeSections/>
        <Editorials/>
        <Bottom/>
        <Bottom2/>
    </div>
</template>

<script>
import Virtual from '@/components/home/Virtual.vue';
import HomeSections from '@/components/home/HomeSections.vue';
import Editorials from '@/components/home/Editorials.vue';
import Bottom from '@/components/home/Bottom.vue';
import Bottom2 from '@/components/home/Bottom2.vue';
export default {
    components:{
        Virtual,
        HomeSections,
        Editorials,
        Bottom,
        Bottom2
    },
    created(){
        // Set tab title on browser
        this.$store.dispatch('title/setTitle', 'Home');
    },
}
</script>
