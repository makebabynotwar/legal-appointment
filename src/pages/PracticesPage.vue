<template>
    <div class="practices-page">
        Practices Page
    </div>
</template>
  
<script>
export default {
    created(){
        this.$store.dispatch('title/setTitle', 'Practices');
    },
}
</script>