import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as c}from"./assets/vendor-9808d4ac.js";document.addEventListener("DOMContentLoaded",function(){let e;l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0],e<new Date?(c.error({title:"Error",message:"Please choose a date in the future"}),document.getElementById("start-btn").disabled=!0):document.getElementById("start-btn").disabled=!1}}),document.getElementById("start-btn").addEventListener("click",function(){this.disabled=!0,document.getElementById("datetime-picker").disabled=!0;const t=setInterval(function(){const o=e-new Date;if(o<=0)clearInterval(t),c.success({title:"Success",message:"Countdown timer has ended"}),document.getElementById("start-btn").disabled=!1,document.getElementById("datetime-picker").disabled=!1;else{const{days:s,hours:r,minutes:a,seconds:d}=m(o);document.getElementById("timer").innerText=`${n(s)} Days ${n(r)} Hours ${n(a)} Minutes ${n(d)} Seconds`}},1e3)})});function m(e){const s=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),a=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:r,minutes:a,seconds:d}}function n(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
