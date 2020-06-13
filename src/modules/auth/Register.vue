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
          :errorMessage="'Please enter valid password'"
          :idVal="'passwordInput'"
          ref="passwordRef"
        ></AppInputBox>
      </div>

      <div class="flex-column">
        <div class="grid-col">
          <button
            class="usa-button width-full"
            type="submit"
            v-on:click="isFormSubmitted=true"
            @click="registerUser"
          >Register</button>
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
      isFormSubmitted: false
    };
  },
  components: {
    AppMessage,
    AppInputBox
  },
  methods: {
    registerUser: function(e) {
      e.preventDefault();
      console.log("email ref :: " + this.$refs.emailRef.inputVal);
      this.$refs.emailRef.validateInput();
      this.$refs.passwordRef.validateInput();
      console.log("password ref :: " + this.$refs.passwordRef.isInputBoxValid());
    }
  }
};
</script>
