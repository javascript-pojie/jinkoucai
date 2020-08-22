<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">banner管理</span>
                <router-link to="/banner/add"><el-button style="float: right; padding: 3px 0" type="text">添加新的banner</el-button></router-link>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column prop="id" label="ID" align="center">

                </el-table-column>
                <el-table-column prop="title" label="标题" align="center">

                </el-table-column>
                <el-table-column prop="desc1" label="描述" align="center">

                </el-table-column>
                <el-table-column label="图片" align="center" className="img-box">
                    <template slot-scope="scope">
                        <el-image style="width: 100px" :src="imgUrl+scope.row.pic"></el-image>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="$router.push('/banner/add?type=edit')">编辑</el-button>
                        <el-button size="mini" type="danger" @click="onDelete(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "banner",
        data(){
            return{
                imgUrl:this.IMGURL,
                tableData: []
            }
        },
        created() {
            this.getData();
        },
        methods:{
            onDelete(i,r){
                this.get('/edu-admin/banner/delete',{id:r.id}).then(r=>{
                    if(r.data.code === 1){
                        this.$message.success('删除成功');
                        this.getData();
                    }
                })
            },
            getData(){
                this.get('/edu-admin/banner/list').then(r=>{
                    if(r.data.code === 1){
                        this.tableData = r.data.data
                    }
                })
            }
        }
    }
</script>

<style>
    .img-box .cell{
        display: flex!important;
        justify-content: center;
    }
</style>
