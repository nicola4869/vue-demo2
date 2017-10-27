<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人信息</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="infoData" height="322" border style="width:100%">
            <el-table-column prop="key" label="key" style="width:40%"></el-table-column>
            <el-table-column prop="value" label="value" stlye="width:60%"></el-table-column>
        </el-table>      
    </div>
</template>
<script>
export default {
  data(){
      return{
          infoData:[
              {
                  key:'姓名',
                  value:'陶然'
              },
              {
                  key:'姓别',
                  value:'女'
              },
              {
                  key:'教育水平',
                  value:'本科'
              },
              {
                  key:'毕业院校',
                  value:'重庆工商大学'
              },
              {
                  key:'专业',
                  value:'经济学'
              },
              {
                  key:'爱好',
                  value:'书法画画，网游'
              },
              {
                  key:'性格',
                  value:'静如处子，动如脱兔'
              }
          ]
      }
  }
}
</script>

