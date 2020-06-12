<template>
  <div class="grid-container">
    <div class="grid-row">
      <div class="grid-col-8 grid-offset-2">
        <AppMessage
          v-bind:messageHeading="validationMessage"
          v-show="displayValidationMessage"
          v-bind:messageTypeVal="messageTypeVal"
        ></AppMessage>
      </div>
    </div>

    <form class="usa-form margin-x-auto" @submit="login" novalidate="true">
      <div class="grid-row">
        <legend class="usa-legend">Sign In</legend>
        <div class="width-full">
          <span class="float-right">
            or
            <router-link to="/auth/register">Create Account</router-link>
          </span>
        </div>

        <fieldset class="usa-fieldset width-full">
          <div class="usa-form-group" :class="{'usa-form-group--error':usernameError}">
            <label
              class="usa-label"
              for="username"
              :class="{'usa-label--error':usernameError}"
            >Username or email address</label>
            <span
              class="usa-error-message"
              role="alert"
              v-show="usernameError"
            >Please enter valid username</span>
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
          <div
            class="usa-form-group"
            :class="{'usa-form-group--error':passwordError || passwordRegexError}"
          >
            <label
              class="usa-label"
              :class="{'usa-label--error':passwordError || passwordRegexError}"
              for="password"
            >Password</label>
            <span
              class="usa-error-message"
              role="alert"
              v-show="passwordError"
            >Please enter valid password</span>

            <span
              class="usa-error-message"
              role="alert"
              v-show="passwordRegexError"
            >Password should be 8 character long and must contain one Uppercase, one Lowercase, one Number and any one special character [!,@,#,$,&]</span>

            <input
              class="usa-input"
              id="password-sign-in"
              name="password"
              type="password"
              v-model="password"
              :class="{'usa-input--error':passwordError || passwordRegexError,'usa-input--success':passwordInputSuccess && !passwordRegexError}"
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
          <router-link
            class="usa-button usa-button--unstyled"
            to="/auth/forgot-username"
          >Forgot username?</router-link>
        </div>
        <div class="grid-col">
          <router-link
            class="usa-button usa-button--unstyled"
            to="/auth/forgot-password"
          >Forgot password?</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import AppMessage from "@/shared/components/AppMessage.vue";
import {
  alertMessageType,
  authMessageType
} from "@/shared/enums/messageTypes.js";
import { regexmixin } from "@/shared/mixins/regexmixin.js";

export default {
  name: "sign-in",
  data() {
    return {
      validationMessage: "Please correct the following error(s)",
      password: null,
      username: null,
      usernameError: false,
      passwordError: false,
      passwordRegexError: false,
      isFormSubmitted: false,
      messageTypeVal: alertMessageType.error
    };
  },
  mixins: [regexmixin],
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
      this.passwordRegexError = false;
      if (!this.username) {
        this.usernameError = true;
      }

      if (!this.password) {
        this.passwordError = true;
      } else if (!this.validateStrictPassword(this.password)) {
        this.passwordRegexError = true;
      }
    },
    login: function(e) {
      e.preventDefault();
      this.showLoading();
      this.validateForm();
      if (
        !this.usernameError &&
        !this.passwordError &&
        !this.passwordRegexError
      ) {
        this.$store
          .dispatch("authentication/login", {
            username: this.username,
            password: this.password
          })
          .then(() => {
            this.$router.replace(this.$route.query.redirect || "/dashboard");
          })
          .catch(err => {
            if (err === authMessageType.credError) {
              this.usernameError = true;
              this.passwordError = true;
              this.validationMessage = "Username and Password does not match";
            }
          })
          .then(() => {
            this.hideLoading();
          });
      } else {
        this.hideLoading();
      }
    }
  },
  mounted() {}
};
</script> 
