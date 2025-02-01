import{c as A,K as C,L as N,a as b,h as g,b as h,g as $,N as B,f as L,_ as R,aA as w,ak as O,O as V,S as j,V as n,W as s,X as o,aF as i,T as u,aL as D,Y as y,U as m,a1 as _}from"./index-BMxCNfhY.js";import{u as M}from"./use-quasar-BsqmU9ub.js";import{u as F}from"./useNotify-C7bB6SOh.js";import{m as P}from"./github-markdown-BQ9O_dh8.js";import{u as Q}from"./vue-i18n-CNk1ZW1T.js";const z=A({name:"QBanner",props:{...C,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(r,{slots:e}){const{proxy:{$q:p}}=$(),a=N(r,p),f=b(()=>"q-banner row items-center"+(r.dense===!0?" q-banner--dense":"")+(a.value===!0?" q-banner--dark q-dark":"")+(r.rounded===!0?" rounded-borders":"")),c=b(()=>`q-banner__actions row items-center justify-end col-${r.inlineActions===!0?"auto":"all"}`);return()=>{const l=[g("div",{class:"q-banner__avatar col-auto row items-center self-start"},h(e.avatar)),g("div",{class:"q-banner__content col text-body2"},h(e.default))],d=h(e.action);return d!==void 0&&l.push(g("div",{class:c.value},d)),g("div",{class:f.value+(r.inlineActions===!1&&d!==void 0?" q-banner--top-padding":""),role:"alert"},l)}}}),I=`### Server should have 2 endpoints

- Read items

  \`\`\`
  GET /
  \`\`\`

  - with parameters **\`null\`**
  - with response data **\`TreeNode[]\`**

- Upload items

  \`\`\`
  POST /
  \`\`\`

  - with body

    \`\`\`ts
    {
      label: string;
      path: string;
      children: TreeNode[];
      content: string;
      type: string = 'file' | "directory";
    }
    \`\`\`
  
  - with response

    \`\`\`ts
    null
    \`\`\`

- Create item

  \`\`\`
  POST /item
  \`\`\`

  - with body

    \`\`\`ts
    {
      label: string;
      path: string;
      children: TreeNode[];
      content: string;
      type: string = 'file' | "directory";
    }
    \`\`\`

  - with response data

    \`\`\`ts
    null
    \`\`\`

- Update item

  \`\`\`
  PUT /item
  \`\`\`

  - with body

    \`\`\`ts
    {
      "old_item": {
        label: string;
        path: string;
        children: TreeNode[];
        content: string;
        type: string = 'file' | "directory";
      },
      "new_item": {
        label: string;
        path: string;
        children: TreeNode[];
        content: string;
        type: string = 'file' | "directory";
      }
    }
    \`\`\`

  - with response data

    \`\`\`ts
    null
    \`\`\`

### Schema

\`\`\`typescript
interface UploadNode {
    label: string;
    path: string;
    children: UploadNode[];
    content: string;
    type: string = 'file' | "directory";
}
\`\`\`
`,E={class:"q-px-md q-py-lg"},Y={class:"q-mb-lg"},G={class:"px-2 text-grey-7"},K={class:"row items-center w-full"},W={class:"flex-1 row justify-start items-center"},X={class:"text-ellipsis overflow-x-hidden"},H={class:"flex gap-2"},J={class:"px-2 text-grey-7"},Z={class:"flex justify-between px-1"},ee={class:"flex justify-between px-1"},ae=B({__name:"SettingsView",setup(r){const{t:e}=Q(),p=L("pageTitle");p.value=e("layout.settings");const a=M(),{error:f}=F(),{storeUrl:c}=R(w()),{setStoreUrl:l}=w(),{downloadTree:d,uploadTree:k}=O(),x=t=>{try{return new URL(t),!0}catch{return!1}},q=async()=>{a.dialog({message:await P(I),class:"markdown-body h-[70%] w-fit",html:!0})},T=()=>{a.dialog({title:e("dialog.storeURL"),message:e("dialog.storeURLMessage"),cancel:!0,persistent:!0,prompt:{model:c.value,type:"text"}}).onOk(t=>{t?x(t)?l(t):f(e("notify.invalidURL")):l("")})},S=()=>{a.dialog({title:e("dialog.download"),message:e("dialog.downloadMessage"),cancel:!0,persistent:!0}).onOk(()=>{d().catch(()=>{console.error("Failed to download tree")})})},U=()=>{a.dialog({title:e("dialog.upload"),message:e("dialog.uploadMessage"),cancel:!0,persistent:!0}).onOk(()=>{k().catch(()=>{console.error("Failed to upload tree")})})};return(t,v)=>(V(),j("div",E,[n("div",Y,[n("div",G,s(o(e)("settings.advanced")),1),n("div",{class:i(["flex flex-col rounded-lg p-2 gap-2",t.$q.dark.isActive?"bg-grey-9":"bg-grey-1 shadow-3"])},[n("div",K,[n("div",W,[n("div",null,s(o(e)("settings.storeURL")),1),u(y,{onClick:D(q,["stop"]),flat:"",icon:"help_outline",color:"grey-7",round:"",size:"sm"})]),u(z,{dense:"",rounded:"",class:i(["flex-1 text-left py-1 px-2",t.$q.dark.isActive?"bg-dark":"bg-grey-4"]),onClick:T},{default:m(()=>[n("div",X,s(o(c)),1)]),_:1},8,["class"])]),n("div",{class:i(["h-0.5",t.$q.dark.isActive?"bg-grey-7":"bg-grey-3"])},null,2),n("div",H,[u(y,{padding:"none",outline:"",color:t.$q.dark.isActive?"grey-5":"grey-8",class:"flex-1",onClick:S},{default:m(()=>[_(s(o(e)("settings.download")),1)]),_:1},8,["color"]),u(y,{padding:"none",outline:"",color:t.$q.dark.isActive?"grey-5":"grey-8",class:"flex-1",onClick:U},{default:m(()=>[_(s(o(e)("settings.upload")),1)]),_:1},8,["color"])])],2)]),n("div",null,[n("div",J,s(o(e)("settings.about")),1),n("div",{class:i(["flex flex-col rounded-lg p-2 gap-2",t.$q.dark.isActive?"bg-grey-9":"bg-grey-1 shadow-3"])},[n("div",Z,[n("div",null,s(o(e)("settings.version")),1),v[0]||(v[0]=n("div",null,"2.2",-1))]),n("div",{class:i(["h-0.5",t.$q.dark.isActive?"bg-grey-7":"bg-grey-3"])},null,2),n("div",ee,[n("div",null,s(o(e)("settings.license")),1),n("a",{class:i(["no-underline",t.$q.dark.isActive?"text-grey-3":"text-grey-7"]),href:"https://meizuno.github.io"}," © Yurii Myronov, 2025 ",2)])],2)])]))}});export{ae as _};
