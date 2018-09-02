<template>
    <div>
        <div class="container contHeard">
            <!--头部-->
            <div class="row fixTop whcenter">
                <div class="seachIptD ">
                    <img src="../assets/static/img/indexSearchIcon.png" height="20" class="seachIcon" alt="">
                    <input class="seachIpt" type="text" placeholder="搜索">
                    <!--<img src="../assets/static/img/indexSearchDelIcon.png" height="20" class="searchDelIcon" alt="">-->
                    <!--<span class="seachFont">取消</span>-->
                </div>
            </div>
        </div>
        <!--页面内容-->
        <div class="container p0 mT25">
                <div @click="goPageJob" v-for="item in arrItem" class="indexCuntD">
                    <div>
                        <div><img v-bind:src="item.iconUrl" height="60" alt=""></div>
                        <div class="indexCunF">{{item.name}}</div>
                    </div>
                    <div>
                        <div class="indexCuntNum">{{item.jobVal}}</div>
                        <div class="indexCunF">职位</div>
                    </div>
                    <div>
                        <div class="indexCuntNum">{{item.resumeVal}}</div>
                        <div class="indexCunF">简历</div>
                    </div>
                </div>
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
            jobVal: 123,
            resumeVal: 456
        },{
            name:'工程技术',
            iconUrl: technical,
            jobVal: 123,
            resumeVal: 456
        },{
            name:'科研辅助',
            iconUrl: scientific,
            jobVal: 123,
            resumeVal: 456
        },{
            name:'管理岗位',
            iconUrl:manage,
            jobVal: 123,
            resumeVal: 456
        },{
            name:'技能',
            iconUrl:skill,
            jobVal: 123,
            resumeVal: 456
        },{
            name:'其他',
            iconUrl:other,
            jobVal: 123,
            resumeVal: 456
        }
    ]
    export default {
        name: "home",
        data(){
            return{
                arrItem: dataInfo
            }
        },
        methods: {
            goPageJob(){
                let _this = this;
                _this.$router.push({
                    name: 'job'
                });
                _this.$parent.navMenuRefVal(2);
            }
        },
        mounted() {//页面加载后调用
            let _this = this;
        }
    }
</script>

<style scoped>

</style>