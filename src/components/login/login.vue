<template>
    <div class="container">
        <div class="form">
            <h1 class="title textcenter marginbottom20px">美诵语文APP运营系统</h1>
            <el-input class="margintop20px" placeholder="用户名" prefix-icon="el-icon-user" v-model="form.user"></el-input>
            <el-input class="margintop20px" placeholder="密码" type="password" prefix-icon="el-icon-lock" v-model="form.password"></el-input>
            <el-checkbox-group text-color="#ffffff" v-model="checked">
                <el-checkbox class="margintop20px">记住密码</el-checkbox>
            </el-checkbox-group>
            <el-button class="margintop20px login-btn"  type="primary" @click="onSubmit">立即登陆</el-button>
        </div>
    </div>
</template>

<script>
    const Base64 = require('js-base64').Base64

    export default {
        name: "login",
        data(){
            return{
                form:{
                    user:"",
                    password:""
                },
                checked:false
            }
        },
        created(){
            let user = this.getCookie("user")
            let password = Base64.decode(this.getCookie("password"))
            if(user){
                this.form.user = user
                this.form.password = password
                this.checked = true
            }
        },
        methods:{
            onSubmit(){
                let data={
                    loginName: this.form.user,
                    pwd: this.form.password
                }
                this.post('/edu-admin/sys/saveLogin',data).then(r=>{
                    console.log(r)
                    if(r.data.code === 1){
                        this.$message.success('登陆成功');
                        localStorage.setItem("token",r.data.data)
                        this.remember()
                        this.$router.push('/')
                    }else {
                        this.$message.error(r.data.msg);
                    }
                }).catch(e=>{
                    console.log("错误:"+e)
                })
            },
            remember(){
                if(this.checked){
                    this.setCookie("user",this.form.user)
                    // base64加密密码
                    let passWord = Base64.encode(this.form.password)
                    this.setCookie("password",passWord)
                }else{
                    this.setCookie("user","")
                    this.setCookie("password","")
                }
            },
            setCookie: function (cName, value, expiredays){
                var exdate = new Date()
                exdate.setDate(exdate.getDate() + expiredays)
                document.cookie = cName + '=' + decodeURIComponent(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
            },
            getCookie: function (key) {
                if (document.cookie.length > 0) {
                    var start = document.cookie.indexOf(key + '=')
                    if (start !== -1) {
                        start = start + key.length + 1
                        var end = document.cookie.indexOf(';', start)
                        if (end === -1) end = document.cookie.length
                        return unescape(document.cookie.substring(start, end))
                    }
                }
                return ''
            },
        }
    }
</script>

<style scoped>
    .container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form{
        width: 300px;
    }
    .login-btn{
        width: 100%;
        background: #009688;
        border: #009688;
    }
</style>
