!function(n){"use strict";var r=n(".validate-input .input100");function l(t){if("email"==n(t).attr("type")||"email"==n(t).attr("name")){if(null==n(t).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/))return!1}else if(""==n(t).val().trim())return!1}n(".validate-form").on("submit",function(){for(var t,e,a=!0,i=0;i<r.length;i++)0==l(r[i])&&(t=r[i],void 0,e=n(t).parent(),n(e).addClass("alert-validate"),a=!1);return a}),n(".validate-form .input100").each(function(){n(this).focus(function(){var t;t=n(this).parent(),n(t).removeClass("alert-validate")})}),n(".simpleslide100").each(function(){var t=n(this).find(".simpleslide100-item"),e=0;n(t).hide(),n(t[e]).show(),++e>=t.length&&(e=0),setInterval(function(){n(t).fadeOut(1e3),n(t[e]).fadeIn(1e3),++e>=t.length&&(e=0)},7e3)})}(jQuery);