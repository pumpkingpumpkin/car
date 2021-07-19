<template>
    <div>
        <h3>应用管理</h3>
        <button @click="getGoodsList">1</button>
        <button @click="addUsers1">2</button>
        <el-card>
            <el-row :gutter="20">
                <el-col :span="1">
                    <h4>搜索</h4>
                </el-col>
                <el-col :span="7">
                    <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
                        <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">

                    <el-button type="primary" @click="getUserList">搜索</el-button>

                    <el-button type="primary" @click="addDialogVisible=true">新增</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card >
            <el-table :data="userlist" border stripe>
                <el-table-column type="index" label="ID"></el-table-column>
                <el-table-column label="名称" prop="username"></el-table-column>
                <el-table-column label="CODE" prop="id"></el-table-column>
                <el-table-column label="角色" prop="role_name"></el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="{}">
                        <el-button type="primary" icon="el-icon-edit" size="mini"
                                   @click="showEditDialog(scope.row.id)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-pagination
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pagenum"
                small
                layout="prev, pager, next"
                :total="50">
        </el-pagination>
<!--        <el-pagination-->
<!--                @current-change="handleCurrentChange"-->
<!--                :current-page="queryInfo.pagenum"-->
<!--                :page-sizes="[1,2,3,4,5]"-->
<!--                :page-size="queryInfo.pagesize"-->
<!--                layout="sizes, prev, pager, next, jumper"-->
<!--                :total="5">-->
<!--        </el-pagination>-->
        <el-dialog
                title="添加用户"
                :visible.sync="addDialogVisible"
                width="30%" @close="addDialogClose" >
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
                <el-form-item label="名称" prop="username">
                    <el-input v-model="addForm.username"></el-input>
                </el-form-item>
                <el-form-item label="编号" prop="code">
                    <el-input v-model="addForm.code"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="roles">
                    <el-input v-model="addForm.roles"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUser">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
                title="修改用户"
                :visible.sync="editDialogVisible"
                width="50%" @close="editDialogClosed">
            <el-form :model="addForm" :rules="editFormRules" ref="editFormRef" label-width="70px" >
                <el-form-item label="用户名称" >
                    <el-input v-model="addForm.username"></el-input>
                </el-form-item>
                <el-form-item label="用户编号" >
                    <el-input v-model="addForm.code"></el-input>
                </el-form-item>
                <el-form-item label="角色" >
                    <el-input v-model="addForm.roles"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editUserInfo ">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                queryInfo:{
                    query:'',
                    pagenum:1,
                    pagesize:2
                },
                userlist:[],
                total:0,
                addDialogVisible:false,
                addForm:{
                    username:'',
                    code:'',
                    roles:''
                },
                addFormRules:{
                    username:[
                        {required:true,message:'请输入用户名称',trigger:'blur'},
                        {min:3,max:10,message: '用户名称长度在3到10',trigger: 'blur'}
                    ],
                    code:[
                        {required:true,message:'请输入用户编号',trigger:'blur'},
                        {min:3,max:10,message: '用户名称长度在3到10',trigger: 'blur'}
                    ],
                    roles:[
                        {required:true,message:'请输入角色',trigger:'blur'},
                        {min:3,max:10,message: '用户名称长度在3到10',trigger: 'blur'}
                    ]
                },
                editDialogVisible:false,
                editForm:{},
                editFormRules:{}
            }
        },
        created(){
            this.getUserList()
        },
        methods:{
            async getGoodsList(){
               const{data:res}=await this.$http.get('/api/goodslist')
                console.log(res)
            },
            async addUsers1(){
                const{data:res}=await this.$http.post('/api/addUsers',{name:'admin',code:1000,roles:'pumpkin'})
                console.log(res)
            },
            async getUserList(){
                const{data:res}=await this.$http.get('users',{params:this.queryInfo })
                if(res.meta.status !==200) {
                    return this.$message.error('获取用户列表失败')
                }
                this.userlist=res.data.users
                this.total=res.data.total
                console.log(res)
            },
            handleSizeChange(newSize){
                this.queryInfo.pagesize=newSize
                this.getUserList()
            },
            handleCurrentChange(newPage){
                this.queryInfo.pagesize=newPage
                this.getUserList()
            },
            addDialogClose(){
                this.$refs.addFormRef.resetFields()
            },
            addUser(){
                this.$refs.addFormRef.validate(async valid=>{
                    if(!valid) return
                    const{data:res}=await this.$http.post('users',this.addForm)
                    if(res.meta.status!==201){
                        this.$message.error('添加用户失败!')
                    }
                    this.$message.success('添加用户成功!')
                    this.addDialogVisible=false
                    this.getUserList()
                })
            },
            async showEditDialog(id){
                const {data:res}=await this.$http.get('users/' +id)
                if(res.meta.status !==200){
                    return this.$message.error('查询用户信息失败！')
                }
                this.editForm=res.data
                this.editDialogVisible=true
            },
            editDialogClosed(){
                this.$refs.editFormRef.resetFields()
            },
            editUserInfo(){
               this.$refs.editFormRef.validate(async valid=>{
                    if(!valid) return
                    const{data:res}= await this.$http.put('users/' + this.editForm.id,
                        {code:this.editForm.code,
                               roles:this.editForm.roles
                        })
                if(res.meta.status !==200){
                    return this.$message.error('跟新用户信息失败！')
                }
                this.editDialogVisible=false
                this.getUserList()
                this.$message.success('跟新用户信息成功!')
               })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>