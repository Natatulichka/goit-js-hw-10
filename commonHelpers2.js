import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as t}from"./assets/vendor-09593834.js";import{i as l}from"./assets/alert-icon-4e12bf5a.js";const c="/goit-js-hw-10/assets/resolve-icon-fb8a7a60.svg",n=document.querySelector(".form");n.addEventListener("submit",m);function m(o){o.preventDefault();const r=o.target.delay.value,i=o.target.state.value,s=new Promise((e,a)=>{setTimeout(()=>{i==="fulfilled"?e(r):a(r)},r)});s.then(e=>{t.success({title:"OK",message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconColor:"#fff",iconUrl:c,theme:"dark"})}).catch(e=>{t.error({title:"Error",message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:l,theme:"dark"})}),console.log(s)}
//# sourceMappingURL=commonHelpers2.js.map