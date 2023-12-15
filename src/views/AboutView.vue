<template>
    <div class="Computer">
    <h1>This is an about page</h1>
    <button @click="transformData">转换数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 放入需要的翻譯
      jsonData: [
  {
    en_us: 'Are you sure you want to copy this data?',
    es_mn: '¿Estás seguro de que quieres copiar estos datos?',
    Key: 'alert_copyData',
    zh_cn: '确认复制此笔资料吗?',
  },
  {
    en_us: 'Are you sure you want to delete this data?',
    es_mn: '¿Estás seguro de que quieres eliminar estos datos?',
    Key: 'alert_deleteData',
    zh_cn: '确认将此笔资料删除吗?',
  },
  ],
      transformedData: {},
    };
  },
  methods: {
    transformData() {
      this.transformedData = this.jsonData.reduce((result, current) => {
        result[current.Key] = current.es_mn;
        return result;
      }, {});
      console.log(this.transformedData);
    },
  },
};
</script>