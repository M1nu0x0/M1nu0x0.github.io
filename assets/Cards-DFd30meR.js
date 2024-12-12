import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as d,o,c as r,F as i,f as l,a as s,t,g as _}from"./app-DQV39Fq-.js";const p=d({name:"Card",props:{category:{type:String,required:!0}},data(){return{datas:[]}},async mounted(){try{const c=await(await fetch("/repos_data.json")).json();this.category==="pages"?this.datas=c.pages||[]:this.category==="repositories"?this.datas=c.repos||[]:this.datas=[]}catch(a){console.error("Failed to load repos_data.json:",a)}}}),h={class:"card-container"},f={key:0,class:"card-header"},u={class:"card-content"},m={class:"tag"},g={class:"card-title"},v=["href"],y={class:"card-description"},x={class:"text-sm text-gray-500"},k={class:"card-footer"},C={class:"text-xs text-gray-400"};function b(a,c,F,$,j,B){return o(),r("div",h,[(o(!0),r(i,null,l(a.datas,e=>(o(),r("div",{key:e.name,class:"card"},[e.header&&e.header.trim()?(o(),r("div",f,[s("p",null,t(e.header),1)])):_("",!0),s("div",u,[s("div",m,t(e.language||"docs"),1),s("div",g,[s("a",{href:e.url,target:"_blank",class:"text-blue-500 font-bold hover:underline"},t(e.name),9,v)]),s("div",y,[s("p",x,t(e.description||"No description available"),1)])]),s("div",k,[s("p",C,t(e.last_updated||"Forks: "+e.forks+" | Stars: "+e.stars),1)])]))),128))])}const w=n(p,[["render",b],["__scopeId","data-v-f54ad4ff"],["__file","Cards.vue"]]);export{w as default};
