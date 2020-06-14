<template>
  <div>
    <div class="usa-overlay"></div>
    <header class="usa-header usa-header--basic">
      <div class="usa-nav-container">
        <div class="usa-navbar">
          <div class="usa-logo" id="basic-logo">
            <em class="usa-logo__text">
              <a href="/" title="Home" aria-label="Home">USWDS Vue</a>
            </em>
          </div>
          <button class="usa-menu-btn">Menu</button>
        </div>
        <nav aria-label="Primary navigation" class="usa-nav">
          <button class="usa-nav__close">
            <img src="/assets/img/close.svg" alt="close" />
          </button>
          <ul class="usa-nav__primary usa-accordion" id="header-nav">
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link usa-current"
                aria-expanded="false"
                aria-controls="basic-nav-section-one"
                @click="isFirstMenuOpen = true"
              >
                <span>Current section</span>
              </button>
              <ul id="basic-nav-section-one" class="usa-nav__submenu" v-show="isFirstMenuOpen">
                <li class="usa-nav__submenu-item" v-show="isUserLoggedIn">
                  <a href="#/dashboard" class>Dashboard</a>
                </li>
                <li class="usa-nav__submenu-item">
                  <a href="#" class>Navigation link</a>
                </li>
                <li class="usa-nav__submenu-item">
                  <a href="#" class>Navigation link</a>
                </li>
              </ul>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link"
                aria-expanded="false"
                aria-controls="basic-nav-section-two"
                @click="isSecondMenuOpen=true"
              >
                <span>Section</span>
              </button>
              <ul id="basic-nav-section-two" class="usa-nav__submenu" v-show="isSecondMenuOpen">
                <li class="usa-nav__submenu-item">
                  <a href="#/about" class>About Us</a>
                </li>
                <li class="usa-nav__submenu-item">
                  <a href="#" class>Navigation link</a>
                </li>
                <li class="usa-nav__submenu-item">
                  <a href="#" class>Navigation link</a>
                </li>
              </ul>
            </li>
            <li class="usa-nav__primary-item">
              <a class="usa-nav__link" href="#/auth" v-show="!isUserLoggedIn">
                <span>Login</span>
              </a>
              <a class="usa-nav__link" href="#/auth/signout" v-show="isUserLoggedIn">
                <span>Logout</span>
              </a>
            </li>
          </ul>
          <form class="usa-search usa-search--small" role="search">
            <label class="usa-sr-only" for="basic-search-field-small">Search small</label>
            <input class="usa-input" id="basic-search-field-small" type="search" name="search" />
            <button class="usa-button" type="submit">
              <span class="usa-sr-only">Search</span>
            </button>
          </form>
        </nav>
      </div>
    </header>
    <main id="main-content"></main>
  </div>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      isFirstMenuOpen: false,
      isSecondMenuOpen: false
    };
  },
  computed: {
    isUserLoggedIn() {
      return !!localStorage.getItem("isUserValid");
    }
  }
};
</script>
