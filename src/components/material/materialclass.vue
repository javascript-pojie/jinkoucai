<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">素材分类管理</span>
                <router-link to="/materialclass/add"><el-button style="float: right; padding: 3px 0" type="text">添加新的分类</el-button></router-link>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column prop="id" label="ID" align="center" width="80">

                </el-table-column>
                <el-table-column prop="name" label="名称" align="center" width="180">

                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="onDelete(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page">
                <el-pagination
                        v-if="pageTotal>=10"
                        background
                        layout="prev, pager, next"
                        :total="pageTotal">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "materialclass",
        data(){
            return{
                tableData: [],
                pageTotal:1
            }
        },
        created() {
            this.getData()
        },
        methods:{
            getData(){
                this.post('/edu-admin/matetype/list',{curpage:1}).then(r=>{
                    if(r.data.code === 1){
                        this.pageTotal = r.data.data.total
                        this.tableData = r.data.data.records
                    }else{
                        this.$message.error('查询列表失败'+r.data)
                    }
                }).catch(e=>{
                    this.$message.error('查询列表失败'+e)
                })
            },
            onDelete(i,r){
                this.post('/edu-admin/matetype/delete',{ids:[r.id]}).then(r=>{
                    if(r.data.code === 1){
                        this.$message.success('删除成功')
                        this.getData()
                    }
                }).catch(e=>{
                    this.$message.error('删除失败'+e)
                })
            }
        }
    }
</script>

<style scoped>
    .page{
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
</style>
