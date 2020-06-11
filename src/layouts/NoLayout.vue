<template>
  <div class="Site">
    <AppSpinner></AppSpinner>
    <AppTopBanner></AppTopBanner>
    <div class="text-center">
      <div class="usa-navbar">
        <div class="usa-logo" id="basic-logo">
          <router-link to="/">
            <img src="../assets/uswds-icon-color.svg" alt="USWDS-Icon" class="width-10" />
          </router-link>
        </div>
        <button class="usa-menu-btn">Menu</button>
      </div>
    </div>
    <div class="Site-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppTopBanner from "@/shared/components/AppTopBanner.vue"; 
import AppSpinner from "@/shared/components/AppSpinner.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppTopBanner,
    AppSpinner
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
