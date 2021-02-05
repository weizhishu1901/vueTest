<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <h3 class="title">vue管控系统</h3>
          <el-col>
            <el-menu
              @select="handleMenu"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="动态看板">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>动态看板</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="综合管理">
                <i class="el-icon-menu"></i>
                <span slot="title">综合管理</span>
              </el-menu-item>
              <el-menu-item index="基础信息">
                <i class="el-icon-document"></i>
                <span slot="title">基础信息</span>
              </el-menu-item>
              <el-menu-item index="系统管理">
                <i class="el-icon-setting"></i>
                <span slot="title">系统管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <div class="logout" @click="handleBack">退出</div>
          <el-breadcrumb class="el-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>当前:{{this.menuTitle}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>我是内容区域</el-main>
        <el-footer>
          <div>遵循 MIT 开源协议</div>
          <div>Copyright © 2014-2021 Evan You</div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'First',
  data() {
    return {
      menuTitle: '动态看板',
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleMenu(e) {
      this.menuTitle = e;
    },
  },
};
</script>

<style scoped>
  .el-header{
    background: linear-gradient(to right, gray,white);
    height: 60px;
  }
  .el-breadcrumb{
    margin-top: 40px;
  }
  .el-aside{
    background-color: #545c64;
    height: 100vh;
  }
  .el-main{
    background-color: white;
    height: 100%;
  }
  .el-footer{
    background: linear-gradient(gray,white);
    height: 60px;
  }
  .title{
    color: white
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 400;
    color: white !important;
    cursor: text;
    margin-left: 0px;
    padding-left: 0px;
  }
  .logout{
    text-align: right;
    cursor: pointer;
  }
</style>
