<template>
    <header>

        <div class="wrapper">
            
            <div class="header_con">
                
    
                <div class="main_logo">
                    <router-link to="/"><figure><img src="@/assets/images/main_logo.png" alt="Smart Legal Appoinment System"></figure></router-link>
                </div>

                <!-- <div class="head_info">

                    <div class="header_info">
                        <h2>Call Us: <span><mark>559-738-3886</mark></span></h2>
                    </div>
                    <div class="header_email">
                        <h2>Email Us:<span><a href="mailto:kmingram@smtlg.com">kmingram@smtlg.com</a></span></h2>
                    </div>
                    <div class="header_button">
                        <a href="javascript:;">Request a Quote ››</a>
                    </div>
                </div> -->


                <button @click="toggleNav" class="bar" :class="{open : is_nav_open}">
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </button>

            </div>

          <div class="clearfix"></div>

        </div>

    </header>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';

export default {
    name: 'AppHeader', // Ensure the name matches the multi-word requirement,
    computed: {
        ...mapGetters({
            is_nav_open: 'nav/is_nav_open', // Using mapGetters with absolute path for navigation state
        }),
    },
    methods:{
        ...mapActions({
            toggleNav: 'nav/toggleNav', // Action to toggle navigation state
        }),
    }
}
</script>

<style lang="scss" scoped>

</style>