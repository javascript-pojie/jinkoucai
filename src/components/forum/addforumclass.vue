<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">添加新分类</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text">返回</el-button>
            </div>
            <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
                <el-form-item label="分类名称">
                    <el-input placeholder="请输入分类名称" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "addmaterialclass",
        data(){
            return{
                form:{
                    name:''
                }
            }
        },
        methods:{
            onSubmit(){
                this.post('/edu-admin/tag/save',this.form).then(r=>{
                    if(r.data.code === 1){
                        this.$message.success('添加成功')
                        this.$router.go(-1)
                    }else{
                        this.$message.error('添加失败')
                    }
                }).catch(e=>{
                    this.$message.error('添加失败：'+e)
                })
            }
        }
    }
</script>

<style scoped>

</style>
