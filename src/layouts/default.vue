<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Nuxt Template</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
class DefaultLayout extends Vue {}
export default DefaultLayout;
</script>

<style lang="scss" scoped></style>
