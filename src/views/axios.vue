<template></template>

<script lang="ts">
// import { defineComponent } from "vue";
import axios from '../utils/axios'

export default {
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="less"></style>
