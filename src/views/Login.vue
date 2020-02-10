<template>

  <div class="navigationWrapper">
    <div class="content">
      <div class="content_container">
        <video class="bg_video" autoplay="" loop="loop" muted="">
          <source src="../assets/images/bg.mp4" type="video/mp4">
        </video>
        <div class="content_left">

          <img src="../assets/images/gerrard.png" alt="杰拉德">
        </div>
        <div class="content_right">


          <div>
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

                <el-form-item label="Account" prop="account" class="white_label">
                  <el-input v-model="loginForm.account"
                            placeholder="  input your account"></el-input>
                </el-form-item>

                <el-form-item label="Password" prop="password" class="white_label">
                  <el-input type="password" v-model="loginForm.password"
                            placeholder="  input your password" maxlength="16"
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
          </div>


        </div>
      </div>
    </div>
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
              max: 16,
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
        this.$message('just input account and password, then click register again.');
      },
      submitLogin(loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            // alert('submit!  -->' + valid);
            // 不会向history栈添加一个新纪录  直接替换掉了  所以无法点后退
            // router.replace(location, onComplete?, onAbort?)
            let path = this.$route.query.redirect;
            this.$router.replace((path == '/' || path == undefined) ? '/home' : path);
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

  .white_label .el-form-item__label {
    color: whitesmoke;
  }

  .loginContainer {
    width: 350px;
    margin: 0px auto;
  }

  .loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
  }

</style>
