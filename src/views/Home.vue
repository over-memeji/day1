<template>
  <div>
     <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="top">
         <div class="logo" >电脑后台管理系统</div>
      <div class="Top_chu"><button @click="mz_tui">退出</button></div>
      </div>
     
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
          @select="add"
        >
          <a-sub-menu key="sub1" >
            <span slot="title"><a-icon type="user" />用户管理</span>
            <a-menu-item key="1">
              用户列表
            </a-menu-item>
         <a-menu-item key="2">
              123
            </a-menu-item>
          </a-sub-menu>

            <span slot="title"><a-icon type="laptop" />subnav 2</span>
            <a-menu-item key="5">
              现券管理
            </a-menu-item>
        
            <a-menu-item key="12">
              商品管理
            </a-menu-item>
        
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods:{
    mz_tui(){
      localStorage.clear()
      setTimeout(()=>{
        this.$router.push({path:"/"})
      },2000)
    },
    add(key){
      console.log(key.key)
      switch(key.key){
        case "1":
          this.$router.push({path:'/one'})
          break;
          case "2":
          this.$router.push({path:'/two'})
          break;
          default:break;
      }
    }
  }
}
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  width: 1200px;
  height: 31px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 5px 28px 16px 0;
  float: left;
  color:white;
  font-size: 30px;
}
.top{
  display: flex;
}
.Top_chu{
  /* margin-top: 10px; */
  width: 200px;
  height: 50px;
}
</style>