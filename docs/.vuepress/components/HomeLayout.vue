<template>
    <div class="resume">
        <el-row :gutter="50" class="resume-content">
            <el-col :xs="24"  :lg="8">
                <img class="avator" src="../public/avator.jpg" width="826" alt="这是我的简历头像" title="这是我的简历头像">
            </el-col>
            <el-col :xs="24"  :lg="16" class="resume-right ml60">
                <div class="resume-right-top">
                    <div class="hello">hello</div>
                    <div class="username">{{username}}</div>
                    <div class="position">{{position}}</div>
                </div>
                <div class="resume-right-center">
                   <div class="resume-item">
                       <span>年龄</span>
                       <div>{{age}}</div>
                   </div>
                    <div class="resume-item">
                        <span>地址</span>
                        <div>{{address}}</div>
                    </div>
                    <div class="resume-item">
                        <span>email</span>
                        <div>{{email}}</div>
                    </div>
                    <div class="resume-item">
                        <span>电话</span>
                        <div>{{phone}}</div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="resume-footer">
           <p>Copyright &copy; 2019 JamesZ</p>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                username:'邹同学',
                position:'前端开发工程师',
                age:24,
                address:'深圳',
                email:'15969698635@163.com',
                phone:'15969698635'
            };
        },
        methods: {
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .resume
        max-width:900px
        margin:60px auto
        .resume-content
            padding:57px 120px 37px 50px
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
            .avator
                width:100%
                height:auto
            .resume-right
                .resume-right-top
                    border-bottom:2px solid #ccc
                    .hello
                        position:relative
                        width:70px
                        height:30px
                        font-size:14px
                        color:#fff
                        background:#e25e63
                        text-align:center
                        line-height 30px
                        &:after
                            content:'';
                            position:absolute
                            top:100%
                            left:0
                            width:12px
                            height:12px
                            border:0 solid transparent
                            margin-bottom:3px
                            border-right-width:7px
                            border-right-color:#e25e63
                            border-radius:0 0 32px 0
                    .username
                        font-size:33px
                        color:#030323
                        height:80px
                        line-height:102px
                    .position
                        margin-bottom:22px
                        color:#333
                        font-size:14px
                .resume-right-center
                    margin-top:22px
                    .resume-item
                        display:flex
                        height:36px
                        line-height:36px
                        span
                            flex:0 0 112px
                            color:#020306
                            font-size:18px
                        div
                            flex:1

        .resume-footer
            text-align:center
</style>

