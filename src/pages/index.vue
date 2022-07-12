<template>
  <v-container>
    <h1>{{ $t("hello") }}</h1>
    <f-tip type="info" class="mb-4"> {{ $t("hello") }}</f-tip>
    <h2>Resources</h2>
    <a href="https://fox-one.github.io/fe-docs/" target="_blank">Fe-Tools Docs</a>
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import mixins from "@/mixins";

@Component
class IndexPage extends Mixins(mixins.page) {
  get title() {
    return this.$t("hello") as string;
  }
}
export default IndexPage;
</script>

<style lang="scss" scoped></style>
