(()=>{function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n,o=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=t.settings.id;this.$form=e,this.formInstance=t,this.formId=r}var o,a,f;return o=n,a=[{key:"init",value:function(){var e=this;this.$form.on("fluentform_next_action_paystack",(function(t,r){var n=r.response;e.$form.parent().find(".ff_paystack_text").remove(),jQuery("<div/>",{id:"form_success",class:"ff-message-success ff_paystck_text"}).html(n.data.message).insertAfter(e.$form),"initPaystackModal"===n.data.actionName?e.initPaystackModal(n.data):alert("No method found")}))}},{key:"initPaystackModal",value:function(r){var n=this,o=r.modal_data;o.callback=function(o){n.formInstance.hideFormSubmissionProgress(n.$form);var a=function(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){t(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}({action:"fluentform_paystack_confirm_payment",form_id:n.formId},o);n.$form.parent().find(".ff_paystck_text").remove(),jQuery("<div/>",{id:n.formId+"_success",class:"ff-message-success ff_msg_temp ff_razorpay_text"}).html(r.confirming_text).insertAfter(n.$form),n.formInstance.showFormSubmissionProgress(n.$form),n.formInstance.sendData(n.$form,a)},o.onClose=function(e){n.$form.parent().find(".ff_paystck_text").remove()},PaystackPop.setup(o).openIframe()}}],a&&r(o.prototype,a),f&&r(o,f),Object.defineProperty(o,"prototype",{writable:!1}),n}();(n=jQuery).each(n("form.fluentform_has_payment"),(function(){var e=n(this);e.on("fluentform_init_single",(function(t,r){new o(e,r).init()}))}))})();