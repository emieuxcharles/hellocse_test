import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{e as n,a as t,t as o,o as d}from"./app-407b655f.js";const c={props:{star:Object},methods:{deleteStar(){this.$inertia.delete(route("stars.destroy",{star:this.star.id}))}}},u={class:"grid grid-cols-2 gap-4"},f=["src"],_={class:"text-3xl font-bold"},h={class:"overflow-y-auto h-80"},b={class:"text-gray-500"},m={class:"flex mt-4"};function g(a,s,e,v,x,r){return d(),n("div",u,[t("div",null,[t("img",{src:`/storage/${e.star.image.replace("public/","")}`,class:"max-h-full w-full object-cover"},null,8,f)]),t("div",null,[t("h3",_,o(e.star.first_name)+" "+o(e.star.last_name),1),t("div",h,[t("p",b,o(e.star.description),1)]),t("div",m,[t("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4",onClick:s[0]||(s[0]=l=>a.$inertia.visit(a.route("stars.edit",{star:e.star.id})))}," Edit "),t("button",{class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:s[1]||(s[1]=(...l)=>r.deleteStar&&r.deleteStar(...l))}," Delete ")])])])}const y=i(c,[["render",g]]);export{y as default};