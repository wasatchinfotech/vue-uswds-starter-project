(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a0076ed"],{"25f0":function(t,e,a){"use strict";var s=a("6eeb"),r=a("825a"),i=a("d039"),n=a("ad6d"),l="toString",o=RegExp.prototype,u=o[l],c=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=l;(c||d)&&s(RegExp.prototype,l,(function(){var t=r(this),e=String(t.source),a=t.flags,s=String(void 0===a&&t instanceof RegExp&&!("flags"in o)?n.call(t):a);return"/"+e+"/"+s}),{unsafe:!0})},"44e7":function(t,e,a){var s=a("861d"),r=a("c6b6"),i=a("b622"),n=i("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==r(t))}},"4d63":function(t,e,a){var s=a("83ab"),r=a("da84"),i=a("94ca"),n=a("7156"),l=a("9bf2").f,o=a("241c").f,u=a("44e7"),c=a("ad6d"),d=a("9f7f"),p=a("6eeb"),f=a("d039"),g=a("69f3").set,m=a("2626"),v=a("b622"),h=v("match"),x=r.RegExp,y=x.prototype,w=/a/g,V=/a/g,b=new x(w)!==w,_=d.UNSUPPORTED_Y,E=s&&i("RegExp",!b||_||f((function(){return V[h]=!1,x(w)!=w||x(V)==V||"/a/i"!=x(w,"i")})));if(E){var S=function(t,e){var a,s=this instanceof S,r=u(t),i=void 0===e;if(!s&&r&&t.constructor===S&&i)return t;b?r&&!i&&(t=t.source):t instanceof S&&(i&&(e=c.call(t)),t=t.source),_&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,"")));var l=n(b?new x(t,e):x(t,e),s?this:y,S);return _&&a&&g(l,{sticky:a}),l},R=function(t){t in S||l(S,t,{configurable:!0,get:function(){return x[t]},set:function(e){x[t]=e}})},C=o(x),I=0;while(C.length>I)R(C[I++]);y.constructor=S,S.prototype=y,p(r,"RegExp",S)}m("RegExp")},7156:function(t,e,a){var s=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var i,n;return r&&"function"==typeof(i=e.constructor)&&i!==a&&s(n=i.prototype)&&n!==a.prototype&&r(t,n),t}},8107:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["SLIM"==t.alertType?a("div",{staticClass:"usa-alert usa-alert--slim",class:{"usa-alert--error":t.messageValidator("ERROR"),"usa-alert--success":t.messageValidator("SUCCESS")},attrs:{role:"alert"}},[a("div",{staticClass:"usa-alert__body"},[a("p",{staticClass:"usa-alert__text"},[t._v(t._s(t.messageHeading))])])]):t._e(),"SLIM"!=t.alertType?a("div",{staticClass:"usa-alert",class:{"usa-alert--error":t.messageValidator("ERROR"),"usa-alert--success":t.messageValidator("SUCCESS")},attrs:{role:"alert"}},[a("div",{staticClass:"usa-alert__body"},[a("h3",{staticClass:"usa-alert__heading"},[t._v(t._s(t.messageTypeVal))]),a("p",{staticClass:"usa-alert__text"},[t._v(t._s(t.messageHeading))]),t._l(t.messages,(function(e){return a("p",{key:e,staticClass:"usa-alert__text"},[t._v(t._s(e))])}))],2)]):t._e()])},r=[],i={name:"app-message",data:function(){return{}},props:{messages:{type:Array,default:function(){return[]}},messageTypeVal:{type:String,default:""},messageHeading:{type:String,default:""},alertType:{type:String,default:"SLIM"}},methods:{messageValidator:function(t){return t===this.messageTypeVal}}},n=i,l=a("2877"),o=Object(l["a"])(n,s,r,!1,null,null,null);e["a"]=o.exports},9263:function(t,e,a){"use strict";var s=a("ad6d"),r=a("9f7f"),i=RegExp.prototype.exec,n=String.prototype.replace,l=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,c=void 0!==/()??/.exec("")[1],d=o||c||u;d&&(l=function(t){var e,a,r,l,d=this,p=u&&d.sticky,f=s.call(d),g=d.source,m=0,v=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,m++),a=new RegExp("^(?:"+g+")",f)),c&&(a=new RegExp("^"+g+"$(?!\\s)",f)),o&&(e=d.lastIndex),r=i.call(p?a:d,v),p?r?(r.input=r.input.slice(m),r[0]=r[0].slice(m),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:o&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),c&&r&&r.length>1&&n.call(r[0],a,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=l},"9f7f":function(t,e,a){"use strict";var s=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=s((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var s=a("23e7"),r=a("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,a){"use strict";var s=a("825a");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ca80:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-row"},[a("div",{staticClass:"grid-col-8 grid-offset-2"},[a("AppMessage",{directives:[{name:"show",rawName:"v-show",value:t.displayValidationMessage,expression:"displayValidationMessage"}],attrs:{messageHeading:t.validationMessage,messageTypeVal:t.messageTypeVal}})],1)]),a("form",{staticClass:"usa-form margin-x-auto",attrs:{novalidate:"true"}},[a("div",{staticClass:"grid-row"},[a("legend",{staticClass:"usa-legend"},[t._v("Forgot Username")]),a("AppInputBox",{ref:"emailRef",attrs:{label:"Email Address",ariaRequiredVal:!0,formStatus:t.isFormSubmitted,typeVal:"email",required:!0,errorMessage:"Please enter valid email address",idVal:"forgotUsernameInput"}})],1),a("div",{staticClass:"flex-column"},[a("div",{staticClass:"grid-col"},[a("button",{staticClass:"usa-button width-full",attrs:{type:"submit"},on:{click:t.getUsername}},[t._v("Retrieve Username")])]),a("div",{staticClass:"grid-col"},[a("router-link",{staticClass:"usa-button usa-button--unstyled",attrs:{to:"/auth/forgot-password"}},[t._v("Forgot password?")])],1),a("div",{staticClass:"grid-col"},[a("router-link",{staticClass:"usa-button usa-button--unstyled",attrs:{to:"/auth"}},[t._v("Signin")])],1)])])])},r=[],i=a("8107"),n=a("db2c"),l=a("3f02"),o={name:"forgot-username",data:function(){return{validationMessage:"Please correct the following error(s)",displayValidationMessage:!1,messageTypeVal:l["a"].error,isFormSubmitted:!1}},components:{AppMessage:i["a"],AppInputBox:n["a"]},methods:{showLoading:function(){this.$store.dispatch("app/loading")},hideLoading:function(){this.$store.dispatch("app/loadingComplete")},getUsername:function(t){t.preventDefault(),this.showLoading(),this.isFormSubmitted=!0,this.$refs.emailRef.validateInput(),this.$nextTick((function(){this.$refs.emailRef.isInputBoxValid()&&(this.hideLoading(),this.$router.push("/"))})),this.hideLoading()}}},u=o,c=a("2877"),d=Object(c["a"])(u,s,r,!1,null,null,null);e["default"]=d.exports},cfb1:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("4d63"),a("ac1f"),a("25f0");var s=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"),r=new RegExp("[\\s]"),i=new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),n={methods:{validateStrictPassword:function(t){return s.test(t)},validateBlankSpace:function(t){return r.test(t)},validateEmail:function(t){return i.test(t)}}}},db2c:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"usa-fieldset width-full"},[a("label",{staticClass:"usa-label",class:{"usa-label--error":t.inputError}},[t._v(" "+t._s(t.label)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.inputError,expression:"inputError"}],staticClass:"usa-error-message",attrs:{role:"alert"}},[t._v(t._s(t.errorMessage))]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.passwordRegexError,expression:"passwordRegexError"}],staticClass:"usa-error-message",attrs:{role:"alert"}},[t._v("Password should be 8 character long and must contain one Uppercase, one Lowercase, one Number and any one special character [!,@,#,$,&]")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputVal,expression:"inputVal",modifiers:{trim:!0}}],ref:"baseInput",staticClass:"usa-input",class:{"usa-input--error":t.inputError,"usa-input--success":t.inputSuccess},attrs:{id:t.idVal,name:t.nameVal,type:t.typeVal,autocapitalize:t.autocapVal,autocorrect:t.autocorrectVal,"aria-required":t.ariaRequiredVal,readonly:t.readonly,required:t.required,placeholder:t.placeholder},domProps:{value:t.inputVal},on:{input:function(e){e.target.composing||(t.inputVal=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:"password"===t.typeVal,expression:"typeVal==='password'"}],staticClass:"usa-form__note"},[a("a",{staticClass:"usa-show-password",attrs:{title:"Show password",href:"javascript:void(0);","aria-controls":t.idVal}},[t._v("Show password")])])])])},r=[],i=a("cfb1"),n={name:"app-input-box",data:function(){return{inputVal:null,isInputValid:!0,passwordRegexError:!1}},mixins:[i["a"]],props:{label:{type:String,default:""},idVal:{type:String,default:"inputId"},nameVal:{type:String,default:"inputName"},typeVal:{type:String,default:"text"},autocapVal:{type:String,default:"off"},autocorrectVal:{type:String,default:"off"},ariaRequiredVal:{type:Boolean,default:!1},formStatus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},placeholder:{type:String,default:""},errorMessage:{type:String,default:"Please enter valid entry"}},computed:{inputError:function(){return this.formStatus&&(!this.inputVal||!this.isInputValid)},inputSuccess:function(){return this.formStatus&&!this.inputError&&this.isInputValid}},methods:{validateInput:function(){this.isInputValid=!0,this.passwordRegexError=!1,"email"===this.typeVal?this.validateEmail(this.inputVal)||(this.isInputValid=!1):"password"===this.typeVal&&(this.validateStrictPassword(this.inputVal)||(this.isInputValid=!1,this.passwordRegexError=!0))},isInputBoxValid:function(){return!this.inputError}}},l=n,o=a("2877"),u=Object(o["a"])(l,s,r,!1,null,"62360293",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-1a0076ed.515314c4.js.map