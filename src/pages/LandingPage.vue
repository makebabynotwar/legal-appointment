<template>
    <div class="landing-page">
        Landing Page
    </div>
</template>

<script>
export default {
    created(){
        // Set tab title on browser
        this.$store.dispatch('title/setTitle', 'Home');
    },
}
</script>
