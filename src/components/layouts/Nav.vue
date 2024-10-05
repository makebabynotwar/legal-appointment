<template>

    <div id="nav_area">

        <nav class="page_nav">
            <!-- <a href="javascript:;"><figure><img src="@/assets/images/main_logo.png" alt="Smart Legal Appoinment System"></figure></a> -->
            <div class="menu_slide_right">
                <a href="javascript:;" class="logo_slide_right"><figure><img src="@/assets/images/main_logo.png" alt="Smart Legal Appoinment System"></figure></a>
                <button @click="toggleNav" class="bar">
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </button>

				<div class="clearfix"></div>
			</div>
            <div class="wrapper">

                <ul>
                    <li><a href="javascript:;">HOME</a></li>
                    <li><a href="javascript:;">PRACTICES</a></li>
                    <li><a href="javascript:;">REVIEWS</a></li>
                    <li><a href="javascript:;">PRICING</a></li>
                    <li><a href="javascript:;">CONTACT US</a></li>
                </ul>

            </div>

        </nav>

    </div>

</template>

<script>
import { mapGetters } from 'vuex';
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
        }),
    },
    mounted() {
        window.addEventListener('resize', this.updateWindowWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateWindowWidth);
    },
    methods: {
        updateWindowWidth() {
            this.windowWidth = window.innerWidth; // Update the window width when resized
        }
    }
}
</script>

<style lang="scss" scoped>

</style>