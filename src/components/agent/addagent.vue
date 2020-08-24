<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">添加代理人</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text">返回</el-button>
            </div>
            <el-form ref="form" :model="form" label-width="80px" style="width: 500px">
                <el-form-item label="区域">
                    <el-input v-model="form.area"></el-input>
                    <el-link :underline="false" type="danger">*警告：设置区域错误会导致账务出现不可以恢复的错误</el-link>
                </el-form-item>
                <el-form-item label="分成比例">
                    <el-input v-model="form.scale"></el-input>
                    <el-link :underline="false" type="danger">*警告：设置比例错误会导致账务出现不可以恢复的错误</el-link>
                </el-form-item>
                <el-form-item label="公司名称">
                    <el-input v-model="form.company"></el-input>
                </el-form-item>
                <el-form-item label="代理人">
                    <el-input v-model="form.contacts"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input v-model="form.tel"></el-input>
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
        name: "addagent",
        data(){
            return{
                form:{
                    area:'',
                    company:'',
                    contacts:'',
                    tel:'',
                    scale:''
                }
            }
        }
    }
</script>

<style scoped>

</style>
