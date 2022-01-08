<template>
  <a-row :gutter="16">
    <a-col v-for="(item, index) in 8" :key="index" :span="3">
      <a-card hoverable>1</a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "CarList",
};
</script>

<style scoped></style>
