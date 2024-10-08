<template>
    <div class="login_area">
        <div class="wrapper">
            <div class="login_con">
    
                <div class="login_form">
                    <div class="login_header">
                        <h2>Login</h2>
                        <p>Enter your email address and password to login.</p>
                    </div>
                    <div class="custom_form">
                        <div class="fields">
                            <label>Email Address</label>
                            <input class="g-input outline" type="text"/>
                        </div>
                        <div class="fields">
                            <label>Password</label>
                            <input class="g-input outline" type="text"/>
                        </div>
                        <div class="fields flex_space">
                            <div class="custom_checkbox">
                                <input id="remember_me" name="remember_me" v-model="remember_me"  type="checkbox" checked="checked"> 
                                <label for="remember_me" class="flex_no_align"><i class="icon_check"></i> <span class="checkbox_text">Remember me</span></label>
                            </div>
                            <router-link class="link" to="/forgot-password">Forgot password?</router-link>
                            
                        </div>
                    </div>
                    <a class="g-button sign_in">SIGN IN</a>
                </div>
    
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data(){
        return {
            remember_me : false,
        }
    },
    created(){ 
        this.$store.dispatch('title/setTitle', 'Login');
    },
}
</script>