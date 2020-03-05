<template>
  <div id="main_content">
    <section>
      <div id="head">
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
          <el-input v-model="loginForm.account" placeholder="  input your account"></el-input>
        </el-form>
      </div>
      <div id="links">
        <a @click="submitLogin('loginForm')">login in</a>
      </div>
    </section>
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
        },
        rules: {
          account: [
            {
              required: false,
              message: 'please input account',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 16,
              message: 'length between 6 and 18',
              trigger: 'blur'
            }
          ]
        }
      };
    },
    methods: {
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
  #main_content {
    z-index: 2;
    position: relative;
    display: inline-block;

    /* Vertical center */
    top: 50%;
    transform: translateY(-50%);
  }

  #main_content h1 {
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'proxima-nova-condensed', Helvetica;
    color: #fff;
    font-size: 35px;
  }

  #main_content .sub_head {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
  }

  #main_content .info {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    margin-top: 10px;
  }

  #links {
    margin-top: 20px;
  }

  #links a {
    border: 2px solid rgba(255, 255, 255, 0.20);
    border-radius: 61px;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: none;
    padding: 10px 25px;
    display: inline-block;
    margin-right: 15px;
  }

</style>
