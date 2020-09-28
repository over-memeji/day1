<template>
  <div>
          
  <a-input size="small" placeholder="Basic usage" v-model="name" allow-clear @change="onChange"/>
 <a-button type="primary" shape="circle" icon="search" @click="onClick"/>
    <a-table
      :columns="columns"
      :data-source="userlist"
      :pagination="{pageSize:2,total:6}"
      @change="add"
    >
      <a slot="name" slot-scope="text">{{ text }}</a>
      
    </a-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        name:"",
      userlist: [],
      columns: [
        {
          title: "姓名",
          dataIndex: "username",

          scopedSlots: { customRender: "username" },
        },
        {
          title: "邮箱",
          dataIndex: "email",
        },
        {
          title: "电话",
          dataIndex: "mobile",
        },
        {
          title: "角色",
          dataIndex: "role_name",
        },
      ],
      pag:1
    };
  },
  mounted() {
      
 this.add({ current:1 });
  },
  methods: {
    add(pagination) {
      console.log(pagination.current);
      this.pag=pagination.current
      axios({
        method: "get",
        url: `https://www.liulongbin.top:8888/api/private/v1/users`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        params: {
          pagesize: 2,
          pagenum:pagination.current,
        },
      }).then((res) => {
        console.log(res);
        this.userlist = res.data.data.users;
      });
    },
    onClick(){
        this.userlist.forEach((item)=>{
            if(item.username==this.name){
                this.userlist = []
                this.userlist.push(item)
            }
        })
    },
    onChange(e){
        console.log(e)
        this.add({current:this.pag})
    }
  },
};
</script>

<style scoped>
.ant-input-sm{
    width: 200px;
}
</style>