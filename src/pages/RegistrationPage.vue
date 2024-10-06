<template>
    <div class="login_area">
        <div class="wrapper">
            <div class="login_con">

                <div class="login_form register">
                    <div class="login_header">
                        <h2>Registration Form</h2>
                    </div>
                    <div class="custom_form">
                        <div class="fields">
                            <label>Full Name</label>
                            <input class="g-input outline" type="text"/>
                        </div>
                        <div class="fields">
                            <label>Email Address</label>
                            <input class="g-input outline" type="text"/>
                        </div>
                        <div class="fields">
                            <label>Phone Number</label>
                            <input class="g-input outline" type="text"/>
                        </div>
                        <div class="fields">
                            <label>Password</label>
                            <input class="g-input outline" type="text"/>
                        </div>
                        <div class="fields">
                            <label>Confirm Password</label>
                            <input class="g-input outline" type="text"/>
                        </div>
                    </div>
                    <a class="g-button sign_in">REGISTER</a>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    created(){
        this.$store.dispatch('title/setTitle', 'Register');
    },
}
</script>