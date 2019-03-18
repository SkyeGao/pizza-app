<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
      <div class="card-body">
        <h4 class="card-title">联系我们</h4>
        <p class="card-text">skye@email.com</p>
      </div>
      <div>
        <router-link tag="li" :to="{name:'phoneLink'}" class="nav-link">电话</router-link>
        <router-link tag="li" :to="{name:'nameLink'}" class="nav-link">店主</router-link>
        <div class="col-5">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>
