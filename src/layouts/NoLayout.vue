<template>
  <div>
    <AppTopBanner></AppTopBanner>
    <HeaderComponent></HeaderComponent>
    <router-view />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>

import AppTopBanner from "@/shared/components/AppTopBanner.vue";
import HeaderComponent from "@/shared/components/AppHeader.vue";
import FooterComponent from "@/shared/components/AppFooter.vue";
export default {
  data() {
    return {};
  },
  components: {
    HeaderComponent,
    FooterComponent,
    AppTopBanner
  },
  methods: {
    checkIfCoockieAccepted() {}
  },
  mounted() {
    this.checkIfCoockieAccepted();
  }
};
</script>
<style scoped>
</style>
