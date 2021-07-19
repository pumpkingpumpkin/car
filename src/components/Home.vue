<template>
    <el-container class="home-container">
        <el-header>
            <div>
                <img src="" alt="">
                <span>唯普汽车Logo</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <div></div>
                <el-menu
                        background-color="#f6f6f6"
                        text-color="#5b5b5b"
                        active-text-color="#FFC0CB"
                        unique-opened
                        router :default-active="activePath">
                    <el-submenu index="1" >
                        <template slot="title">
                            <span>首页</span>
                        </template>
                    </el-submenu>

                    <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
                        <template slot="title">
                            <span v-if="item.id==125">系统配置</span>
                            <span v-else>{{item.authName}}</span>
                        </template>

                        <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children"
                                      :key="subItem.id" @click="saveNavState('/'+subItem.path)">
                            <template slot="title" v-if="item.id==125">应用管理</template>
                            <template slot="title" v-else>{{subItem.authName}}</template>
                        </el-menu-item>
                    </el-submenu>

                </el-menu>
            </el-aside>
            <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data(){
          return{
              menuList :[],
              activePath:''
          }
        },
        created() {
            this.getMenuList()
            this.activePath=window.sessionStorage.getItem('activePath')
        },
        methods:{
            logout(){
                window.sessionStorage.clear();
                this.$router.push("/login");
            },
            async getMenuList(){
                const{data: res}=await this.$http.get('menus')
                if(res.meta.status !==200) return this.$message.error(res.meta.msg)
                this.menuList=res.data
                console.log(res)
            },
            saveNavState(activePath){
                window.sessionStorage.setItem('activePath',activePath)
                this.activePath=activePath
            }
        }

    }
</script>

<style lang="less" scoped>
    .home-container{
        height:100%;
    }
    .el-header{
        background-color:#666666 ;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color:#ffffff;
        font-size: 30px;
    }
    .el-aside{
        background-color: #f6f6f6;
        .el-menu{
            border-right: none;
        }

    }
    .el-main{
        background-color:#ffffff;
    }


</style>