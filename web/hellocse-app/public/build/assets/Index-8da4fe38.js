import{_ as f}from"./AppLayout-38078d76.js";import m from"./Details-bfe512a7.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{c as g,w as l,aW as n,o as a,a as s,e as r,h,F as x,b as y,f as v,n as c,t as d,aR as b,aO as S}from"./app-1633478d.js";const w={created(){this.stars.length>0&&(this.selectedStar=this.stars[0])},data(){return{selectedStar:null}},props:{stars:Array},components:{AppLayout:f,Details:m}},k=o=>(b("data-v-22317f76"),o=o(),S(),o),C=k(()=>s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Liste des stars ",-1)),I={class:"py-12 lg:flex lg:justify-center border"},D={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 lg:flex lg:space-x-4"},L={class:"w-full lg:w-1/2 rounded-lg lg:rounded-l-lg overflow-hidden"},A=["onClick"],B={key:0,class:"w-full lg:w-1/2"};function N(o,V,i,F,t,j){const _=n("Details"),p=n("AppLayout");return a(),g(p,{title:"Dashboard"},{header:l(()=>[C]),default:l(()=>[s("div",I,[s("div",D,[s("div",L,[(a(!0),r(x,null,h(i.stars,e=>(a(),r("div",{key:e.id,onClick:z=>t.selectedStar=e,class:c(["bg-gray-200 divide-gray-400 py-4 px-6 cursor-pointer border-b border-gray-400",{"bg-white font-bold":e===t.selectedStar}])},[s("span",{class:c({"border-r border-transparent":e!==t.selectedStar})},d(e.first_name)+" "+d(e.last_name),3)],10,A))),128))]),t.selectedStar?(a(),r("div",B,[y(_,{star:t.selectedStar},null,8,["star"])])):v("",!0)])])]),_:1})}const q=u(w,[["render",N],["__scopeId","data-v-22317f76"]]);export{q as default};