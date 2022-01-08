<template>
  <a-menu
    :selectedKeys="selectedKeys"
    @click="handleMenuClick"
    mode="horizontal"
    class="menu"
  >
    <a-menu-item :key="0">推荐</a-menu-item>
    <a-menu-item :key="1">热门车系</a-menu-item>
    <a-menu-item :key="2">10万以下</a-menu-item>
    <a-menu-item :key="3">10-20万</a-menu-item>
    <a-menu-item :key="4">20-30万</a-menu-item>
    <a-menu-item :key="5">30万以上</a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      selectedKeys: [0],
    };
  },
  methods: {
    handleMenuClick({ key }) {
      this.selectedKeys = [key];
    },
  },
};
</script>

<style scoped>
.menu {
  line-height: 62px;
  border-bottom: none;
}
</style>
