<template>
  <div class="loginContainer">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      v-loading="loading"
      element-loading-text="loading..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      label-width="80px"
      class="demo-ruleForm">

      <el-form-item label="Account" prop="account">
        <el-input v-model="loginForm.account" placeholder="  input your account"></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="loginForm.password"
                  placeholder="  input your password"
                  @keydown.enter.native="submitLogin('loginForm')"></el-input>
      </el-form-item>

      <el-button size="normal" type="primary" style="width: 100%; margin-top: 10px; "
                 @click="submitLogin('loginForm')">Login
      </el-button>

      <el-link type="primary" :underline="false" @click="submitRegister"
               style="width: 50%; text-align: left; margin-top: 10px; ">register
      </el-link>

      <el-link type="warning" :underline="false" @click="submitForgetPwd"
               style="width: 50%; alignment: right; margin-top: 10px; ">
        forget password
      </el-link>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loading: false,
        loginForm: {
          account: '',
          password: '',
        },
        rules: {
          account: [
            {
              required: true,
              message: 'please input account',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 18,
              message: 'length between 6 and 18',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: 'please input password',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 18,
              message: 'length between 6 and 18',
              trigger: 'blur'
            }
          ],
        }
      };
    },
    methods: {
      submitForgetPwd() {
        alert('forget your password? no way');
      },
      submitRegister() {
        alert('forget your password? no way');
      },
      submitLogin(loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            alert('submit!  -->' + valid);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
  };
</script>


<style>
  .loginContainer {
    width: 350px;
    margin: 280px auto;
  }

  .loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
  }
</style>
