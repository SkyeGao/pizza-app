<template>
  <div class="row mt-3">
    <div class="col-sm-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/logo.png" alt="">
          <form action="" @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">email:</label>
              <input type="email" id="email" v-model="email" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">password:</label>
              <input type="password" id="password" v-model="password" class="form-control">
            </div>
            <div class="form-group">
              <label for="cfpassword">cfpassword:</label>
              <input type="password" id="cfpassword" v-model="cfpassword" class="form-control">
            </div>
            <button class="btn btn-block btn-success" type="submit">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              email:'',
            password:'',
            cfpassword:''
          }
      },
    methods:{
          onSubmit(){
            if(this.password === this.cfpassword){
                const formdata={
                    email:this.email,
                    password:this.password,
                    cfpassword:this.cfpassword
              }
              axios.post('/user.json',formdata)
                .then(res=>{
                    //console.log(res)
                  this.$router.push({name:'loginLink'})
                }
            )
            }else {
              alert("2次密码输入不正确")
            }
          }
    }
  }
</script>
