<template>
  <div class="grid-container">  
    <AppMessage v-bind:message="VALIDATION_MESSAGE"></AppMessage>

    <form class="usa-form margin-x-auto">
      <div class="grid-row">
        <legend class="usa-legend">Sign In</legend>
        <br />
        <div class="width-full">
          <span>
            or
            <button
              type="button"
              class="usa-button usa-button--unstyled"
              routerLink="/register"
            >create an account</button>
          </span>
        </div>

        <label class="usa-label" for="username">Username or email address</label>
        <input
          class="usa-input"
          id="username"
          name="username"
          type="text"
          autocapitalize="off"
          autocorrect="off"
        />

        <label class="usa-label" for="password-sign-in">Password</label>
        <input class="usa-input" id="password-sign-in" name="password" type="password" />
        <p class="usa-form__note">
          <a
            title="Show password"
            href="javascript:void(0);"
            class="usa-show-password"
            aria-controls="password-sign-in"
          >Show password</a>
        </p>
      </div>
      <div class="flex-column">
        <div class="grid-col">
          <button class="usa-button width-full" type="submit">Sign in</button>
        </div>
        <div class="grid-col">
          <button type="button" class="usa-button usa-button--unstyled">
            Forgot
            username?
          </button>
        </div>
        <div class="grid-col">
          <button type="button" class="usa-button usa-button--unstyled">
            Forgot
            password?
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import AppMessage from "@/shared/components/AppMessage.vue"; 
export default {
  name: "sign-in",
  data() {
    return {
      VALIDATION_MESSAGE: "Please fix below errors"
    };
  },
  components: {
    AppMessage 
  },
  methods: {
    showLoading() {},
    hideLoading() {}
  },
  mounted(){
     this.$store.dispatch('app/loading');
    setTimeout(() => {
      this.$store.dispatch('app/loadingComplete');
    }, 1500);
  }
};
</script> 
