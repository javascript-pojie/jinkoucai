<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">添加素材</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text">返回</el-button>
            </div>
            <div>
                <el-form ref="form" :model="form" label-width="80px" style="width: 350px">
                    <el-form-item label="素材名称">
                        <el-input placeholder="请输入素材名称" v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="素材分类">
                        <el-select v-model="form.materialclass" filterable placeholder="请选择">
                            <el-option
                                    v-for="item in materialclass"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="图片">
                        <el-upload
                                class="upload-demo"
                                :limit="1"
                                :action="this.URL+'/edu-admin/upload/file/temp'"
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
        name: "addmaterial",
        data(){
            return{
                form:{
                    title:'',
                    materialclass:''
                },
                materialclass:{}
            }
        },
        created() {
            this.post('/edu-admin/matetype/list',{curpage:1}).then(r=>{
                var materialclass = []
                if(r.data.code === 1){
                    r.data.data.records.forEach((v,i)=>{
                        materialclass.push({
                            value: v.id,
                            label: v.name
                        })
                    })
                    this.materialclass = materialclass
                }else{
                    this.$message.error('查询素材分类列表失败'+r.data)
                }
            }).catch(e=>{
                this.$message.error('查询素材分类列表失败'+e)
            })
        },
        methods:{
            onSubmit(){

            }
        }
    }
</script>

<style scoped>

</style>
