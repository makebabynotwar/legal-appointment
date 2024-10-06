<template>
    <div class="login_area">
        <div class="wrapper">
            <div class="login_con">

                <div class="login_form forgot_password">
                    <div class="Forgot your password?">
                        <h2>Registration Form</h2>
                        <p>Enter your email address below and we will send you a link to reset your password.</p>
                    </div>
                    <div class="custom_form">
                        <div class="fields">
                            <label>Email Address</label>
                            <input class="g-input outline" type="text"/>
                        </div>
                    </div>
                    <a class="g-button sign_in">Sign in</a>
                    <a href="javascript:;">Back to Login</a>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    created(){ 
        this.$store.dispatch('title/setTitle', 'ForgotPassword');
    },
}
</script> 