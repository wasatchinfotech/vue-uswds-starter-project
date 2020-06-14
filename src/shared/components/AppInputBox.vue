<template>
  <fieldset class="usa-fieldset width-full">
    <label class="usa-label" :class="{'usa-label--error':inputError}">
      {{label}}
      <span class="usa-error-message" role="alert" v-show="inputError">{{errorMessage}}</span>
      <span
        class="usa-error-message"
        role="alert"
        v-show="passwordRegexError"
      >Password should be 8 character long and must contain one Uppercase, one Lowercase, one Number and any one special character [!,@,#,$,&]</span>

      <input
        class="usa-input"
        ref="baseInput"
        :id="idVal"
        :name="nameVal"
        v-model.trim="inputVal"
        :type="typeVal"
        :autocapitalize="autocapVal"
        :autocorrect="autocorrectVal"
        :aria-required="ariaRequiredVal"
        :readonly="readonly"
        :required="required"
        :placeholder="placeholder"
        :class="{'usa-input--error':inputError,'usa-input--success':inputSuccess}"
      />
      <p class="usa-form__note" v-show="typeVal==='password'">
        <a
          title="Show password"
          href="javascript:void(0);"
          class="usa-show-password"
          aria-controls="passwordInput"
        >Show password</a>
      </p>
    </label>
  </fieldset>
</template>
<script>
import { regexmixin } from "@/shared/mixins/regexmixin.js";
export default {
  name: "app-input-box",
  data() {
    return {
      inputVal: null,
      isInputValid: true,
      passwordRegexError: false
    };
  },
  mixins: [regexmixin],
  props: {
    label: {
      type: String,
      default: ""
    },
    idVal: {
      type: String,
      default: "inputId"
    },
    nameVal: {
      type: String,
      default: "inputName"
    },
    typeVal: {
      type: String,
      default: "text"
    },
    autocapVal: {
      type: String,
      default: "off"
    },
    autocorrectVal: {
      type: String,
      default: "off"
    },
    ariaRequiredVal: {
      type: Boolean,
      default: false
    },
    formStatus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    errorMessage: {
      type: String,
      default: "Please enter valid entry"
    }
  },
  computed: {
    inputError() {
      return this.formStatus && (!this.inputVal || !this.isInputValid);
    },
    inputSuccess() {
      return this.formStatus && !this.inputError && this.isInputValid;
    }
  },
  methods: {
    validateInput() {
      this.isInputValid = true;
      this.passwordRegexError = false;
      if (this.typeVal === "email") {
        if (!this.validateEmail(this.inputVal)) {
          this.isInputValid = false;
        }
      } else if (this.typeVal === "password") {
        if (!this.validateStrictPassword(this.inputVal)) {
          this.isInputValid = false;
          this.passwordRegexError = true;
        }
      }
    },
    isInputBoxValid() {
      return !this.inputError;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>