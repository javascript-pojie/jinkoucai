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
                <el-table-column prop="areaCode" label="地区" align="center">

                </el-table-column>
                <el-table-column prop="gsmc" label="公司名称" align="center">

                </el-table-column>
                <el-table-column prop="dlr" label="代理人名称" align="center">

                </el-table-column>
                <el-table-column prop="lxfs" label="联系方式" align="center">

                </el-table-column>
                <el-table-column prop="fcbl" label="提成比例" align="center">

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
                this.get('/edu-admin/user/list').then(r=>{
                    console.log(r)
                })
            }
        }
    }
</script>

<style scoped>

</style>
