var passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})')
var blankRegex = new RegExp('[\\s]')
var emailPattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
export const regexmixin = {
  methods: {
    validateStrictPassword (passfield) {
      return passwordRegex.test(passfield)
    },
    validateBlankSpace (fieldVal) {
      return blankRegex.test(fieldVal)
    },
    validateEmail: function (email) {
      return emailPattern.test(email)
    }
  }
}
