<template>
  <div class="skill-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人技能</el-breadcrumb-item>
    </el-breadcrumb>
    <el-collapse accordion>
       <el-collapse-item title="基础" name="1">
         <p>熟练HTML5、CSS、JavaScript等前端技术，能够根据psd图编写符合语义化及W3C规范的页面。</p>
       </el-collapse-item>
       <el-collapse-item title="框架" name="2">
         <p>UI框架：如Bootstrap、ElementUI,ionic等前端主流框架。</p>
         <p>JS框架：如JQuery,Vue2.X,Angular</p>
       </el-collapse-item>
       <el-collapse-item title="后端语言" name="3">
          <p>了解Nodejs,php</p>
          <p>了解并使用过数据库语言MySql</p>
       </el-collapse-item>
       <el-collapse-item title="其它" name="4">
          <p>熟练使用SublimeText,WebStorm,vscode进行代码编写</p>
          <p>利用Git等开发版本控制工具，并用github对项目进行托管</p>
       </el-collapse-item>
    </el-collapse>
  </div>
</template>
