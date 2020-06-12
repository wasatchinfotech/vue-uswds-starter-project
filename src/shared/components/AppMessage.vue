<template>
  <div class="usa-alert" :class="{'usa-alert--error': messageValidator('ERROR')}" role="alert">
    <div class="usa-alert__body">
      <h3 class="usa-alert__heading">{{messageTypeVal}}</h3>
      <p class="usa-alert__text">{{messageHeading}}</p>
      <p class="usa-alert__text" v-for="msg in messages" v-bind:key="msg">{{msg}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-message",
  data() {
    return {};
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    messageTypeVal: {
      type: String,
      default: ""
    },
    messageHeading: {
      type: String,
      default: ""
    }
  },
  methods: {
    messageValidator(msgType) {
      if (msgType === this.messageTypeVal) {
        return true;
      }
      return false;
    }
  }
};
</script>
