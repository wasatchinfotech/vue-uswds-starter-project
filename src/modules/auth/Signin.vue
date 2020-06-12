<template>
  <div class="grid-container">
    <AppMessage
      v-bind:messageHeading="VALIDATION_MESSAGE"
      v-show="displayValidationMessage"
      v-bind:messageTypeVal="messageTypeVal"
    ></AppMessage>

    <form class="usa-form margin-x-auto" @submit="login" novalidate="true">
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

        <fieldset class="usa-fieldset width-full">
          <div class="usa-form-group" :class="{'usa-form-group--error':usernameError}">
            <label
              class="usa-label"
              for="username"
              :class="{'usa-label--error':usernameError}"
            >Username or email address</label>
            <span class="usa-error-message" role="alert" v-show="usernameError">Error</span>
            <input
              class="usa-input"
              id="username"
              name="username"
              v-model="username"
              type="text"
              autocapitalize="off"
              autocorrect="off"
              aria-required="true"
              :class="{'usa-input--error':usernameError,'usa-input--success':usernameInputSuccess}"
            />
          </div>
        </fieldset>

        <fieldset class="usa-fieldset width-full">
          <div class="usa-form-group" :class="{'usa-form-group--error':passwordError}">
            <label
              class="usa-label"
              :class="{'usa-label--error':passwordError}"
              for="password"
            >Password</label>
            <span
              class="usa-error-message"
              role="alert"
              v-show="passwordError"
            >Helpful error message</span>
            <input
              class="usa-input"
              id="password-sign-in"
              name="password"
              type="password"
              v-model="password"
              :class="{'usa-input--error':passwordError,'usa-input--success':passwordInputSuccess}"
            />
            <p class="usa-form__note">
              <a
                title="Show password"
                href="javascript:void(0);"
                class="usa-show-password"
                aria-controls="password-sign-in"
              >Show password</a>
            </p>
          </div>
        </fieldset>
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
import { messageType } from "@/shared/enums/messageTypes.js";

export default {
  name: "sign-in",
  data() {
    return {
      VALIDATION_MESSAGE: "Please correct the following error(s)",
      password: null,
      username: null,
      usernameError: false,
      passwordError: false,
      isFormSubmitted: false,
      messageTypeVal: messageType.error
    };
  },
  computed: {
    passwordInputSuccess() {
      return this.isFormSubmitted && !this.passwordError;
    },
    usernameInputSuccess() {
      return this.isFormSubmitted && !this.usernameError;
    },
    displayValidationMessage() {
      return this.isFormSubmitted && (this.usernameError || this.passwordError);
    }
  },
  components: {
    AppMessage
  },
  methods: {
    showLoading() {
      this.$store.dispatch("app/loading");
    },
    hideLoading() {
      this.$store.dispatch("app/loadingComplete");
    },
    validateForm() {
      this.isFormSubmitted = true;
      this.usernameError = false;
      this.passwordError = false;

      if (this.username && this.password) return true;

      if (!this.username) {
        this.usernameError = true;
      }
      if (!this.password) {
        this.passwordError = true;
      }
      return false;
    },
    login: function(e) {
      e.preventDefault();
      this.showLoading();
      if (this.validateForm()) {
        return true;
      }
      this.hideLoading();
    }
  },
  mounted() {}
};
</script> 
