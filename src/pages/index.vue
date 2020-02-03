<template>
  <v-content>
    <v-container>
      <h1>HELLO</h1>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  middleware: 'i18n',
  head () {
    return {
      title: this.title
    }
  }
})
class IndexPage extends Vue {
  get title () {
    return 'hello'
  }
}
export default IndexPage
</script>

<style lang="scss" scoped></style>
