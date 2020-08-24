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
                <el-table-column prop="area" label="地区" align="center">

                </el-table-column>
                <el-table-column prop="company" label="公司名称" align="center">

                </el-table-column>
                <el-table-column prop="contacts" label="代理人名称" align="center">

                </el-table-column>
                <el-table-column prop="tel" label="联系方式" align="center">

                </el-table-column>
                <el-table-column prop="scale" label="提成比例" align="center">

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
        name: "agentlist",
        data(){
            return{
                tableData:[{
                    id:1,
                    area:'荆门',
                    company:'公司名称',
                    contacts:'联系人',
                    tel:'14736710397',
                    scale:'10%'
                }]
            }
        }
    }
</script>

<style scoped>

</style>
