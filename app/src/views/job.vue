<template>
    <div>
        <div class="container contHeard">
            <!--头部-->
            <div class="row fixTop">
                <div class="col-xs-4 contHeardImg"><img width="30px" src="../assets/static/img/searchIcon.png" alt=""></div>
                <div class="col-xs-8">
                    <div class="btn-group">
                        <a class="btn noBG dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            全部职位 <span class="caret border8"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-mW100">
                            <li><a href="javascript:;">技能</a></li>
                            <li><a href="javascript:;">专技</a></li>
                            <li><a href="javascript:;">博后</a></li>
                            <li><a href="javascript:;">管理</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!--页面内容-->
        <div class="container p0">
            <!--arrPostPage-->
            <div class="jobCunt" @click="goPageDet(item)" v-for="item in arrPostPage">
                <div>
                    <!--研究类-->
                    <img v-if="item.postType == 'research'" src="../assets/static/img/postbo.png" width="40%" alt="">
                    <p class="fs1d5" v-if="item.postType == 'research'">研究</p>
                    <!--管理岗位-->
                    <img v-if="item.postType == 'managePost'" src="../assets/static/img/manage.png" width="40%" alt="">
                    <p class="fs1d5" v-if="item.postType == 'managePost'">管理岗位</p>
                    <!--工程技术类-->
                    <img v-if="item.postType == 'engineeringTech'" src="../assets/static/img/technical.png" width="40%" alt="">
                    <p class="fs1d5" v-if="item.postType == 'engineeringTech'">工程技术</p>
                    <!--科研辅助类-->
                    <img v-if="item.postType == 'scientificAssist'" src="../assets/static/img/postbo.png" width="40%" alt="">
                    <p class="fs1d5" v-if="item.postType == 'scientificAssist'">科研辅助</p>
                    <!--技能-->
                    <img v-if="item.postType == 'technical'" src="../assets/static/img/skill.png" width="40%" alt="">
                    <p class="fs1d5" v-if="item.postType == 'technical'">技能</p>
                    <!--其他-->
                    <img v-if="item.postType == 'otherPost'" src="../assets/static/img/postbo.png" width="40%" alt="">
                    <p class="fs1d5" v-if="item.postType == 'otherPost'">其他</p>
                </div>

                <div>
                    <p class="fs1d8">{{item.name}}</p>
                    <div class="disFlx">
                        <!--职业性质{{item.property}}-->
                        <!--学科类别{{item.science}}-->
                        <p class="classifyD"><span><i></i>{{item.property}}</span></p>
                        <p class="degreeD">
                            <span>
                                <i></i>
                                {{item.eduRequire}}
                                <span v-if="item.eduRequireAndOver == 1">及以上</span>
                            </span>
                        </p>
                        <p class="peopleNumD"><span><i></i>{{item.requireNum}}人</span></p>
                        <p class="addressD"><span><i></i>{{item.workAddress}}</span></p>
                        <p class="time01D"><span><i></i>{{item.publishDate | toTime}}</span></p>
                        <p class="time02D"><span><i></i>{{item.endDate | toTime}}</span></p>
                    </div>
                    <div class="jobLookSD">
                        <span>
                            <img src="../assets/static/img/check.png" height="20px" alt="">
                            {{item.viewCount}}
                        </span>
                        <span>
                            <img src="../assets/static/img/send.png" height="20px" alt="">
                            {{item.postCount}}
                        </span>
                    </div>
                </div>
                <!--<div>
                    &lt;!&ndash;查看次数 {{item.viewCount}}&ndash;&gt;
                    <a href="resume.html">
                        &lt;!&ndash;投递次数&ndash;&gt;
                        <span class="resumeN">{{item.postCount}}</span>
                        <p class="fs1d5">简历</p>
                    </a>
                </div>-->
            </div>
            <!--技能-->
            <!--<div class="jobCunt">
                <div>
                    <img width="40%" src="../assets/static/img/skill.png" alt="">
                    <p class="fs1d5">技能</p>
                </div>
                <div>
                    <a href="details.html">
                        <p class="fs1d8">机床结构设计及优化</p>
                        <div class="disFlx">
                            <p class="classifyD"><i></i>自动化控制</p>
                            <p class="degreeD"><i></i>博士</p>
                            <p class="addressD"><i></i>成都市</p>
                            <p class="peopleNumD"><i></i>3人</p>
                            <p class="time01D"><i></i>2018-10-01</p>
                            <p class="time02D"><i></i>2018-10-10</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="resume.html">
                        <span class="resumeN">123</span>
                        <p class="fs1d5">简历</p>
                    </a>
                </div>
            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "job",
        data(){
            return{
                item: {},
                arrPostPage: []
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
            goPageDet(item){
                let _this = this;
                console.log(item.id);
                _this.$router.push({
                    name: 'jobDetails',
                    query: {jobId: item.id}
                });
            },
            getPostPage(){
                let dataGet = {
                    isOnline:1,
                    name:"",
                    pageIndex:1,
                    pageSize:5
                };
                let _this = this;
                let data = {
                    url: _this.GLOBAL.requestPath + '/postInfo/searchPostInfoForPage.action',
                    data: dataGet,
                    fn(data){
                        _this.arrPostPage = data.post;
                        console.log(data);
                    }
                }
                _this.GLOBAL.getRequest(data);
            }
        },
        mounted() {//页面加载后调用
            let _this = this;
            _this.getPostPage();
        }
    }
</script>

<style scoped>

</style>