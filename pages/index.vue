<template>
  <div>
    <div class="checkin-page">
      {{ $t('hello') }}
    </div>
  </div>
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
    return 'Index Page'
  }
}
export default IndexPage
</script>

<style lang="scss" scoped></style>
