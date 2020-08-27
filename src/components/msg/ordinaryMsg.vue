<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">普通消息</span>
                <router-link to="/ordinaryMsg/sendMsg">
                    <el-button style="float: right; padding: 3px 0" type="text">发送普通消息</el-button>
                </router-link>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column prop="id" label="ID" align="center" width="80"></el-table-column>
                <el-table-column prop="title" label="消息主题" align="center"></el-table-column>
                <el-table-column prop="" label="发送人" align="center"></el-table-column>
                <el-table-column prop="cdt" label="发送时间" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row)">查看</el-button>
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
        name: "ordinarymsg",
        data(){
            return{
                tableData:[],
                pageTotal:0
            }
        },
        created(){
            this.getData()
        },
        methods:{
            getData(){
                this.post('/edu-admin/notice/list',{curpage:1}).then(r=>{
                    if(r.data.code === 1){
                        this.tableData = r.data.data.records
                        this.pageTotal = r.data.data.total
                    }else{
                        this.$message.error('数据加载失败'+r.data.msg)
                    }
                }).catch(e=>{
                    this.$message.error('数据加载失败'+e)
                })
            }
        }
    }
</script>

<style scoped>

</style>
