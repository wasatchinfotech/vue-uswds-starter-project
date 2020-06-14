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
    <div
      class="display-flex flex-column flex-align-center margin-top-3"
      v-show="isRegistrationCompleted"
    >
      <router-link class="usa-button usa-button--unstyled" to="/">Go to Home Page</router-link>
    </div>

    <form class="usa-form margin-x-auto" novalidate="true" v-show="!isRegistrationCompleted">
      <div class="grid-row">
        <legend class="usa-legend">Register</legend>

        <AppInputBox
          :label="'Email Address'"
          :ariaRequiredVal="true"
          :formStatus="isFormSubmitted"
          :typeVal="'email'"
          :required="true"
          :errorMessage="'Please enter valid email address'"
          :idVal="'usernameInput'"
          ref="emailRef"
        ></AppInputBox>

        <AppInputBox
          :label="'Password'"
          :ariaRequiredVal="true"
          :formStatus="isFormSubmitted"
          :typeVal="'password'"
          :required="true"
          :errorMessage="'Please enter valid password.'"
          :idVal="'passwordInput'"
          ref="passwordRef"
        ></AppInputBox>
      </div>

      <div class="flex-column">
        <div class="grid-col">
          <button class="usa-button width-full" type="submit" @click="registerUser">Register</button>
        </div>

        <div class="grid-col">
          <router-link
            class="usa-button usa-button--unstyled"
            to="/auth"
          >Signin</router-link>
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
  name: "register",
  data() {
    return {
      validationMessage: "Please correct the following error(s)",
      displayValidationMessage: false,
      messageTypeVal: alertMessageType.error,
      isFormSubmitted: false,
      isRegistrationCompleted: false
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
    registerUser: function(e) {
      e.preventDefault();
      this.showLoading();
      this.isFormSubmitted = true;
      this.$refs.emailRef.validateInput();
      this.$refs.passwordRef.validateInput();

      this.$nextTick(function() {
        if (
          this.$refs.emailRef.isInputBoxValid() &&
          this.$refs.passwordRef.isInputBoxValid()
        ) {
          this.hideLoading();
          this.validationMessage = "Registered Successfully";
          this.displayValidationMessage = true;
          this.messageTypeVal = alertMessageType.success;
          this.isRegistrationCompleted = true;
        }
      });
      this.hideLoading();
    }
  }
};
</script>
