<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">发送普通消息</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text">返回</el-button>
            </div>
            <div>
                <el-form ref="form" :model="form" label-width="150px" style="width: 900px">
                    <el-form-item label="标题">
                        <el-input placeholder="请输入消息的标题" v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="消息简介">
                        <el-input placeholder="请输入消息的标题" v-model="form.title"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "sendMsg",
        data(){
            return{
                form:{}
            }
        }
    }
</script>

<style scoped>

</style>
