import{u as l}from"./index-38fe0a3f.js";import{e as d,a as e,l as a,H as i,i as m,o as u}from"./app-407b655f.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const c={setup(){const n=l({first_name:"",last_name:"",image:null,description:""});function o(t){n.image=t.target.files[0]}function r(){n.post(route("stars.store"),{onSuccess:()=>{n.reset(),this.$inertia.visit(route("stars.index"))}})}return{form:n,onImageChange:o,submit:r}}},b={class:"max-w-3xl mx-auto py-8"},p=e("h1",{class:"text-2xl font-bold mb-4"},"Ajouter une star",-1),g={class:"mb-4"},_=e("label",{class:"block text-gray-700 font-bold mb-2",for:"first_name"},"Prénom",-1),x={class:"mb-4"},h=e("label",{class:"block text-gray-700 font-bold mb-2",for:"last_name"},"Nom",-1),w={class:"mb-4"},y=e("label",{class:"block text-gray-700 font-bold mb-2",for:"image"},"Image",-1),v={class:"mb-4"},k=e("label",{class:"block text-gray-700 font-bold mb-2",for:"description"},"Description",-1),C=e("div",{class:"flex items-center justify-between"},[e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Ajouter")],-1);function I(n,o,r,t,V,j){return u(),d("div",b,[p,e("form",{class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:o[4]||(o[4]=m((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",g,[_,a(e("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"first_name",type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>t.form.first_name=s),required:""},null,512),[[i,t.form.first_name]])]),e("div",x,[h,a(e("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"last_name",type:"text","onUpdate:modelValue":o[1]||(o[1]=s=>t.form.last_name=s),required:""},null,512),[[i,t.form.last_name]])]),e("div",w,[y,e("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"image",type:"file",ref:"image",onChange:o[2]||(o[2]=(...s)=>t.onImageChange&&t.onImageChange(...s))},null,544)]),e("div",v,[k,a(e("textarea",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"description","onUpdate:modelValue":o[3]||(o[3]=s=>t.form.description=s)},null,512),[[i,t.form.description]])]),C],32)])}const A=f(c,[["render",I]]);export{A as default};