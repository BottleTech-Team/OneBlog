<template>
  <div class="page-header">
    <div class="container">
      <img :src="header.icon">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

export type MenuItem = {
  name: String,
  link: String
}
export type Menu = {
  name: String,
  items: Array<MenuItem>
}

export type Header = {
  icon: String,
  menus: Array<Menu>
}

@Component
export default class PageHeader extends Vue {
  @Prop({ type: String, required: true }) header!: Header

  
}
</script>

