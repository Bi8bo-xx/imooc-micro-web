<template>
  <a-layout>
    <a-layout-header class="layout-header">
      <!-- 导航列表 -->
      <Navbar />
    </a-layout-header>
    <a-layout-content class="layout-content">
      <a-row>
        <a-col :span="20" :offset="2">
          <!-- 汽车展示列表 -->
          <CarList />
          <a-row>
            <a-col :span="16">
              <!-- 轮播图 -->
              轮播图
            </a-col>
            <a-col :span="8">
              <!-- 新闻列表 -->
              新闻列表
            </a-col>
          </a-row>
          <a-row>
            <!-- 广告图 -->
            广告图
          </a-row>
          <a-row>
            <!-- 车型列表 -->
            车型列表
          </a-row>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Navbar from "./components/navbar.vue";
import CarList from "./components/carList.vue";

export default {
  name: "Energy",
  components: {
    Navbar,
    CarList,
  },
};
</script>

<style scoped>
.layout-header {
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
}

.layout-content {
  background-color: #fff;
  padding-top: 24px;
}
</style>
