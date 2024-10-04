<template>
    <div class="pricing-page">
        Pricing Page
    </div>
</template>
  
<script>
export default {
    created(){
        this.$store.dispatch('title/setTitle', 'Pricing');
    },
}
</script>   