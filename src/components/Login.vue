<template>
  <el-form ref="AccountForm" :model="account" class="demo-ruleForm login-container" :rules="rules">
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="username">
          <el-input type="text" v-model="account.username" aria-placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
          <el-input type="pwd" v-model="account.pwd" aria-placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" style="width:100%" :loading="logining">登录</el-button>
      </el-form-item>
  </el-form>
</template>

<script>
import { requestLogin } from '../api/api.js';
export default {
  data() {
    return {
        logining:false,
        account: {
            username: 'admin',
            pwd: '123456'
        },
        rules:{
            username: [
            {required: true,message:'请输入帐号',trigger:'blur'}
        ],
            pwd: [
            {required: true,message: '请输入密码',trigger:'blur'}
        ]
        },
      }
  },
  methods:{
      handleLogin(){
          this.$refs.AccountForm.validate((valid)=>{
              if(valid){
                  this.logining = false;
                  //NProgress.start()
                  var loginParams = { username: this.account.username,password:this.account.password}
                  requestLogin(loginParams).then(data=>{
                      this.logining = false;
                      //NProgress.done();
                      let {msg,code,user} = data;
                      if(code !== 200){
                          this.$message({
                              message:msg,
                              type:'error'
                          });
                      }else{
                          sessionStorage.setItem('access-user',JSON.stringify(user));
                          this.$router.push({ path:'/' });
                      }
                  });
              }else{
                  console.log('error submit!!');
                  return false;
              }
          })
      }
  },
  checked: true
}
</script>

<style>
    body{
        background:#324157;
    }
</style>
<style lang="scss" scoped>
    .login-container{
        -webkit-border-radius:5px;
        border-radius: 5px;
        -moz-border-radius:5px;
        background-clip: padding-box;
        margin: 160px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;

        background: -ms-linear-gradient(top, #fff, #6495ed);        /* IE 10 */
        background:-moz-linear-gradient(top,#b8c4cb,#f6f6f8);/*火狐*/
        background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#b8c4cb), to(#f6f6f8));/*谷歌*/
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fff), to(#6495ed));      /* Safari 4-5, Chrome 1-9*/
        background: -webkit-linear-gradient(top, #fff, #6495ed,#fff);   /*Safari5.1 Chrome 10+*/
        background: -o-linear-gradient(top, #fff, #6495ed);  /*Opera 11.10+*/        
    }
    .title{
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }
</style>

