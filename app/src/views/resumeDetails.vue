<template>
    <div>
        <div class="container contHeard">
            <!--头部-->
            <div class="row fixTop">
                <div class="col-xs-1 contHeardImg"><img onclick="javascript:history.back(-1)" height="20px" src="../assets/static/img/goBackIcon.png" alt=""></div>
                <div class="col-xs-8 textC">
                    <div class="btn-group">
                        <a class="btn noBG dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            简历详情
                        </a>
                    </div>
                </div>
                <div class="col-xs-1"><img height="20px" class="mT7" src="../assets/static/img/shar.png" alt=""></div>
            </div>
        </div>

        <!--页面内容-->
        <div class="container p0">
            <div class="posR borLR pT40 mTf5">
                <div class="resDetTbg"></div>
                <!--照片-->
                <!--{{item.employeePic}}-->
                <p class="textC"><img height="150" class="resDetImg" src="../assets/static/img/resmD01.jpg" alt=""></p>

                <p class="textC fs2d25 mT10">{{item.name}}
                  <span v-if="item.sex == 'female'">
                    <img src="../assets/static/img/resumeB.png" alt="">
                  </span>
                  <span v-if="item.sex == 'male'">
                    <svg class="icon sexNIcon" viewBox="0 0 1024 1024" version="1.1" p-id="3503"><path d="M871.23954853 174.85530706c-1.3256072-3.97682157-3.97682157-7.95364315-7.29083955-11.2676611-7.29083955-7.29083955-17.23289347-10.60485751-27.1749474-9.27925034h-194.86425695c-18.55850066 0-33.14017975 15.24448269-33.14017974 33.14017976s15.24448269 33.14017975 33.14017974 33.14017975h117.97903992l-177.63136348 177.63136347c-1.98841078 1.98841078-3.31401797 3.31401797-4.63962516 5.30242877-45.07064446-35.12859054-101.40895005-56.33830558-163.04968439-56.33830559-146.47959451 0-265.12143803 118.64184352-265.12143802 265.12143803s118.64184352 265.12143803 265.12143802 265.12143802 265.12143803-118.64184352 265.12143803-265.12143802c0-61.64073435-21.20971504-117.97903991-56.33830558-163.04968439 1.98841078-1.3256072 3.97682157-2.65121438 5.30242876-4.63962516l177.63136348-177.63136348v119.30464711c0 18.55850066 15.24448269 33.14017975 33.14017976 33.14017975s33.14017975-15.24448269 33.14017974-33.14017975v-198.84107851c1.3256072-4.63962516 0.66280359-9.27925033-1.32560718-12.59326832z m-456.00887342 636.29145127c-110.02539678 0-198.84107852-88.81568174-198.8410785-198.84107852s88.81568174-198.84107852 198.8410785-198.84107852 198.84107852 88.81568174 198.84107852 198.84107852-88.81568174 198.84107852-198.84107852 198.84107852z" fill="#9DBDFF" p-id="3504"></path></svg>
                  </span>
                </p>
                <span class="resDetTIcon">{{item.sendDate | toTime}} 投递</span>
            </div>
            <div class="resumeCmsgD borLR p10">
                <p><i class="birthyIcon"></i>{{item.birthday | toTime}}</p>
                <p v-if="item.politicallyState == 'concourse'"><i class="resume02Icon"></i>党员</p>
                <p v-if="item.politicallyState == 'partyMember'"><i class="resume02Icon"></i>群众</p>
                <p><i class="resume03Icon"></i>{{item.birthdayLocal}}</p>
                <!--<p><i class="resume04Icon"></i>9年</p>-->
                <p><i class="resume06Icon"></i>{{item.phase}}</p>
                <p class="w66per"><i class="resume05Icon"></i>{{item.university}}</p>
            </div>
            <div class="resDetClassD">
                <p class="detClassIcon posR ">
                  应聘岗位：{{item.postName}} &nbsp;
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
                </p>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">基本信息</div>
                <p><span>籍贯</span><span>{{item.birthdayLocal}}</span></p>
                <p><span>民族</span><span>{{item.nation}}</span></p>
                <p><span>身高</span><span>{{item.high}}</span></p>
                <p><span>体重</span><span>{{item.weight}}</span></p>
                <p>
                    <span>婚否</span>
                    <span v-if="item.married == 0">未婚</span>
                    <span v-if="item.married == 1">1已婚</span>
                </p>
                <p>
                    <span>政治面貌</span>
                    <span v-if="item.politicallyState == 'concourse'">党员</span>
                    <span v-if="item.politicallyState == 'partyMember'">群众</span>
                </p>
                <p><span>出生年月日</span><span>{{item.birthday}}</span></p>
                <p><span>手机号码</span><span>{{item.mobile}}</span></p>
                <p><span>身份证</span><span>{{item.cardNumber}}</span></p>
                <p><span>邮箱</span><span>{{item.email}}</span></p>
                <p><span>国籍</span><span>{{item.nationality}}</span></p>
                <p><span>配偶国籍</span><span>{{item.spouseNationality}}</span></p>
                <p>
                    <span>是否有海外关系或工作经历</span>
                    <span v-if="item.hasBroadExp == 0">否</span>
                    <span v-if="item.hasBroadExp == 1">有</span>
                </p>
                <p><span>家庭主要成员</span><span>{{item.familyMember}}</span></p>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">高等教育学习经历</div>
                <p><span>预计毕业日期</span><span>2018年8月</span></p>
                <p class="borderB"><span>是否为统招一本</span><span>是</span></p>
                <p><span>阶段</span><span>本科</span></p>
                <p><span>起始年月</span><span>2016年8月-2018年6月</span></p>
                <p><span>学校</span><span>高等职业技术学校</span></p>
                <p><span>院系</span><span>物理学院</span></p>
                <p class="borderB"><span>专业</span><span>量子力学</span></p>
                <p><span>阶段</span><span>硕士</span></p>
                <p><span>起始年月</span><span>2016年8月-2018年6月</span></p>
                <p><span>学校</span><span>高等职业技术学校</span></p>
                <p><span>院系</span><span>物理学院</span></p>
                <p class="borderB"><span>专业</span><span>量子力学</span></p>
                <p><span>阶段</span><span>博士</span></p>
                <p><span>起始年月</span><span>2016年8月-2018年6月</span></p>
                <p><span>学校</span><span>高等职业技术学校</span></p>
                <p><span>院系</span><span>物理学院</span></p>
                <p class="borderB"><span>专业</span><span>量子力学</span></p>
                <p class="borderB"><span>备注</span><span>非学术型，有推免资格，不低于学术 型学分要求。</span></p>
                <p><span>综合成绩排名</span><span>年级排名：10/600</span></p>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">工作经历</div>
                <div class="workExperD">
                    <p>零点市场调查有限公司</p>
                    <p>2009.06-2009.08</p>
                    <p>数据采集员</p>
                    <p>1、实地巡检POS机具商户，核对资料，维护客户关系</p>
                    <p>2、与客户有效沟通，提高了随机应变能力和沟通技巧</p>
                </div>
                <div class="workExperD">
                    <p>联合证券有限责任公司乔布西路营业部 </p>
                    <p>2010.07-2010.11</p>
                    <p>投资经理助理</p>
                    <p>1、指导客户开户流程，在投资经理的指导下学习大盘趋 势的判断，以及优质股票的推荐</p>
                    <p>2、负责与潜在客户沟通，分享理财知识，在时机成熟的
                        情况下把投资经理推荐给客户，以其更专业的知识完成客
                        户营销，期间团队营销业绩为8户，个人直接参与5户。</p>
                </div>
                <div class="workExperD">
                    <p>中国银行乔布广场支行 </p>
                    <p>2011.07-2011.12</p>
                    <p>见习柜员</p>
                    <p>1、负责本行开户企业对账单的整理及反馈，记录每天的
                        晨会概要，协调柜台与大堂经理的沟通，接受客户关于存
                        贷业务的咨询，录入信用卡申请资料等。</p>
                    <p>2、积极学习个人理财业务知识，协助客户经理完成指定 基金的销售业绩。</p>
                </div>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">英语、计算机能力</div>
                <p><span>外语水平：CET/TEM</span><span>CET6-554</span></p>
                <p><span>计算机/程序员等级</span><span>全国计算机一级</span></p>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">特长</div>
                <div class="specialtyD">{{item.speciality}}</div>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">爱好</div>
                <div class="specialtyD">{{item.hobby}}</div>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">主要课程</div>
                <div class="specialtyD">      电磁学，光学，热学，量子力学，理论物理，原子物理，
                    热力学统计，电路，专业英语，复变函数，电动力学，
                    高等数学，数理统计，线性代数，数字电路，模拟电路，
                    理论力学，纳米制备，大学英语</div>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">毕业论文科研方向及代表性学术成果</div>
                <div class="specialtyD">      更改图片适应文档的方式，请单击该图片，图片旁边
                    将会显示布局选项按钮。当处理表格时，单击要添加行或
                    列的位置，然后单击加号。在新的阅读视图中阅读更加容
                    易。可以折叠文档某些部分并关注所需文本。如果在达到
                    结尾处之前需要停止读取，Word 会记住您的停止位置 -
                    即使在另一个设备上。视频提供了功能强大的方法帮助您
                    证明您的观点。当您单击联机视频时，可以在想要添加的
                    视频的嵌入代码中进行粘贴。您也可以键入一个关键字以
                    联机搜索最适合您的文档的视频。为使您的文档具有专业
                    外观，Word 提供了页眉、页脚、封面和文本框设计，这
                    些设计可互为补充。例如，您可以添加匹配的封面、页眉
                    和提要栏。单击“插入”，然后从不同库中选择所需元素。
                    主题和样式也有助于文档保持协调。当您单击设计并选择
                    新的主题时，图片、图表或 SmartArt 图形将会更改以
                    结尾处之前需要停止读取，Word 会记住您的停止位置 -
                    即使在另一个设备上。</div>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">高校获奖情况及学生工作社团组织 </div>
                <div class="c444 mB10">校级奖学金情况：</div>
                <div class="specialtyD">
                    <p>2014年校级一等奖学金</p>
                    <p>2015年校级一等奖学金</p>
                    <p>2016年校级一等奖学金</p>
                </div>
                <div class="c444 mB10">1.大学读书社理事长</div>
                <div class="specialtyD">
                    创立大学读书社。期间策划并组织多起大型活动，与
                    《青年文摘》，省图书馆多家单位展开合作，现已发展成
                    有广泛影响力的学术性社团。
                </div>
                <div class="c444 mB10">2.大学学生历史学会编辑部长</div>
                <div class="specialtyD">
                    加强对会员的文学技能训练，编辑出版了刊物《新芽》
                </div>
            </div>
            <div class="w96pre resDet">
                <div class="c000 mB10 detMsgD">其他说明 </div>
                <div class="specialtyD">
                    {{item.remark}}
                </div>
            </div>
            <div class="whAround p0">
                <div class="w40pre">
                    <svg class="icon nohappyIcon" viewBox="0 0 1024 1024"><path d="M512.012 990.749c-128.664 0-249.661-49.744-340.642-140.165-90.981-90.42-141.101-210.668-141.101-338.584s50.12-248.165 141.101-338.585C262.351 82.995 383.348 33.25 512.105 33.25c128.759 0 249.755 49.745 340.736 140.165 187.853 186.731 187.853 490.438 0 677.076-90.981 90.42-212.071 140.258-340.829 140.258z m0.093-895.13c-111.926 0-217.12 43.293-296.319 121.931C136.679 296.188 93.012 400.728 93.012 512c0 111.271 43.573 215.812 122.679 294.449C294.797 884.994 400.085 928.382 512.012 928.382c112.02 0 217.308-43.388 296.414-122.025 163.354-162.326 163.354-426.48 0-588.807-79.107-78.638-184.395-121.931-296.321-121.931zM340.896 792.144c-40.582 0-39.085-44.79-39.085-44.79s51.615-104.633 210.201-104.633S744.467 747.354 744.467 747.354c0 44.977-42.639 44.79-42.639 44.79s-75.178-89.672-189.91-89.672-171.022 89.672-171.022 89.672z m31.138-434.055c-32.447 0-59.002 26.275-59.002 58.628 0 32.354 26.462 58.628 59.002 58.628 32.633 0 59.001-26.274 59.001-58.628 0-32.446-26.368-58.628-59.001-58.628z m302.304 0c-32.54 0-59.002 26.275-59.002 58.628 0 32.354 26.462 58.628 59.002 58.628 32.633 0 59.002-26.274 59.002-58.628 0-32.446-26.369-58.628-59.002-58.628z"></path></svg>
                    <p>标记不合适</p>
                </div>
                <div class="w60pre active">
                    <svg class="icon happyIcon" viewBox="0 0 1024 1024"><path d="M288.0289 400.288396c0 30.777933 24.953082 55.731014 55.732613 55.731014s55.733013-24.953082 55.733013-55.731014c0-30.778532-24.953482-55.731014-55.733013-55.731014S288.0289 369.509864 288.0289 400.288396zM622.406792 400.288396c0 30.777933 24.953881 55.731014 55.733013 55.731014 30.779132 0 55.732014-24.953082 55.732014-55.731014 0-30.778532-24.953082-55.731014-55.732014-55.731014C647.360873 344.557382 622.406792 369.509864 622.406792 400.288396zM510.941765 762.511409c-78.007911 0-156.033809-39.054521-200.61998-100.314787-16.763035-22.293685-27.822536-50.114822-39.05632-72.407708-5.528652-16.763634 5.525654-33.437329 16.763634-39.054521 16.763634-5.53025 27.823136 5.529251 33.440327 16.761636 5.528652 22.292885 16.763035 39.05552 27.822137 55.731014 44.586171 55.731014 100.318784 83.640092 161.558463 83.640092 61.266261 0 122.616666-27.820937 156.055794-78.0229 11.146443-16.762635 22.293685-38.968579 27.822936-55.731014 5.616192-16.761636 22.292885-22.292885 33.438329-16.761636 16.764634 5.528252 22.294884 22.290887 16.764634 33.437329-5.617192 27.822137-22.292885 50.114023-39.05652 72.407708C666.993562 723.54283 588.966665 762.511409 510.941765 762.511409zM510.941765 956.900214c-243.33382 0-445.129003-201.789787-445.129003-445.149589 0-243.344412 201.795183-445.134998 445.129003-445.134998 243.351408 0 445.14719 201.790586 445.14719 445.134998C956.088756 755.110427 754.293173 956.900214 510.941765 956.900214zM510.941765 125.999564c-213.638553 0-385.743466 172.100316-385.743466 385.751061 0 213.665135 172.104913 385.761054 385.743466 385.761054 213.655542 0 385.756457-172.095919 385.756457-385.761054C896.698223 298.09988 724.597307 125.999564 510.941765 125.999564z"></path></svg>
                    <p>收藏该简历</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resume-details",
        data(){
            return{
                resumeId: this.$router.history.current.query.resumeId,
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
            getAResume(){
                let _this = this;
                let data = {
                    url: _this.GLOBAL.requestPath + '/resumeInfo/searchResumeInfoById.action',
                    data: {id:_this.resumeId},
                    fn(data){
                        _this.item = data.resume;
                        console.log(data);
                    }
                }
                _this.GLOBAL.getRequest(data);
            }
        },
        mounted() {//页面加载后调用
            let _this = this;
            _this.getAResume();
        }
    }
</script>

<style scoped>

</style>
