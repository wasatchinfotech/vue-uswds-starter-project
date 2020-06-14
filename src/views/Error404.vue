<template>
  <div class="grid-container margin-top-3">
    <div class="grid-row">
      <div class="grid-col-8 grid-offset-2">
        <AppMessage
          v-bind:messageHeading="validationMessage"
          v-bind:messageTypeVal="messageTypeVal"
          :alertType="''"
        ></AppMessage>
      </div>
    </div>
    <div class="display-flex flex-column flex-align-center margin-top-3">
      <router-link class="usa-button usa-button--unstyled" to="/">Go to Home Page</router-link>
    </div>
  </div>
</template>

<script>
import AppMessage from "@/shared/components/AppMessage.vue";
import { alertMessageType } from "@/shared/enums/messageTypes.js";
export default {
  name: "error-page",
  data() {
    return {
      validationMessage: "System unable to find requested page",
      messageTypeVal: alertMessageType.error
    };
  },
  components: {
    AppMessage
  }
};
</script>
