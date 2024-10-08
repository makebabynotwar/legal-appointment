<template>
<div class="editorial_area">

    <div class="wrapper">

        <div class="editorial_area_con">

            <div class="editorial_title">
                <h2>Editorials</h2>
                <router-link to="/editorials">View all editorials</router-link>
                
            </div>
            <EditorialList :featured="true" />
            

        </div>

    </div>

</div>
</template>

<script>
import EditorialList from '@/components/EditorialList';
export default {
    components: { EditorialList },
    name: 'AppEditorials', // Ensure the name matches the multi-word requirement
}
</script>

<style lang="scss" scoped>

</style>