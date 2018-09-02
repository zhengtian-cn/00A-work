<template>
    <div>
        <div class="container contHeard">
            <!--头部-->
            <div class="row fixTop">
                <div class="col-xs-4 contHeardImg"><img onclick="javascript:history.back(-1)" height="20px" src="../assets/static/img/goBackIcon.png" alt=""></div>
                <div class="col-xs-8">
                    <div class="btn-group">
                        <a class="btn noBG dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            职位详情
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!--页面内容-->
        <div class="container p0">
            <div class="w96pre">
                <div class="detClassD">
                    <p class="fs1d75 fw6 c000">{{item.name}}</p>
                    <p class="detClassIcon c3995e8">
                        <!--研究类-->
                        <img v-if="item.postType == 'research'" width="20px" src="../assets/static/img/postbo.png" alt="">
                        <span v-if="item.postType == 'research'">&nbsp;研究</span>
                        <!--管理岗位-->
                        <img v-if="item.postType == 'managePost'" width="20px" src="../assets/static/img/manage.png" alt="">
                        <span v-if="item.postType == 'managePost'">&nbsp;管理岗位</span>
                        <!--工程技术类-->
                        <img v-if="item.postType == 'engineeringTech'" width="20px" src="../assets/static/img/technical.png" alt="">
                        <span v-if="item.postType == 'engineeringTech'">&nbsp;工程技术</span>
                        <!--科研辅助类-->
                        <img v-if="item.postType == 'scientificAssist'" width="20px" src="../assets/static/img/postbo.png" alt="">
                        <span v-if="item.postType == 'scientificAssist'">&nbsp;科研辅助</span>
                        <!--技能-->
                        <img v-if="item.postType == 'technical'" width="20px" src="../assets/static/img/skill.png" alt="">
                        <span v-if="item.postType == 'technical'">&nbsp;技能</span>
                        <!--其他-->
                        <img v-if="item.postType == 'otherPost'" width="20px" src="../assets/static/img/postbo.png" alt="">
                        <span v-if="item.postType == 'otherPost'">&nbsp;其他</span>
                    </p>
                </div>
                <div class="mB10 whBetween pR3rem">
                    <span><img src="../assets/static/img/detaIcon01.png" width="18px" alt="">&nbsp;{{item.publishDept}}</span>
                    <div>
                        <img src="../assets/static/img/check.png" height="20px" alt="">
                        {{item.viewCount}} 次
                    </div>
                    <!--查看次数{{item.viewCount}}-->
                </div>
                <div class="mB10 hCenter">
                    <img src="../assets/static/img/detaIcon02.png" width="18px" alt="">&nbsp;
                    <!--学科类别-->
                    {{item.science}}
                </div>
                <div class="resumeCmsgD">
                    <p>
                        <i class="resume04Icon"></i>
                        {{item.workYear}}年
                        <span v-if="item.workYearAndOver == 1">及以上</span>
                    </p>
                    <p>
                        <i class="resume06Icon"></i>
                        {{item.eduRequire}}
                        <span v-if="eduRequireAndOver == 1">及以上</span>
                    </p>
                    <p><i class="peopleNumIcon"></i>{{item.requireNum}}人</p>
                    <p><i class="addressIcon"></i>{{item.workAddress}}</p>
                    <p><i class="time01Icon"></i>{{item.publishDate | toTime}}</p>
                    <p><i class="time02Icon"></i>{{item.endDate | toTime}}</p>
                </div>
            </div>
            <div class="w96pre">
                <div class="c000 mB10 detMsgD"><img width="16" src="../assets/static/img/detaIcon03.png" class="mR10" alt="">职位描述</div>
                <div>{{item.remark}}</div>
                <!--<div>
                    <p>负责非球面类元件超精密子口径抛光技术的研究及其工程化应用，同时承担大口径非球面元件工程供货任务。承担的主要工作及期望结果如下：</p>
                    <div class="subpTin2">
                        <p>1.非球面元件子口径抛光工艺研究，掌握适用于强激光需求的非球面光学元件的先进制造工艺方法；</p>
                        <p>2.非球面元件检测及质量评价，掌握主要特征参数表征方法，掌握非球面元件相关参数的质量评价体系；</p>
                        <p>3.子口径抛光质量稳定性研究，管控工程化应用条件下的子口径抛光质量，及时发现并解决质量问题，改进优化加工工艺。</p>
                    </div>
                    <p>2018年工作目标：</p>
                    <div class="subpTin2">
                        <p>1）完成安全、质量、保密三大体系和子口径加工工艺等培训；</p>
                        <p>2）熟悉现有子口径抛光工艺、非球面检测及质量评价方法；</p>
                        <p>3）明确现有非球面元件子口径抛光中存在的问题并提出初步改进建议。</p>
                    </div>
                </div>-->
            </div>

            <div class="w96pre">
                <div class="c000 mB10 detMsgD"><img width="16" src="../assets/static/img/detaIcon04.png" class="mR10" alt="">单位介绍</div>
                <p class="textIn2">
                    中国工程物理研究院激光聚变研究中心组建于2000年4月，是中国工程物理院的重要科研实体单位之一，是从事惯性约束聚变（ICF）理论、实验、设计、生产的综合性国防科研机构,也是目前国内唯一的专业化激光聚变研究实体。单位主体座落在四川省绵阳市涪江之畔的科学城，在成都设有科研分支机构。现有事业编制工作人员680余人。
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "job-details",
        data(){
            return{
                jobId: this.$router.history.current.query.jobId,
                item: {}
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
            getAPost(){
                let _this = this;
                let data = {
                    url: _this.GLOBAL.requestPath + '/postInfo/searchPostInfoById.action',
                    data: {id:_this.jobId,isUpdateViewCount:true},
                    fn(data){
                        _this.item = data.post;
                        console.log(data);
                    }
                }
                _this.GLOBAL.getRequest(data);
            }
        },
        mounted() {//页面加载后调用
            let _this = this;
            _this.getAPost();
        }
    }
</script>

<style scoped>

</style>