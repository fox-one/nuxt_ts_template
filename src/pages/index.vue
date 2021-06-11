<template>
  <v-container> </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AuthModuleKey, MutationTypes } from "@/store/auth/types";

@Component({
  head() {
    return {
      title: this.title,
    };
  },
})
class IndexPage extends Vue {
  get title() {
    return "hello";
  }

  mounted() {
    this.$store.commit(AuthModuleKey + MutationTypes.SET_TOKEN, "sadf");
  }
}
export default IndexPage;
</script>

<style lang="scss" scoped></style>
