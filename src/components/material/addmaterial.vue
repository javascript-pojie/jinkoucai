<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="card-title">添加素材</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text">返回</el-button>
            </div>
            <div>
                <el-form ref="form" :model="form" label-width="150px" style="width: 400px">
                    <el-form-item label="素材名称">
                        <el-input placeholder="请输入素材名称" v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="素材分类">
                        <el-select v-model="form.typeId" filterable placeholder="请选择">
                            <el-option
                                    v-for="item in materialclass"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="作者">
                        <el-input placeholder="请输入作者" v-model="form.author"></el-input>
                    </el-form-item>
                    <el-form-item label="标签">
                        <el-input placeholder="请输入标签" v-model="form.tags"></el-input>
                    </el-form-item>
                    <el-form-item label="封面图片">
                        <el-upload
                                class="upload-demo"
                                :limit="1"
                                :action="this.URL+'/edu-admin/upload/file/temp'"
                                list-type="picture"
                                :on-success="coverImgUpSuccess">
                            <el-button size="small" type="primary">上传封面</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传完整视频">
                        <el-upload
                                class="upload-demo"
                                :limit="1"
                                :action="this.URL+'/edu-admin/upload/file/temp'"
                                list-type="picture"
                                :on-success="videoUrlUpSuccess">
                            <el-button size="small" type="primary">上传完整视频</el-button>
                            <div slot="tip" class="el-upload__tip">2分钟以内，要求mp4格式，不超过300M</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传背景视频">
                        <el-upload
                                class="upload-demo"
                                :limit="1"
                                :action="this.URL+'/edu-admin/upload/file/temp'"
                                list-type="picture"
                                :on-success="audioUrlUpSuccess">
                            <el-button size="small" type="primary">上传背景音频</el-button>
                            <div slot="tip" class="el-upload__tip">2分钟以内，要求mp3格式，不超过30M</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传字幕文件">
                        <el-upload
                                class="upload-demo"
                                :limit="1"
                                :action="this.URL+'/edu-admin/upload/file/temp'"
                                list-type="picture"
                                :on-success="audioSrtUrlUpSuccess">
                            <el-button size="small" type="primary">上传字幕文件</el-button>
                            <div slot="tip" class="el-upload__tip">上传字幕文件:（要求srt格式，UTF-8）</div>
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
                    typeId:'',
                    author:'',
                    tags:'',
                    coverImg:'',
                    videoUrl:'',
                    audioUrl:'',
                    audioSrtUrl:'',
                    type:1
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
                this.post('/edu-admin/mate/save',this.form).then(r=>{
                    if(r.data.code === 1){
                        this.$message.success('添加成功')
                        this.$router.go(-1)
                    }
                })
            },
            coverImgUpSuccess(r){
                this.form.coverImg = r
            },
            videoUrlUpSuccess(r){
                this.form.videoUrl = r
            },
            audioUrlUpSuccess(r){
                this.form.audioUrl = r
            },
            audioSrtUrlUpSuccess(r){
                this.form.audioSrtUrl = r
            }
        }
    }
</script>

<style scoped>

</style>
