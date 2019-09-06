<template>
  <nav-layout>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:content>
      <div class="checkin-page">
        check in page
      </div>
    </template>
  </nav-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  head () {
    return {
      title: this.title
    }
  }
})
class IndexPage extends Vue {
  get title () {
    return 'Check-In'
  }
}
export default IndexPage
</script>

<style lang="scss" scoped></style>
