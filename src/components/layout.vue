<template>
    <div class="container">
        <el-container>
            <el-header class="header">
                <div class="title">美诵语文管理运营系统</div>
                <div class="user">
                    <el-popover
                            placement="top-start"
                            trigger="click">
                        <div slot="reference" class="font14 marginright20px cursor">
                            <div class="el-icon-user-solid"></div>
                            超级管理员
                            <div class="el-icon-caret-bottom"></div>
                        </div>
                        <div>
                            <div class="textcenter">退出登陆</div>
                        </div>
                    </el-popover>
                </div>
            </el-header>
            <el-aside class="aside">
                <el-menu
                        @select="handleSelect"
                        active-text-color="#ffffff"
                        background-color="#20222A"
                        class="el-menu-vertical-demo"
                        default-active="2"
                        text-color="#fff"
                        style="width: 300px">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item :class="menuActive == '1-1'?'active':''" index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="main">main</el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {
                menuActive: ""
            }
        },
        methods: {
            handleSelect(index) {
                this.menuActive = index
            }
        }
    }
</script>

<style scoped>
    .aside, .main {
        background: #ccc;
    }

    .header {
        width: 100%;
        height: 50px !important;
        position: relative;
        padding-left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10001;
    }

    .aside {
        width: 300px;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        padding-top: 50px;
        z-index: 10000;
        background: #20222A;
    }

    .main {
        position: fixed;
        top: 50px;
        left: 300px;
        right: 0;
        bottom: 0;
        flex: 1;
    }

    .title {
        width: 300px;
        height: 50px;
        background: #20222A;
        line-height: 50px;
        color: #ffffff;
        text-align: center;
        letter-spacing: 2px;
    }

    .out-login {

    }

    .user {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .active {
        background: #009688 !important;
    }
    .textcenter:hover{
        color: #009688;
        cursor: pointer;
    }
</style>
