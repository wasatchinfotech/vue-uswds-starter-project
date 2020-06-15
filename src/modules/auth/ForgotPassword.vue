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

    <form class="usa-form margin-x-auto" novalidate="true">
      <div class="grid-row">
        <legend class="usa-legend">Forgot Password</legend>

        <AppInputBox
          :label="'Email Address'"
          :ariaRequiredVal="true"
          :formStatus="isFormSubmitted"
          :typeVal="'email'"
          :required="true"
          :errorMessage="'Please enter valid email address'"
          :idVal="'forgotUsernameInput'"
          ref="emailRef"
        ></AppInputBox>
      </div>

      <div class="flex-column">
        <div class="grid-col">
          <button class="usa-button width-full" type="submit" @click="getPassword">Retrieve Password</button>
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
            to="/auth/reset-password"
          >Reset Password</router-link>
        </div>
        <div class="grid-col">
          <router-link class="usa-button usa-button--unstyled" to="/auth">Signin</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import AppMessage from "@/shared/components/AppMessage.vue";
import AppInputBox from "@/shared/components/AppInputBox.vue";
import { alertMessageType } from "@/shared/enums/messageTypes.js";
export default {
  name: "forgot-password",
  data() {
    return {
      validationMessage: "Please correct the following error(s)",
      displayValidationMessage: false,
      messageTypeVal: alertMessageType.error,
      isFormSubmitted: false
    };
  },
  components: {
    AppMessage,
    AppInputBox
  },
  methods: {
    showLoading() {
      this.$store.dispatch("app/loading");
    },
    hideLoading() {
      this.$store.dispatch("app/loadingComplete");
    },
    getPassword: function(e) {
      e.preventDefault();
      this.showLoading();
      this.isFormSubmitted = true;
      this.$refs.emailRef.validateInput();

      this.$nextTick(function() {
        if (this.$refs.emailRef.isInputBoxValid()) {
          this.hideLoading();
          this.$router.push("/");
        }
      });
      this.hideLoading();
    }
  }
};
</script>
