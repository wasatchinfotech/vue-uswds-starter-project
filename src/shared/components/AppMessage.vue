<template>
  <div>
    <div
      class="usa-alert usa-alert--slim"
      :class="{'usa-alert--error': messageValidator('ERROR')}"
      role="alert"
      v-if="alertType=='SLIM'"
    >
      <div class="usa-alert__body">
        <p class="usa-alert__text">{{messageHeading}}</p>
      </div>
    </div>
    <div
      class="usa-alert"
      :class="{'usa-alert--error': messageValidator('ERROR')}"
      role="alert"
      v-if="alertType!='SLIM'"
    >
      <div class="usa-alert__body">
        <h3 class="usa-alert__heading">{{messageTypeVal}}</h3>
        <p class="usa-alert__text">{{messageHeading}}</p>
        <p class="usa-alert__text" v-for="msg in messages" v-bind:key="msg">{{msg}}</p>
      </div>
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
    },
    alertType: {
      type: String,
      default: "SLIM"
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
