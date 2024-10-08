<template>

    <div id="nav_area">
        <div class="toggle_right_nav" :class="{toggle_right_cont: is_nav_open}">
            <nav class="page_nav" :class="{toggle_right_style: is_nav_open}">
                <!-- <a href="javascript:;"><figure><img src="@/assets/images/main_logo.png" alt="Smart Legal Appoinment System"></figure></a> -->
                <div class="menu_slide_right">
                    <a href="javascript:;" class="logo_slide_right"><figure><img src="@/assets/images/main_logo.png" alt="Smart Legal Appoinment System"></figure></a>
                    <button @click="toggleNav" class="bar" :class="{open : is_nav_open}">
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </button>
    
                    <div class="clearfix"></div>
                </div>
                <div class="wrapper">
    
                    <ul>
                        <li><router-link to="/">HOME</router-link></li>
                        <li><router-link to="/practices">PRACTICES</router-link></li>
                        <li><router-link to="/reviews">REVIEWS</router-link></li>
                        <li><router-link to="/pricing">PRICING</router-link></li>
                        <li><router-link to="/login">LOGIN</router-link></li>
                    </ul>
    
                </div>
    
            </nav>
        </div>


    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'AppNav', // Ensure the name matches the multi-word requirement
    data() {
        return {
            windowWidth: window.innerWidth // Initialize with the current window width
        };
    },
    computed:{
        ...mapGetters({
            deviceWidth: 'device/deviceWidth', // Using mapGetters with absolute path
            is_nav_open: 'nav/is_nav_open',
        }),
    },
    mounted() {
        window.addEventListener('resize', this.updateWindowWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateWindowWidth);
    },
    methods: {
        ...mapActions({
            toggleNav: 'nav/toggleNav', // Action to toggle navigation state
        }),
        updateWindowWidth() {
            this.windowWidth = window.innerWidth; // Update the window width when resized
        }
    }
}
</script>

<style lang="scss" scoped>

</style>