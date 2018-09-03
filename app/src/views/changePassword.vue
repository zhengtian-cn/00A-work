<template>
    <div>
        <div class="container contHeard">
            <!--头部-->
            <div class="row fixTop">
                <div class="col-xs-4 contHeardImg"><img onclick="javascript:history.back(-1)" height="20px" src="../assets/static/img/goBackIcon.png" alt=""></div>
                <div class="col-xs-8">
                    <div class="btn-group">
                        <a class="btn noBG dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            修改密码
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!--页面内容-->
        <div class="container p0">
            <div class="changPtitle">如忘记旧密码请联系后台管理人员</div>
            <div class="changPMain">
                <div class="changPMsg">
                    <p class="caaa">账号</p>
                    <span class="caaa">{{user.userName}}</span>
                    <p>旧密码</p>
                    <input v-model="padOld" type="password" placeholder="填写旧密码">
                    <p>新密码</p>
                    <input v-model="padNew.one" type="password" placeholder="填写新密码">
                    <p>确认密码</p>
                    <input v-model="padNew.two" type="password" placeholder="再次填写确认">
                </div>
            </div>
            <div class="changPtip">密码必须是<span>8-16</span>位 数字/字母/字符两种组合</div>
        </div>

        <!--底部-->
        <div class="container pB100">
            <div class="whAround changPBtnD">
                <div class="changPBtn"><a @click="changPadBtn">确定</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "change-password",
      data(){
        return{
          user:'',
          padOld:'',
          padNew:{
            one:'',
            two:''
          }
        }
      },
      methods: {
        changPadBtn(){
          let _this = this;
          if (_this.padOld != _this.user.padOld){
            alert('旧密码错误，请重新填写');
          }else {
            if (_this.padNew.one != _this.padNew.two){
              alert('新密码不一致，请重新填写');
            }else {
              let data = {
                url: _this.GLOBAL.requestPath + '/f/org/user/modifyPassword.action',
                data:{userCode:_this.user.userCode,password:_this.padNew.one},
                fn(data){
                  console.log(data);
                  if (data.result){
                    alert('修改成功');
                    sessionStorage.setItem('user', '');
                    _this.$router.push({
                      name: 'login'
                    });
                  }else {
                    alert('修改失败');
                  }
                }
              }
              _this.GLOBAL.getRequest(data);
            }
          }
        }
      },
      mounted: function() {//页面加载后调用
        let _this = this;
        _this.user = JSON.parse(sessionStorage.getItem('user'));
      }
    }
</script>

<style scoped>

</style>
