<template>
    <!--页面内容-->
    <div class="container p0">
        <div class="textC myHeardD">
            <p class="mB30 fs1d75">我的</p>
            <img height="100" src="../assets/static/img/userLogo.png" class="mB10" alt="">
            <p class="fs1d5 cfff">激光聚变研究中心 - 804室</p>
        </div>
        <div class="myTab">
            <div @click="changArrItem(index)" :class="arrNavIndex == index ? 'active' : ''" v-for="(item,index) in arrNav">
                <span>{{item.name}}</span>
                <p>{{item.val}}</p>
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
            <a @click="loginGo">退出登录</a>
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
    let arrNavInfo = [
        {
            name:"简历",
            val:"124"
        },
        {
            name:"职位",
            val:"745"
        },
        {
            name:"收藏",
            val:"784"
        },
        {
            name:"不合适",
            val:"457"
        }

    ];
    let dataInfo = {
        dataInfo1: [
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
        ],
        dataInfo2: [
            {
                name:'研究',
                iconUrl: postbo,
                resumeVal: 485
            },{
                name:'工程技术',
                iconUrl: technical,
                resumeVal: 752
            },{
                name:'科研辅助',
                iconUrl: scientific,
                resumeVal: 142
            },{
                name:'管理岗位',
                iconUrl:manage,
                resumeVal: 214
            },{
                name:'技能',
                iconUrl:skill,
                resumeVal: 214
            },{
                name:'其他',
                iconUrl:other,
                resumeVal: 213
            }
        ],
        dataInfo3: [
            {
                name:'研究',
                iconUrl: postbo,
                resumeVal: 785
            },{
                name:'工程技术',
                iconUrl: technical,
                resumeVal: 245
            },{
                name:'科研辅助',
                iconUrl: scientific,
                resumeVal: 147
            },{
                name:'管理岗位',
                iconUrl:manage,
                resumeVal: 578
            },{
                name:'技能',
                iconUrl:skill,
                resumeVal: 475
            },{
                name:'其他',
                iconUrl:other,
                resumeVal: 357
            }
        ],
        dataInfo4: [
            {
                name:'研究',
                iconUrl: postbo,
                resumeVal: 451
            },{
                name:'工程技术',
                iconUrl: technical,
                resumeVal: 354
            },{
                name:'科研辅助',
                iconUrl: scientific,
                resumeVal: 333
            },{
                name:'管理岗位',
                iconUrl:manage,
                resumeVal: 145
            },{
                name:'技能',
                iconUrl:skill,
                resumeVal: 783
            },{
                name:'其他',
                iconUrl:other,
                resumeVal: 145
            }
        ]
    }
    export default {
        name: "user",
        data(){
            return{
                arrItem: dataInfo.dataInfo1,
                arrNav: arrNavInfo,
                arrNavIndex: 0,
                userData:{
                    userName:'',
                    password:''
                }
            }
        },
        methods: {
            changArrItem(index){
                let _this = this;
                let _index = 'dataInfo' + (index + 1);
                _this.arrNavIndex = index;
                _this.arrItem = dataInfo[_index];
            },
            changePasswordGo(){
                this.$router.push({
                    name: 'changePassword'
                });
            },
            loginGo(){
                sessionStorage.setItem('user', '');
                this.$router.push({
                    name: 'login'
                });
            }
        }
    }
</script>

<style scoped>

</style>
