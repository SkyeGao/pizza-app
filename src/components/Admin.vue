<template>
  <h1>Admin</h1>
</template>
<script>
  export default{
      data(){
          return{
              name:'skye'
          }
      },
      beforeRouteEnter:(to,from,next)=>{
        //alert("hello "+ this.name);//拿不到name
        //next();
        next(vm=>{
          alert("hello "+ vm.name);
        })
      },
      beforeRouteLeave:(to,from,next)=>{
          if(confirm("确定离开吗？")==true){
              next()
          }else {
              next(false)
          }
      }
  }
</script>
