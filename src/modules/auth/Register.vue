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
  </div>
</template>
<script>
import AppMessage from "@/shared/components/AppMessage.vue";
import {
  alertMessageType 
} from "@/shared/enums/messageTypes.js";
export default {
  name: "register",
  data() {
    return {
      validationMessage: "Please correct the following error(s)",
      displayValidationMessage : false,
      messageTypeVal: alertMessageType.error
    }
  },
  components: {
    AppMessage
  },
  methods: {}
};
</script>
