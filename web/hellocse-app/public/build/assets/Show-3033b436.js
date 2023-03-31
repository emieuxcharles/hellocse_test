import{_ as c}from"./AppLayout-a75efca6.js";import p from"./DeleteUserForm-023f6087.js";import l from"./LogoutOtherBrowserSessionsForm-67450ea8.js";import{S as s}from"./SectionBorder-234025f6.js";import f from"./TwoFactorAuthenticationForm-f81250e2.js";import u from"./UpdatePasswordForm-185ce8a3.js";import _ from"./UpdateProfileInformationForm-5915de3a.js";import{c as d,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-c36bcb2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-be22b098.js";import"./SectionTitle-720738ab.js";import"./DangerButton-c74a378e.js";import"./TextInput-5f68456c.js";import"./SecondaryButton-3e05980b.js";import"./ActionMessage-f7a49cc5.js";import"./PrimaryButton-3a33ccec.js";import"./InputLabel-cbf1a45c.js";import"./FormSection-8b60138f.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};