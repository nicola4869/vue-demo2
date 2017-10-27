<template>
  <el-row class='container'>
      <!-- 头部 -->
      <el-col :span='24' class="topbar-wrap">
          <div class="topbar-title">
              <span style="font-size:18px;">
                  <a href="/" style="color:#fff;">后台管理系统</a>
              </span>
          </div>
          <div class="topbar-account topbar-btn">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i> {{sysUserName}}  <i
                class="iconfont icon-down"></i></span>
                <el-dropdown-menu slot="dropdown" style="border-radius:5px;">
                <el-dropdown-item>
                <router-link to="/user/profile"><span style="color: #555;font-size: 14px;">个人信息</span></router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                <router-link :to="'/user/changepwd'"><span style="color: #555;font-size: 14px;">修改密码</span></router-link>
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="logout" style="font-size: 14px;"">退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
      </div>
      </el-col>
      <el-col :span="24" class="main">
          <!-- 左侧导航 -->
          <aside>
              <!-- 展开折叠开关 -->
              <div class="menu-toggle" @click.prevent="collapse">
                  <i class="iconfont icon-menufold" v-show="!collapsed"></i>
                  <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
              </div>
              <!-- 导航菜单 -->
              <el-col :span="24">
                <el-menu default-active="1" router :collapse="collapsed">
                  <el-submenu index="1">
                    <template slot="title">
                        自我介绍
                    </template>
                    <el-menu-item-group title=" ">
                        <el-menu-item index="../Info/info">个人信息</el-menu-item>
                        <el-menu-item index="../Info/skill">个人技能</el-menu-item>
                        <el-menu-item index="../Info/myProject">个人项目</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
              </el-menu>
              <el-menu>
                  <el-submenu index="2">
                      <template slot="title">
                          导航二
                      </template>
                      <el-menu-item-group title=" ">
                          <el-menu-item index="2-1">
                              选项一
                          </el-menu-item>
                          <el-menu-item index="2-2">
                              选项二
                          </el-menu-item>
                      </el-menu-item-group>
                  </el-submenu>
              </el-menu>
              </el-col>
          </aside>

          <!-- 右侧内容区 -->
          <section class="content-container" style="background:#fff;">
              <div class="grid-content">
                  <el-col :span="20" class="content-wrapper">
                     <transition name="fade" mode="out-in">
                         <router-view></router-view>
                     </transition>
                  </el-col>
              </div>
          </section>
      </el-col>
  </el-row>
</template>

<script>
    import {bus} from "../bus.js"
    export default{
        name:'home',
        created(){
            bus.$on('setUserName',(text)=>{
                this.sysUserName = text;
            })
        },
        data(){
            return{
                sysUserName:'',
                collapsed:false
            }
        },
        methods:{
          //折叠导航栏
          collapse:function(){
              this.collapse = !this.collapsed;
          },
          showMenu(i,status){
              this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display = status?9+'block':'none'
          },
          logout(){
              var _this = this;
              this.$confirm('确认退出吗？','提示',{
                  //type:'warning'
              }).then(()=>{

              })
          },
          mounted(){
              var user = sessionStorage.getItem('access-user');
              if(user){
                  user = JSON.parse(user);
                  this.sysUserName = user.name || "";
              }
          }
        }
    }
</script>
<style scoped lang="scss">
    .container{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;

        .topbar-wrap{
            height: 50px;
            line-height: 50px;
            background: #373d41;
            padding: 0;
        }

        .topbar-btn{
            color: #fff;
        }
        
        .topbar-title{
            float: left;
            text-align: left;
            width: 200px;
            padding-left: 10px;
            border-left: 1px solid #000;
        }

        .main{
            display:-webkit-box;
            display:-webkit-flex;
            display:-ms-flexbox;
            display:flex;
            position: absolute;
            top: 50px;
            bottom: 0;
            overflow: hidden;
        }

        aside{
            min-width:50px;
            background:#333744;
        }

        .el-menu{
            height: 100%;
            height: -moz-calc(100%-80px);
            height: -webkit-calc(100%-80px);
            height: calc(100%-80px);
            border-radius: 0;
            background-color: #333744;
        }

        .el-submenu .el-menu-item{
            min-width: 60px;
            font-weight: bold;
        }

        .el-menu{
            width: 180px;
            text-align: left;
        }

        .el-menu--collapse{
            width: 60px;
        }

        .el-menu .el-menu-item,.el-submenu .el-submenu__title{
            height: 46px;
            line-height: 46px;
        }

        el-menu:hover,.el-menu-item:hover, .el-submenu .el-menu-item:hover,.el-submenu__title:hover{
            background: #7ed2df;
        }

        .content-container{
            background: #fff;
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            padding-bottom: 1px;
        }

        .content-wrapper{
            background-color: #fff;
            box-sizing: border-box;
        }
    }
</style>