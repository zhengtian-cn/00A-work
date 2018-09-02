<template>
    <div class="loginBg whcenter">
        <div>
            <p class="textC"><img src="../assets/static/img/logo.png" width="70%" alt=""></p>
            <div class="loginD">
                <div class="lodinTitleImg textC"><img height="60px" src="../assets/static/img/lodinTitle.png" alt=""></div>
                <p class="textC loginName">用户登录</p>
                <div class="loginIptD">
                    <p><input type="text" v-model="userData.userName" placeholder="请输入用户名"><img class="loginUserIcon" src="../assets/static/img/loginUser.png" alt=""></p>
                    <p><input type="password" v-model="userData.password" placeholder="请输入密码"><img class="loginUserIcon" src="../assets/static/img/loginPwd.png" alt=""></p>
                    <div class="whBetween fs0d875">
                        <div class="rembPwd">
                            <label>
                                <span>
                                    <input class="checkboxLogin" type="checkbox">
                                    <i>
                                        <svg class="icon" viewBox="0 0 1024 1024"><path d="M73.261049 510.372943c-15.680121-15.269775-16.035208-40.372499-0.766456-56.065923 15.255449-15.681144 40.358173-16.036231 56.051597-0.76748l264.555351 257.364579 499.404124-491.997434c15.612583-15.35164 40.700981-15.132652 56.05262 0.465604 15.35164 15.612583 15.145955 40.714284-0.465604 56.05262L421.066453 794.633079c-15.310707 15.07944-39.946804 15.21554-55.422264 0.151449L73.261049 510.372943z"></path></svg>
                                    </i>
                                </span>
                                记住密码
                            </label>
                        </div>
                        <!--<div>忘记密码</div>-->
                    </div>
                    <a @click="login" class="loginBtn">登录</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
      data(){
        return{
          userData:{
            userName:'',
            password:''
          }
        }
      },
      methods: {
        login(){
          let _this = this;
          console.log(_this.userData);
          let data = {
            url: _this.GLOBAL.requestPath + '/framework/acl/web2/listener/loginUserAndPwdListener/loginUserAndPwd.do',
            data:_this.userData,
            fn(data){
              if (data.result){
                data.user.padOld = _this.userData.password;
                sessionStorage.setItem('user', JSON.stringify(data.user));
                _this.$router.push({
                  name: 'home'
                });
              }else {
                alert(data.msg);
              }
            }
          }
          _this.GLOBAL.getRequest(data);
        }
      }
    }
</script>

<style scoped>
    .loginBg{
        background: #3894e7;
        top: 0;
    }
</style>
