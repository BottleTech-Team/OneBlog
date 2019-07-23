<template>
  
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Header from '@/models/page-header'

@Component
export default class PageHeader extends Vue {
  @Prop({ type: String, required: true }) header!: Header

  
}
</script>

