<template>
  <v-app class="default-layout">
    <nuxt />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
class DefaultLayout extends Vue {}
export default DefaultLayout
</script>

<style lang="scss" scoped>
.default-layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
