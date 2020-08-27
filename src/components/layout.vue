<template>
    <div class="container">
        <el-container>
            <el-header class="header">
                <div class="title">美诵语文APP运营系统</div>
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
                        :default-active="'/'+this.$route.path.split('/')[1]"
                        @select="handleSelect"
                        active-text-color="#ffffff"
                        background-color="#20222A"
                        class="el-menu-vertical-demo"
                        :router="true"
                        text-color="#fff"
                        style="border: 0">
                    <el-menu-item index="/banner">
                        <i class="el-icon-guide"></i>
                        <span slot="title">首页banner管理</span>
                    </el-menu-item>
                    <el-menu-item index="/agent">
                        <i class="el-icon-money"></i>
                        <span slot="title">区域代理商管理</span>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-folder-opened"></i>
                            <span>素材管理</span>
                        </template>
                        <el-menu-item index="/materialclass">素材分类</el-menu-item>
                        <el-menu-item index="/material">素材列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-collection"></i>
                            <span>教学交流管理</span>
                        </template>
                        <el-menu-item index="/forumclass">分类管理</el-menu-item>
                        <el-menu-item index="/material">素材列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item index="/user">所有用户</el-menu-item>
                        <el-menu-item index="/examine">审核列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-shopping-bag-1"></i>
                            <span>商品管理</span>
                        </template>
                        <el-menu-item index="/user">普通商城</el-menu-item>
                        <el-menu-item index="/examine">积分商城</el-menu-item>
                        <el-menu-item index="/user"><拼></拼>团商城</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-monitor"></i>
                            <span>运营账户管理</span>
                        </template>
                        <el-menu-item index="/user">普通商城</el-menu-item>
                        <el-menu-item index="/examine">积分商城</el-menu-item>
                        <el-menu-item index="/user">拼团商城</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-paperclip"></i>
                            <span>积分系统</span>
                        </template>
                        <el-menu-item index="/user">兑换比例设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-bank-card"></i>
                            <span>资金管理</span>
                        </template>
                        <el-menu-item index="/user">充值订单查询</el-menu-item>
                        <el-menu-item index="/user">消费订单查询</el-menu-item>
                        <el-menu-item index="/user">提现审核</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <router-view/>
            </el-main>
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
        created(){

        },
        methods: {
            handleSelect(index) {
                this.menuActive = index
            }
        }
    }
</script>

<style scoped>
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
        background: #f2f2f2;
    }

    .title {
        width: 300px;
        height: 50px;
        background: #20222A;
        line-height: 50px;
        color: #ffffff;
        text-align: center;
        letter-spacing: 2px;
        font-size: 16px;
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
