<template>
  <form>
    <h3 class="text-muted my-5" @click="addNewPizza">添加新的Pizza</h3>
    <div class="form-group row">
      <label for="name" class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" id="name" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label for="description" class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" id="description" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label for="size1" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" id="size1" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
    <div class="form-group row">
      <label for="price1" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" id="price1" class="form-control" v-model="newPizza.price1">
      </div>
    </div>
    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label for="size2" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" id="size2" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
    <div class="form-group row">
      <label for="price2" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" id="price2" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="form-group row">
      <div @click="addNewPizza" class="btn btn-success btn-block">添加</div>
    </div>
  </form>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        newPizza:{}
      }
    },
    methods:{
      addNewPizza(){
//        console.log(this.newPizza);
        const uuid = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });//随机生成id
        let data = {
            name: this.newPizza.name,
            id: uuid,
            description: this.newPizza.description,
            options:[{
                price: this.newPizza.price1,
                size: this.newPizza.size1
            },{
                size: this.newPizza.size2,
                price: this.newPizza.price2
            }]
        }
        //axios  或者 vue-resource 或者 fetch
//        fetch("https://wd4573041499akpliu.wilddogio.com/menu.json",{
//            method:'POST',
//          headers:{
//                "Content-type":'application/json'
//          },
//          body:JSON.stringify(data)
//        }).then(res => res.json())//转json
//         .then(data => this.$router.push({name:'menuLink'}))
//          .then(data => this.$store.commit('pushToMenuItems',data))
//          .catch(error => console.log(error))
        // 数据同步到vuex中
        this.http.post("menu.json",data)
          .then(res => this.$store.commit("pushToMenuItems",data))
      }
    }
  }
</script>
