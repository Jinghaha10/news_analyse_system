import{f as n,u as o}from"./index.15a69904.js";import{n as l}from"./element-plus.06a878fd.js";var c=s=>{s.directive("format",{beforeMount(f,i){const{arg:m,value:a}=i;if(m==="money"){const r=f.firstElementChild;l(()=>r.value=n(r.value)),r.addEventListener("focus",e=>{if(!e.target)return;const t=e.target;t.value=String(o(t.value)),a[0][a[1]]=t.value},!0),r.addEventListener("blur",e=>{if(!e.target)return;const t=e.target,u=o(n(t.value));a[0][a[1]]=u===""?0:u,l(()=>t.value=n(u))},!0)}}})};export{c as default};
