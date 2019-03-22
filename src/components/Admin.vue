<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!--pizza-->
      <app-newpizza></app-newpizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!--brand-->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deletePizza(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import NewPizza  from './NewPizza.vue'
  export default{
      data(){
          return{
              name:'skye'
              //getMenuItems:[]
          }
      },
//      beforeRouteEnter:(to,from,next)=>{
//        //alert("hello "+ this.name);//拿不到name
//        //next();
//        next(vm=>{
//          alert("hello "+ vm.name);
//        })
//      },
//      beforeRouteLeave:(to,from,next)=>{
//          if(confirm("确定离开吗？")==true){
//              next()
//          }else {
//              next(false)
//          }
//      }
    computed:{
      //获取vuex state 里面的menuitems
      getMenuItems:{
        get(){
         return this.$store.getters.getMenuItems
        },
        set(){
        }
      }
    },
  created(){
    console.log(1)
    fetch("https://wd4573041499akpliu.wilddogio.com/menu.json")
      .then(res =>res.json())
      .then(data => {
        //console.log(data)
        //this.getMenuItems = data
        let arr = []
        for(let key in data){
            data[key].did = key
          arr.push(data[key])
        }
        //数据同歩
        this.$store.commit('setMenuItems',arr)
        //this.getMenuItems = arr
      })
      .catch(error => console.log(error))
  },
    components:{
          'app-newpizza':NewPizza
    },
    methods:{
      deletePizza(item){
          fetch("https://wd4573041499akpliu.wilddogio.com/menu/"+item.did+"/.json",{
              method:'DELETE',
              headers:{
                  'Content-type':'application/json'
              }
          }).then(res => res.json())
//            .then(data => this.$router.push({name:'menuLink'}))
            //实时删除，不需要通过跳转实现
            .then(data => this.$store.commit('removeMenuItems',item))
            .catch(error => console.log(error))
      }
    }
  }
</script>
