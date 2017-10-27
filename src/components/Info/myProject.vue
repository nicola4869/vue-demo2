<template>
  <div class="project-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人项目</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="10" class="card-content">
        <el-card>
          <img :src="imgUrl" alt="Vue-demo" class="image">
          <div style="padding: 14px">
            <span>Vue-demo</span>
            <div class="bottom clearfix">
              <time class="time">{{currentDate}}</time>
              <el-button type="text" class="button">获取链接</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="10" class="card-content">
        <el-card>
          <img :src="imgUrl2" alt="Vue-demo" class="image">
          <div style="padding: 14px">
            <span>Razer-project</span>
            <div class="bottom clearfix">
              <time class="time">{{currentDate}}</time>
              <el-button type="text" class="button">获取链接</el-button>
            </div>
          </div>
        </el-card>
      </el-col>      
      <el-col :span="10" class="card-content">
        <el-card>
          <img :src="imgUrl2" alt="Vue-demo" class="image">
          <div style="padding: 14px">
            <span>Razer-project</span>
            <div class="bottom clearfix">
              <time class="time">{{currentDate}}</time>
              <el-button type="text" class="button">获取链接</el-button>
            </div>
          </div>
        </el-card>
      </el-col>      
      <el-col :span="10" class="card-content">
        <el-card>
          <img :src="imgUrl2" alt="Vue-demo" class="image">
          <div style="padding: 14px">
            <span>Razer-project</span>
            <div class="bottom clearfix">
              <time class="time">{{currentDate}}</time>
              <el-button type="text" class="button">获取链接</el-button>
            </div>
          </div>
        </el-card>
      </el-col>      
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return{
      imgUrl:'../../img/Vue-demo2.png',
      imgUrl2:'../../img/razer-project.png',
      currentDate:new Date(),
    }
  }
}
</script>
<style lang="scss" scoped>
  .time{
    font-size: 13px;
    color:#999;
  }

  .bottom{
    margin-top: 13px;
    line-height: 12px;
  }

  .button{
    padding: 0;
    float: right;
  }

  .image{
    width: 100%;
    display: block;
  }

  .clearfix::before,
  .clearfix::after{
    display: table;
    content: "";
  }

  .clearfix::after{
    clear: both;
  }

  .card-content{
    margin: 20px;
  }
</style>
>

</style>

