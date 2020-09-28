<template>
  <div>
      <div class="mz_box">
          <p>登录</p>
             <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
    <a-form-model-item>
      <a-input v-model="formInline.user" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <br>
    <a-form-model-item>
      <a-input v-model="formInline.password" type="password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item><br>
    <a-form-model-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
        
      >
        Log in
      </a-button>
    </a-form-model-item>
  </a-form-model>
      </div>
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    };
  },
    methods: {
    handleSubmit(e) {
      console.log(this.formInline);
      axios.post("https://www.liulongbin.top:8888/api/private/v1/login",{
          username:this.formInline.user,
          password:this.formInline.password
      }).then(res=>{
          console.log(res)
          var token = res.data.data.token
          localStorage.token = token
          this.$router.push({path:'/'})
      })
    },
  },
}
</script>

<style scoped>
.mz_box{
    width: 500px;
    height: 400px;
    margin: 200px;
}
</style>