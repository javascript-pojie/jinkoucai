<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">所有用户</span>
                <router-link to="/agent/add"><el-button style="float: right; padding: 3px 0" type="text">搜索</el-button></router-link>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column prop="id" label="ID" align="center">

                </el-table-column>
                <el-table-column prop="userAccount" label="用户名" align="center">

                </el-table-column>
                <el-table-column prop="userType" label="账户类型" align="center">

                </el-table-column>
                <el-table-column prop="tel" label="手机号码" align="center">

                </el-table-column>
                <el-table-column prop="cdt" label="注册时间" align="center">

                </el-table-column>
                <el-table-column prop="fcbl" label="邀请码" align="center">

                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row)">详细信息</el-button>
                        <el-button size="mini" type="danger" @click="onDelete(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "user",
        data(){
            return{
                tableData:[],
                form:{

                }
            }
        },
        created() {
            this.getData();
        },
        methods:{
            getData(){
                //todo 用户查询没有分页 按字段搜索
                this.get('/edu-admin/user/list').then(r=>{
                    if(r.data.code === 1){
                        this.tableData = r.data.data
                    }
                })
            },
            onDelete(i,r){
                this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.post('/edu-admin/user/delete',{ids:[r.id]}).then(r=>{
                        if(r.data.code === 1){
                            this.$message.success('删除成功')
                        }
                        this.getData()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>
