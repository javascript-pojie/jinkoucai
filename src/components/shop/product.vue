<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">{{cardTitle}}</span>
                <router-link :to="'/product/add'+'?type='+to"><el-button style="float: right; padding: 3px 0" type="text">添加新的商品</el-button></router-link>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column prop="id" label="ID" align="center" width="80"></el-table-column>
                <el-table-column prop="name" label="商品名称" align="center"></el-table-column>
                <el-table-column prop="price" label="价格" align="center">

                </el-table-column>
                <el-table-column prop="quantity" label="库存" align="center"></el-table-column>
                <el-table-column prop="status1" label="状态" align="center">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status1 === 1" type="success">已上架</el-tag>
                        <el-tag v-if="scope.row.status1 === 2" type="info">已下架</el-tag>
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
        name: "product",
        data(){
            return{
                cardTitle:'',
                tableData:[],
                pageTotal:0,
                to:this.$route.query.type
            }
        },
        created() {
            this.initPage()
            this.getData()
        },
        watch:{
            '$route'(){
                this.to = this.$route.query.type
                this.initPage()
            }
        },
        methods:{
            initPage(){
                switch (this.$route.query.type) {
                    case "1":{
                        this.cardTitle = '积分商城'
                        break
                    }
                    case "2":{
                        this.cardTitle = '拼团商城'
                        break
                    }
                    case "3":{
                        this.cardTitle = '普通商城'
                        break
                    }
                }
            },
            getData(){
                //todo 积分商城查询 要能根据商城类型查询 根据名称模糊查询
                this.post('/edu-admin/goods/list',{curpage:1}).then(r=>{
                    if(r.data.code === 1){
                        this.tableData = r.data.data.records
                        this.pageTotal = r.data.data.total
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
