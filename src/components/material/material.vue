<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">素材列表</span>
                <router-link to="/material/add"><el-button style="float: right; padding: 3px 0" type="text">添加新的素材</el-button></router-link>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column prop="id" label="ID" align="center" width="80"></el-table-column>
                <el-table-column prop="title" label="素材名称" align="center"></el-table-column>
                <el-table-column prop="typeId" label="素材分类" align="center">
                    <template slot-scope="scope">
                       {{materialclass[scope.row.typeId]}}
                    </template>
                </el-table-column>
                <el-table-column prop="author" label="作者" align="center"></el-table-column>
                <el-table-column prop="official" label="是否官方" align="center">
                    <template slot-scope="scope">
                       {{scope.row.official===0?'是':'否'}}
                    </template>
                </el-table-column>
                <el-table-column prop="cdt" label="创建时间" align="center"></el-table-column>
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
        name: "materiallist",
        data(){
            return{
                materialclass:{},
                pageTotal:0,
                tableData:[]
            }
        },
        created(){
            this.getData()
        },
        methods:{
            getData(){
                this.post('/edu-admin/matetype/list',{curpage:1}).then(r=>{
                    if(r.data.code === 1){
                        r.data.data.records.forEach((v,i)=>{
                            this.materialclass[v.id] = v.name
                        })
                    }else{
                        this.$message.error('查询分类列表失败'+r.data)
                    }
                }).then(()=>{
                    this.post('/edu-admin/mate/list',{curpage: 1}).then(r=>{
                        if(r.data.code === 1){
                            console.log(r.data.data.records)
                            this.tableData = r.data.data.records
                        }
                    })
                })

            },
            onDelete(i,r){
                //todo 删除未提示确认
                this.post('/edu-admin/mate/delete',{ids:[r.id]}).then(r=>{
                    if(r.data.code === 1){
                        this.$message.success('删除成功')
                        this.getData()
                    }else{
                        this.$message.error(r.data.msg)
                    }
                }).catch(e=>{
                    this.$message.error('删除失败'+e)
                })
            }
        }
    }
</script>

<style scoped>

</style>
