<template>
    <div>
        <div class="container contHeard">
            <!--头部-->
            <div class="row fixTop">
                <div class="col-xs-4 contHeardImg"><img @click="getResumeList" width="30px" src="../assets/static/img/searchIcon.png" alt=""></div>
                <div class="col-xs-8">
                    <div class="btn-group">
                        <a class="btn noBG dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            全部简历 <span class="caret border8"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-mW100">
                            <li><a href="javascript:;">研究</a></li>
                            <li><a href="javascript:;">工程技术</a></li>
                            <li><a href="javascript:;">科研辅助</a></li>
                            <li><a href="javascript:;">管理岗位</a></li>
                            <li><a href="javascript:;">技能</a></li>
                            <li><a href="javascript:;">其他</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!--页面内容-->
        <div class="container p0">
            <!--arrResumeList-->
            <div @click="goPageDet(item)" v-for="(item,index) in arrResumeList" class="resumeCunt">
                <div class="w30pre resumeCPop">
                    <div>
                        <i class="unreadIcon"></i>
                        <img width="70px" src="../assets/static/img/popImg01.png" alt="">
                    </div>
                    <p v-if="item.sex == 'female'">
                        <img src="../assets/static/img/resumeB.png" alt="">
                    </p>
                    <p v-if="item.sex == 'male'">
                        <svg class="icon sexNIcon" viewBox="0 0 1024 1024" version="1.1" p-id="3503"><path d="M871.23954853 174.85530706c-1.3256072-3.97682157-3.97682157-7.95364315-7.29083955-11.2676611-7.29083955-7.29083955-17.23289347-10.60485751-27.1749474-9.27925034h-194.86425695c-18.55850066 0-33.14017975 15.24448269-33.14017974 33.14017976s15.24448269 33.14017975 33.14017974 33.14017975h117.97903992l-177.63136348 177.63136347c-1.98841078 1.98841078-3.31401797 3.31401797-4.63962516 5.30242877-45.07064446-35.12859054-101.40895005-56.33830558-163.04968439-56.33830559-146.47959451 0-265.12143803 118.64184352-265.12143802 265.12143803s118.64184352 265.12143803 265.12143802 265.12143802 265.12143803-118.64184352 265.12143803-265.12143802c0-61.64073435-21.20971504-117.97903991-56.33830558-163.04968439 1.98841078-1.3256072 3.97682157-2.65121438 5.30242876-4.63962516l177.63136348-177.63136348v119.30464711c0 18.55850066 15.24448269 33.14017975 33.14017976 33.14017975s33.14017975-15.24448269 33.14017974-33.14017975v-198.84107851c1.3256072-4.63962516 0.66280359-9.27925033-1.32560718-12.59326832z m-456.00887342 636.29145127c-110.02539678 0-198.84107852-88.81568174-198.8410785-198.84107852s88.81568174-198.84107852 198.8410785-198.84107852 198.84107852 88.81568174 198.84107852 198.84107852-88.81568174 198.84107852-198.84107852 198.84107852z" fill="#9DBDFF" p-id="3504"></path></svg>
                    </p>
                </div>
                <div class="w70pre pR10">
                    <div class="fs1d5 fw6">{{item.name}}</div>
                    <div class="resumeCmsgD">
                        <p><i class="birthyIcon"></i>{{item.birthday | toTime}}</p>
                        <!--<p><i class="resume01Icon"></i>28</p>-->
                        <p v-if="item.politicallyState == 'concourse'"><i class="resume02Icon"></i>党员</p>
                        <p v-if="item.politicallyState == 'partyMember'"><i class="resume02Icon"></i>群众</p>
                        <p><i class="resume03Icon"></i>{{item.birthdayLocal}}</p>
                        <!--<p><i class="resume04Icon"></i>9年</p>-->
                        <p><i class="resume06Icon"></i>{{item.phase}}</p>
                        <p class="w66per"><i class="resume05Icon"></i>{{item.university}}</p>
                    </div>
                    <div class="whBetween">
                        <p>
                            <!--研究类-->
                            <img v-if="item.postType == 'research'" src="../assets/static/img/postbo.png" width="20px" alt="">
                            <!--管理岗位-->
                            <img v-if="item.postType == 'managePost'" src="../assets/static/img/manage.png" width="20px" alt="">
                            <!--工程技术类-->
                            <img v-if="item.postType == 'engineeringTech'" src="../assets/static/img/technical.png" width="20px" alt="">
                            <!--科研辅助类-->
                            <img v-if="item.postType == 'scientificAssist'" src="../assets/static/img/scientific.png" width="20px" alt="">
                            <!--技能-->
                            <img v-if="item.postType == 'technical'" src="../assets/static/img/skill.png" width="20px" alt="">
                            <!--其他-->
                            <img v-if="item.postType == 'otherPost'" src="../assets/static/img/other.png" width="20px" alt="">
                            <span class="fs1d3 mL5px ">{{item.postName}}</span>
                        </p>
                        <p><span class="fs0d875">{{item.sendDate | toTime}} 投递</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resume",
        data(){
            return{
                arrResumeList:[]
            }
        },
        // 设置过滤器
        filters: {
            toTime: function (value) {
                let date = new Date(value);
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                let D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate() + ' ';
                return Y+M+D;
            }
        },
        methods: {
            ff(){
                return 5
            },
            goPageDet(item){
                let _this = this;
                console.log(item.id);
                _this.$router.push({
                    name: 'resumeDetails',
                    query: {resumeId: item.id}
                });
            },
            getResumeList(){
                let _this = this;
                let dataGet = {
                    pageIndex:1,
                    pageSize:5,
                    action:"",
                    //以下都为输入框的内容，以后改为1个字段,没有实现搜索
                    name:"",
                    phase:"",
                    postName:""
                }
                let data = {
                    url: _this.GLOBAL.requestPath + '/resumeInfo/searchViewResumePostSendForPage.action',
                    data: dataGet,
                    fn(data){
                        _this.arrResumeList = data.resumes;
                        console.log(data);
                    }
                }
                _this.GLOBAL.getRequest(data);
            }
        },
        mounted: function() {//页面加载后调用
            let _this = this;
            _this.getResumeList();
        }
    }
</script>

<style scoped>

</style>
