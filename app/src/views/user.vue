<template>
    <!--页面内容-->
    <div class="container p0">
        <div class="textC myHeardD">
            <p class="mB30 fs1d75">我的</p>
            <img height="100" src="../assets/static/img/userLogo.png" class="mB10" alt="">
            <p class="fs1d5 cfff">激光聚变研究中心 - 804室</p>
        </div>
        <div class="myTab">
            <div class="active">
                <span>简历</span>
                <p>1234</p>
            </div>
            <div>
                <span>职位</span>
                <p>869</p>
            </div>
            <div>
                <span>收藏</span>
                <p>345</p>
            </div>
            <div>
                <span>不合适</span>
                <p>345</p>
            </div>
        </div>
        <div class="myTabSubD">
            <div v-for="item in arrItem">
                <p><img v-bind:src="item.iconUrl" height="20" alt=""></p>
                <p>{{item.resumeVal}}</p>
            </div>
        </div>
        <div class="H100"></div>
        <div class="myBtnD">
            <a @click="changePasswordGo">修改密码</a>
        </div>
        <div class="myBtnD">
            <a href="login.html">退出登录</a>
        </div>

    </div>
</template>

<script>
    import postbo from '../assets/static/img/postbo.png'
    import technical from '../assets/static/img/technical.png'
    import scientific from '../assets/static/img/scientific.png'
    import manage from '../assets/static/img/manage.png'
    import skill from '../assets/static/img/skill.png'
    import other from '../assets/static/img/other.png'
    let dataInfo = [
        {
            name:'研究',
            iconUrl: postbo,
            resumeVal: 456
        },{
            name:'工程技术',
            iconUrl: technical,
            resumeVal: 456
        },{
            name:'科研辅助',
            iconUrl: scientific,
            resumeVal: 456
        },{
            name:'管理岗位',
            iconUrl:manage,
            resumeVal: 456
        },{
            name:'技能',
            iconUrl:skill,
            resumeVal: 456
        },{
            name:'其他',
            iconUrl:other,
            resumeVal: 456
        }
    ]
    export default {
        name: "user",
        data(){
            return{
                arrItem: dataInfo,
                userData:{
                    userName:'',
                    password:''
                }
            }
        },
        methods: {
            changePasswordGo(){
                this.$router.push({
                    name: 'changePassword'
                });
            }
        }
    }
</script>

<style scoped>

</style>
