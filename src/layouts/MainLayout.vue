<template>
  <div class="Site">
    <AppTopBanner></AppTopBanner>
    <HeaderComponent></HeaderComponent>
    <div class="Site-content">
      <router-view />
    </div>
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
  }
};
</script>
<style scoped>
.Site {
  display: flex;
  min-height: 99vh;
  flex-direction: column;
}
.Site-content {
  flex: 1;
}
</style>
