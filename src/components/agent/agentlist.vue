<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">区域代理商列表</span>
                <router-link to="/agent/add"><el-button style="float: right; padding: 3px 0" type="text">添加新的代理人</el-button></router-link>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column prop="id" label="ID" align="center">

                </el-table-column>
                <el-table-column prop="areaCode" label="地区" align="center">
                    <template slot-scope="scope">
                        {{areaCode[scope.row.areaCode]}}
                    </template>
                </el-table-column>
                <el-table-column prop="gsmc" label="公司名称" align="center">

                </el-table-column>
                <el-table-column prop="dlr" label="代理人名称" align="center">

                </el-table-column>
                <el-table-column prop="lxfs" label="联系方式" align="center">

                </el-table-column>
                <el-table-column label="提成比例" align="center">
                    <template slot-scope="scope">
                        {{scope.row.fcbl}}%
                    </template>
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
    import code from "../../assets/js/areacode"

    export default {
        name: "agentlist",
        data(){
            return{
                tableData:[{
                    areaCode:'',
                    gsmc:'',
                    dlr:'',
                    lxfs:'',
                    fcbl:''
                }],
                areaCode : code
            }
        },
        created(){
            this.getData()
        },
        methods:{
            getData(){
                this.post('/edu-admin/agent/list',{curpage:1}).then(r=>{
                    if(r.data.code === 1){
                        this.tableData = r.data.data.records
                    }
                })
            },
            onDelete(i,r){
                this.post('/edu-admin/agent/delete',{ids:[r.id]}).then(r=>{
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
