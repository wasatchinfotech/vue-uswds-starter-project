<template>
  <div class="Site">
    <AppTopBanner></AppTopBanner>
    <HeaderComponent></HeaderComponent>
    <div class="Site-content">
      <div class="usa-section">
        <div class="grid-container">
          <div class="grid-row grid-gap">
            <div class="usa-layout-docs__sidenav desktop:grid-col-3">
              <nav aria-label="Secondary navigation">
                <ul class="usa-sidenav">
                  <li class="usa-sidenav__item">
                    <router-link to="/dashboard" class="usa-current">Dashboard</router-link>
                    <ul class="usa-sidenav__sublist">
                      <li class="usa-sidenav__item">
                        <router-link
                          to="/dashboard/profile"
                          exact-active-class="usa-current"
                        >Profile</router-link>
                      </li>
                      <li class="usa-sidenav__item">
                        <router-link
                          to="/dashboard/settings"
                          exact-active-class="usa-current"
                        >Setting</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <main
              class="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs"
              id="main-content"
            >
              <transition>
                <router-view />
              </transition>
            </main>
          </div>
        </div>
      </div>
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
  },
  methods: {
    getActiveLink: function(e) {
      console.log("val" + e);
    }
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
