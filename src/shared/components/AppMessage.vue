<template>
  <div class="usa-alert usa-alert--error" role="alert">
    <div class="usa-alert__body">
      <h3 class="usa-alert__heading">{{messageType}}</h3>
      <p class="usa-alert__text">{{message}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-message",
  data() {
    return { 
    };
  },
  props:{
    message: String,
    messageType: String
  }
};
</script>
