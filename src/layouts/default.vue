<template>
  <v-app>
    <default-app-bar />

      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultAppBar from "./default/NavBar.vue";
import Modals from "./modals/index.vue";

@Component
class DefaultLayout extends Vue {}
export default DefaultLayout;
</script>

<style lang="scss" scoped></style>
