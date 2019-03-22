<template>
  <div class="row">
    <!--菜单-->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}寸</td>
            <td>￥{{option.price}}</td>
            <td><button @click="addToCar(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-4">
      <div v-if="carList.length>0">
        <table class="table">
          <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>价格</th>
            <th>名字</th>
          </tr>
          </thead>
          <tbody v-for="item in carList">
          <tr>
            <td>
              <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
              <span>{{item.quantity}}</span>
              <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
            </td>
            <td>{{item.name}} {{item.size}}寸</td>
            <td>￥{{item.price * item.quantity}}</td>
          </tr>
          </tbody>
        </table>
        <p>总价：￥ {{total}}</p>
        <button @click="submitOrder" class="btn btn-success btn-block">
          提交
        </button>
      </div>
      <div v-else="">
        <p>购物车没有东西</p>
      </div>
    </div>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">提交订单</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>提交成功</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //import axios from 'axios'
  import time from '../time'
  export default{
     data(){
      return{
        //getMenuItems:[],
        carList:[]
      }
    },
    created(){
      //axios.get('/menu.json').then(
//      this.http.get('/menu.json').then(
//          res=>{
//              console.log(res.data)
//              this.getMenuItems = res.data
//          }
//      )
      //获取数据存储到vuex
        this.http.get('/menu.json').then(
          res=> {
              this.$store.commit('setMenuItems',res.data)
          })
    },
    computed:{
        //获取vuex state 里面的menuitems
      getMenuItems(){
        //console.log("computed")
        //return this.$store.state.menuItems
        // 通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      total(){
          let totalcost=0
          for(let i =0;i<this.carList.length;i++){
            totalcost+=(this.carList[i].price*this.carList[i].quantity)
          }
          return totalcost
      }
    },
    methods:{
        fetchData(){

        },
        addToCar(item,option){
            let car ={
              id:item.id,
              name:item.name,
              price:option.price,
              size:option.size,
              quantity:1
            }
            if(this.carList.length>0){
                //过滤
              let result = this.carList.filter((car)=>{
                  return (car.id ===item.id && car.size === option.size)
              })
              if(result != null && result.length >0){
                  result[0].quantity++
              }else {
                this.carList.push(car)
              }
            }else {
              this.carList.push(car)
              //console.log(time.formatTime(new Date()))
            }
        },
      decreaseQuantity(item){
            item.quantity--
        if(item.quantity<=0){
          this.carList.splice(this.carList.indexOf(item),1)
        }
      },
      increaseQuantity(item){
          item.quantity++
      },
      submitOrder(){
          let data ={
            orderlist:this.carList,
            ordertime:time.formatTime(new Date()),//下订单时间
            totalcost:this.total//computed计算的总价格
          }
          axios.post('order.json',data).then(res=>{
          //console.log(res);
          if(res.status==200){
            $("#exampleModalCenter").modal('show')
          }
        })
      }
    }
  }
</script>
