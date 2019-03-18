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
            <button class="btn btn-block btn-success" type="submit">登录</button>
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
        password:''
      }
    },
    methods:{
      onSubmit(){
        axios.get('/user.json').then(
            res=>{
                //console.log(res.data)
              const data = res.data
              const users=[]
              for (let key in data){
                  const user = data[key]
                  //console.log(user)
                  users.push(user)
              }
              //.log(users)
              //过滤
              let result = users.filter((user)=>{
                return user.email === this.email && user.password === this.password
              })
              console.log(result)
              if(result!=null && result.length>0){
                  this.$router.push({name:'homeLink'})
              }else {
                  alert("账号密码有误!")
              }
            }
        )

      }
    }
  }
</script>
