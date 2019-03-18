<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="bg">
        <h1>大家来品尝我的pizza！</h1>
        <h2>这里有你们喜欢的Pizza！</h2>
        <button @click="goToMenu" class="btn btn-success">Menu</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      methods:{
          goToMenu(){
              //跳转上一次的页面
              //this.$router.go(-1);
              //指定地址
              //this.$router.replace('/menu')
              //指定路由名字
              //this.$router.replace({name:'menuLink'})
            //push跳转
            this.$router.push('/menu')
          }
      }
  }
</script>
<style>
  #home{
    background: url("../assets/pizza.jpg") no-repeat;
    background-size: cover;
    height: 85vh;
    padding: 10%;
  }
  h1,h2{
    margin: 6%;
  }
  .bg{
    background-color: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
