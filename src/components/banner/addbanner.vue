<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">添加新banner</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text">返回</el-button>
            </div>
            <div>
                <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
                    <el-form-item label="标题">
                        <el-input placeholder="请输入标题" v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input placeholder="请输入描述" v-model="form.desc1"></el-input>
                    </el-form-item>
                    <el-form-item label="链接">
                        <el-input placeholder="请输入链接" v-model="form.link"></el-input>
                    </el-form-item>
                    <el-form-item label="图片">
                        <el-upload
                                class="upload-demo"
                                :limit="1"
                                :action="url+'/edu-admin/upload/file/temp'"
                                :on-success="upSuccess"
                                :on-error="upError"
                                :file-list="fileList"
                                list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
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
        name: "addbanner",
        data() {
            return {
                url:process.env.API_ROOT,
                form: {
                    title: '',
                    desc1: '',
                    pic: '',
                    link:''
                },
                fileList: []
            }
        },
        created(){

        },
        methods:{
            upSuccess(file){
                this.form.pic = file
            },
            upError(err){
                this.$message.error('上传失败:'+err);
            },
            onSubmit(){
                let data = this.form
                this.post('/edu-admin/banner/save',data).then(r=>{
                    if(r.data.code === 1){
                        this.$message.success('添加成功');
                    }
                }).catch(e=>{
                    this.$message.error(r.data.msg);
                })
            }
        }
    }
</script>

<style scoped>

</style>
