<template>
<div class="virtual_area">

    <div class="wrapper">
        
        <div class="virtual_area_con">

            <figure class="virtual_img">
                <img src="@/assets/images/virtual/virtual-img.png" />
            </figure>

            <div class="virtual_info">
                <h2>Virtual</h2>
                <p>Receiving legal service has never been this easy. 
                    If you cannot visit our office, we do legal service online. 
                    Call, email, text, whatever your way, we connect.
                </p>
                <router-link to="/login" class="g-button">Login</router-link>
            </div>

        </div>

    </div>

</div>
</template>

<script>
export default {
    name: 'AppVirtual',
}
</script>

<style lang="scss" scoped>

</style>