<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span class="card-title">添加素材</span>
            <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text">返回</el-button>
        </div>
        <div>
            <el-form ref="form" :model="form" label-width="150px" style="width: 600px">
                <el-form-item label="商品名称">
                    <el-input placeholder="请输入商品名称" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="商品状态">
                    <el-select v-model="form.status1" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input placeholder="请输入商品价格" v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="商品视频">
                    <el-upload
                            class="upload-demo"
                            :limit="1"
                            :action="this.URL+'/edu-admin/upload/file/temp'"
                            list-type="picture"
                            :on-success="coverImgUpSuccess">
                        <el-button size="small" type="primary">上传视频</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="商品图片">
                    <el-upload
                            class="upload-demo"
                            :limit="1"
                            :action="this.URL+'/edu-admin/upload/file/temp'"
                            list-type="picture"
                            :on-success="coverImgUpSuccess">
                        <el-button size="small" type="primary">上传图片</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="关注人数">
                    <el-input placeholder="请输入关注数" v-model="form.focus"></el-input>
                </el-form-item>
                <el-form-item label="分享人数">
                    <el-input placeholder="请输入分享数" v-model="form.shares"></el-input>
                </el-form-item>
                <el-form-item label="库存">
                    <el-input placeholder="请输入库存" v-model="form.quantity"></el-input>
                </el-form-item>
                <el-form-item label="商品描述">
                    <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="form.content1">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "addProduct",
        data(){
            return{
                form:{
                    name: "",
                    content1: "",
                    video: "",
                    img: "",
                    price: "",
                    focus: "",
                    shares: "",
                    quantity: "",
                    type1: this.$route.query.type,
                    status1: ""
                },
                options:[{
                    value:1,
                    label:'上架'
                },{
                    value:2,
                    label:'下架'
                }]
            }
        },
        methods:{
            coverImgUpSuccess(r){
                this.form.coverImg = r
            },
            onSubmit(){
                this.$confirm('添加前请检查各项参数', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.post('/edu-admin/goods/save',this.form).then(r=>{
                        if(r.data.code === 1){
                            this.$message.success('添加成功');
                            this.$router.go(-1)
                        }else{
                            this.$message.error('添加错误'+r.data.msg)
                        }
                    }).catch(e=>{
                        this.$message.error('添加错误'+e)
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消操作'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>
